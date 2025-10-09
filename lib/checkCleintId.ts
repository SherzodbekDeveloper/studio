import { getClientByCode } from "./firestore"
import type { Client } from "@/types"

export async function checkClientId(clientId: string): Promise<Client | null> {
  return await getClientByCode(clientId)
}
