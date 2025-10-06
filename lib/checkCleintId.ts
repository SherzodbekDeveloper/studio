import { collection, query, where, getDocs } from "firebase/firestore"
import { db } from "./firebase"

export async function checkClientId(clientId: string) {
  // stringni numberga o'tkazamiz
  const clientNumber = Number(clientId)

  const q = query(collection(db, "users"), where("client_id", "==", clientNumber))
  const snapshot = await getDocs(q)

  if (snapshot.empty) return null

  const doc = snapshot.docs[0]
  return { id: doc.id, ...doc.data() }
}
