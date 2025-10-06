import { collection, query, where, getDocs } from "firebase/firestore"
import { db } from "./firebase"
import { Client } from '@/app/client-page/page'

export async function checkClientId(clientId: string): Promise<Client | null> {
  const clientNumber = Number(clientId)
  if (isNaN(clientNumber)) return null

  const q = query(collection(db, "users"), where("client_id", "==", clientNumber))
  const snapshot = await getDocs(q)

  if (snapshot.empty) return null

  const doc = snapshot.docs[0]
  return doc.data() as Client
}