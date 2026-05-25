export type Application = {
  id: number
  user_id: string
  created_at: string
  company: string
  role: string
  applied: string
  status: string
  location: string
  resume: string
  notes: string
}

export const EMPTY_STATUS = "---"

export function createEmptyApplication(
  id: number,
  user_id: string,
): Application {
  return {
    id,
    user_id,
    created_at: new Date().toISOString(),
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
