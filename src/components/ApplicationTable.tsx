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

  const updateApplication = (id: number, changes: Partial<Application>) => {
    setApplications((previous) =>
      previous.map((app) => (app.id === id ? { ...app, ...changes } : app)),
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
      <table className="w-full border-collapse">
        <thead className="font-manrope">
          <tr className="bg-[#F0F2F4] h-0.5">
            <th className="p-2 text-left border-b border-r border-neutral-400/50">#</th>
            <th className="p-2 text-left border-b border-r border-neutral-400/50">Company</th>
            <th className="p-2 text-left border-b border-r border-neutral-400/50">Role</th>
            <th className="p-2 text-left border-b border-r border-neutral-400/50">Applied</th>
            <th className="p-2 text-left border-b border-r border-neutral-400/50">Status</th>
            <th className="p-2 text-left border-b border-r border-neutral-400/50">Location</th>
            <th className="p-2 text-left border-b border-r border-neutral-400/50">Resume</th>
            <th className="p-2 text-left border-b border-r border-neutral-400/50">Notes</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((app) => (
            <tr key={app.id} className="bg-white border-b border-r">
              <td className="p-1 border-b border-r text-center border-neutral-400/50">{app.id}</td>

              <td className="p-1 border-b border-r border-neutral-400/50">
                <input
                  className="w-full p-1"
                  placeholder="Company"
                  value={app.company}
                  onChange={(e) =>
                    updateApplication(app.id, { company: e.target.value })
                  }
                />
              </td>

              <td className="p-1 border-b border-r border-neutral-400/50">
                <input
                  className="w-full p-1"
                  placeholder="Role"
                  value={app.role}
                  onChange={(e) =>
                    updateApplication(app.id, { role: e.target.value })
                  }
                />
              </td>

              <td className="p-1 border-b border-r border-neutral-400/50">
                <input
                  type="date"
                  className="w-full p-1"
                  value={app.applied}
                  onChange={(e) =>
                    updateApplication(app.id, { applied: e.target.value })
                  }
                />
              </td>

              <td className="p-1 border-b border-r border-neutral-400/50">
              <select
  className={`w-full p-1 ${
    app.status === "Offer"
      ? "bg-green-400"
      : app.status === "Rejected"
      ? "bg-red-600"
      : app.status === "Applied"
      ? "bg-gray-200"
      : app.status === "OA"
      ? "bg-yellow-200"
      : app.status === "Interview"
      ? "bg-blue-300"
      : app.status === "Ghosted"
      ? "bg-orange-500"
      : ""
  }`}
  value={app.status}
  onChange={(e) => updateApplication(app.id, { status: e.target.value })}
>
  <option>---</option>
  <option>Applied</option>
  <option>OA</option>
  <option>Interview</option>
  <option>Offer</option>
  <option>Rejected</option>
  <option>Ghosted</option>
</select>
              </td>

              <td className="p-1 border-b border-r border-neutral-400/50">
                <input
                  className="w-full p-1"
                  placeholder="Location"
                  value={app.location}
                  onChange={(e) =>
                    updateApplication(app.id, { location: e.target.value })
                  }
                />
              </td>

              <td className="p-1 border-b border-r border-neutral-400/50">
                <input
                  className="w-full p-1"
                  placeholder="Resume Name"
                  value={app.resume}
                  onChange={(e) =>
                    updateApplication(app.id, { resume: e.target.value })
                  }
                />
              </td>

              <td className="p-1 border-b border-neutral-400/50">
                <input
                  className="w-full p-1"
                  placeholder="Notes"
                  value={app.notes}
                  onChange={(e) =>
                    updateApplication(app.id, { notes: e.target.value })
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        type="button"
        onClick={addRow}
        className="bg-[#F0F2F4] text-black rounded px-4 py-2"
      >
        + Add Application
      </button>
    </div>
  )
}