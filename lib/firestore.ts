import { collection, query, where, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore"
import { db } from "./firebase"
import type { ClientDocument, Client, ClientLink, FirestoreClientData } from "@/types"

const CLIENTS_COLLECTION = "clients"

function documentToClient(docId: string, data: FirestoreClientData): Client {
  const videos: string[] = data.clientLinks?.map((item: ClientLink) => item.link) || []

  return {
    client_id: data.code || docId,
    name: data.name || "",
    videos: videos,
    phone: data.phone || "",
    address: data.address || "",
    userId: data.userId || "",
    email: data.email || "",
    notes: data.notes || "",
    code: data.code || "",
    createdAt: data.createdAt || 0,
  }
}

export async function getClientByCode(code: string): Promise<Client | null> {
  if (!code.trim()) return null

  try {
    const q = query(collection(db, CLIENTS_COLLECTION), where("code", "==", code))
    const snapshot = await getDocs(q)

    if (snapshot.empty) return null

    const doc = snapshot.docs[0]
    return documentToClient(doc.id, doc.data() as FirestoreClientData)
  } catch (error) {
    console.error("Error fetching client by code:", error)

    // Re-throw permission errors so they can be handled in the UI
    if (
      error instanceof Error &&
      (error.message.includes("permission") || (error as { code?: string }).code === "permission-denied")
    ) {
      throw new Error("Firestore permission denied. Please deploy firestore.rules.")
    }

    return null
  }
}

/**
 * Get client by document ID
 */
export async function getClientById(clientId: string): Promise<Client | null> {
  try {
    const docRef = doc(db, CLIENTS_COLLECTION, clientId)
    const docSnap = await getDoc(docRef)

    if (!docSnap.exists()) return null

    return documentToClient(docSnap.id, docSnap.data() as FirestoreClientData)
  } catch (error) {
    console.error("Error fetching client by ID:", error)
    return null
  }
}

/**
 * Get all clients for a specific user
 */
export async function getClientsByUserId(userId: string): Promise<Client[]> {
  try {
    const q = query(collection(db, CLIENTS_COLLECTION), where("userId", "==", userId))
    const snapshot = await getDocs(q)

    return snapshot.docs.map((doc) => documentToClient(doc.id, doc.data() as FirestoreClientData))
  } catch (error) {
    console.error("Error fetching clients by user ID:", error)
    return []
  }
}

/**
 * Create a new client
 */
export async function createClient(clientData: {
  code: string
  name: string
  address?: string
  phone?: string
  email?: string
  userId: string
  clientLinks?: ClientLink[]
  notes?: string
}): Promise<string | null> {
  try {
    const docRef = await addDoc(collection(db, CLIENTS_COLLECTION), {
      ...clientData,
      address: clientData.address || "",
      phone: clientData.phone || "",
      email: clientData.email || "",
      clientLinks: clientData.clientLinks || [],
      notes: clientData.notes || "",
      createdAt: Date.now(),
      id: "", // Will be updated after creation
    })

    // Update the document with its own ID
    await updateDoc(docRef, {
      id: docRef.id,
    })

    return docRef.id
  } catch (error) {
    console.error("Error creating client:", error)
    return null
  }
}

/**
 * Update an existing client
 */
export async function updateClient(
  clientId: string,
  updates: Partial<Omit<ClientDocument, "id" | "createdAt">>,
): Promise<boolean> {
  try {
    const docRef = doc(db, CLIENTS_COLLECTION, clientId)
    await updateDoc(docRef, updates)
    return true
  } catch (error) {
    console.error("Error updating client:", error)
    return false
  }
}

/**
 * Delete a client
 */
export async function deleteClient(clientId: string): Promise<boolean> {
  try {
    const docRef = doc(db, CLIENTS_COLLECTION, clientId)
    await deleteDoc(docRef)
    return true
  } catch (error) {
    console.error("Error deleting client:", error)
    return false
  }
}

/**
 * Add a video link to a client
 */
export async function addClientLink(clientId: string, link: string): Promise<boolean> {
  try {
    const client = await getClientById(clientId)
    if (!client) return false

    const currentLinks = client.videos.map((video) => ({ link: video }))
    const updatedLinks = [...currentLinks, { link }]

    return await updateClient(clientId, { clientLinks: updatedLinks })
  } catch (error) {
    console.error("Error adding client link:", error)
    return false
  }
}

/**
 * Remove a video link from a client
 */
export async function removeClientLink(clientId: string, linkToRemove: string): Promise<boolean> {
  try {
    const client = await getClientById(clientId)
    if (!client) return false

    const updatedLinks = client.videos.filter((video) => video !== linkToRemove).map((video) => ({ link: video }))

    return await updateClient(clientId, { clientLinks: updatedLinks })
  } catch (error) {
    console.error("Error removing client link:", error)
    return false
  }
}

/**
 * Generate a unique 6-digit code for a new client
 */
export async function generateUniqueCode(): Promise<string> {
  let code: string
  let exists = true

  while (exists) {
    // Generate random 6-digit code
    code = Math.floor(100000 + Math.random() * 900000).toString()

    // Check if code already exists
    const q = query(collection(db, CLIENTS_COLLECTION), where("code", "==", code))
    const snapshot = await getDocs(q)
    exists = !snapshot.empty
  }

  return code!
}
