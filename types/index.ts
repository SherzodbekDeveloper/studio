// Firestore client document structure
export interface ClientLink {
  link: string
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

// Client type for application use
export interface Client {
  client_id: string
  name: string
  videos: string[]
  phone?: string
  address?: string
  userId?: string
  email?: string
  notes?: string
  code?: string
  createdAt?: number
}
