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


export interface Employee {
  id: string
  name: string
  avatar?: string
  birthday: string 
  position: string
  department: string
  image: string
}

export interface TimeRemaining {
  months: number
  days: number
  hours: number
  minutes: number
  seconds: number
  totalMs: number
}


export const sampleEmployees: Employee[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    birthday: "12-15",
    position: "Senior Developer",
    department: "Engineering",
    image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpulitzercenter.org%2Fpeople%2Fsarah-johnson&psig=AOvVaw1NpQbWOpA7hBXYd2gSnKkl&ust=1765897719754000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPDvp-Tvv5EDFQAAAAAdAAAAABAE"
  },
  {
    id: "2",
    name: "Michael Chen",
    birthday: "12-14",
    position: "Product Manager",
    department: "Product",
     image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpulitzercenter.org%2Fpeople%2Fsarah-johnson&psig=AOvVaw1NpQbWOpA7hBXYd2gSnKkl&ust=1765897719754000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPDvp-Tvv5EDFQAAAAAdAAAAABAE"
  },
  {
    id: "3",
    name: "Emma Williams",
    birthday: "12-18",
    position: "UX Designer",
    department: "Design",
     image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpulitzercenter.org%2Fpeople%2Fsarah-johnson&psig=AOvVaw1NpQbWOpA7hBXYd2gSnKkl&ust=1765897719754000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPDvp-Tvv5EDFQAAAAAdAAAAABAE"
  },
  {
    id: "4",
    name: "James Rodriguez",
    birthday: "12-20",
    position: "Marketing Lead",
    department: "Marketing",
     image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpulitzercenter.org%2Fpeople%2Fsarah-johnson&psig=AOvVaw1NpQbWOpA7hBXYd2gSnKkl&ust=1765897719754000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPDvp-Tvv5EDFQAAAAAdAAAAABAE"
  },
  {
    id: "5",
    name: "Lisa Anderson",
    birthday: "01-05",
    position: "HR Manager",
    department: "Human Resources",
     image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpulitzercenter.org%2Fpeople%2Fsarah-johnson&psig=AOvVaw1NpQbWOpA7hBXYd2gSnKkl&ust=1765897719754000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPDvp-Tvv5EDFQAAAAAdAAAAABAE"
  },
]