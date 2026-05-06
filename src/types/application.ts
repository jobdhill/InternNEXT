export type Application = {
  id: number
  company: string
  role: string
  applied: string
  status: string
  location: string
  resume: string
  notes: string
}

export const EMPTY_STATUS = "---"

export function createEmptyApplication(id: number): Application {
  return {
    id,
    company: "",
    role: "",
    applied: "",
    status: "",
    location: "",
    resume: "",
    notes: "",
  }
}

export function nextApplicationId(applications: Application[]): number {
  if (applications.length === 0) return 1
  return Math.max(...applications.map((a) => a.id)) + 1
}
