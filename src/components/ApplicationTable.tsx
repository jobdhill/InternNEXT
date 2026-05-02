import { useState } from "react"

type Application = {
  id: number
  company: string
  role: string
  applied: string
  status: string
  location: string
  resume: string
  notes: string
}

type Column = {
  label: string
  key: keyof Application
}

type EditableColumn = Exclude<keyof Application, "id">

const createEmptyApplication = (id: number): Application => ({
  id,
  company: "",
  role: "",
  applied: "",
  status: "",
  location: "",
  resume: "",
  notes: "",
})

export default function ApplicationTable() {
  const [applications, setApplications] = useState<Application[]>([
    createEmptyApplication(1),
  ])

  const updateCell = (
    rowId: number,
    field: EditableColumn,
    value: string,
  ) => {
    setApplications((previous) =>
      previous.map((application) =>
        application.id === rowId
          ? { ...application, [field]: value }
          : application,
      ),
    )
  }

  const addRow = () => {
    setApplications((previous) => [
      ...previous,
      createEmptyApplication(previous.length + 1),
    ])
  }

  return (
    <div className="w-full h-full overflow-x-auto space-y-3">
      <table className="w-full border-separate border-spacing-w md:border-spacing-4">
        <thead>
          <tr className="bg-gray-300 rounded-2xl">
            {headerData.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {applications.map((application) => (
            <tr key={application.id} className="bg-white">
              {columns.map((column) => (
                <td key={column.key} className="p-1 border-b">
                  {column.key === "id" ? (
                    application.id
                  ) : (
                    <input
                      value={application[column.key]}
                      onChange={(event) =>
                        updateCell(
                          application.id,
                          column.key as EditableColumn,
                          event.target.value,
                        )
                      }
                      placeholder={column.label}
                      className="w-full p-1"
                    />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <button
        type="button"
        onClick={addRow}
        className="bg-blue-600 text-white rounded px-3 py-2 hover:bg-blue-700"
      >
        Add Row
      </button>
    </div>
  )
}


const headerData = [
        "#",
        "Company",
        "Role",
        "Applied",
        "Status",
        "Location",
        "Resume",
        "Notes"
]
const columns: Column[] = [
  { label: "#", key: "id" },
  { label: "Company", key: "company" },
  { label: "Role", key: "role" },
  { label: "Applied", key: "applied" },
  { label: "Status", key: "status" },
  { label: "Location", key: "location" },
  { label: "Resume", key: "resume" },
  { label: "Notes", key: "notes" },
]