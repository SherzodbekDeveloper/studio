export interface ClientLink {
  link: string
}

export interface Client {
  client_id: string
  name: string
  videos: string[]
  phone: string
  address: string
  userId: string
  email: string
  notes: string
  code: string
  createdAt: number
}

export interface ClientDocument {
  id: string
  code: string
  name: string
  address: string
  phone: string
  email: string
  userId: string
  clientLinks: ClientLink[]
  notes: string
  createdAt: number
}

export interface FirestoreClientData {
  code?: string
  name?: string
  clientLinks?: ClientLink[]
  phone?: string
  address?: string
  userId?: string
  email?: string
  notes?: string
  createdAt?: number
}
