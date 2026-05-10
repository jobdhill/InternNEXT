import { useCallback, useState } from "react";
import ApplicationStats from "../components/ApplicationStats";
import ApplicationTable from "../components/ApplicationTable";
import DashboardCharts from "../components/DashboardCharts";
import SearchBox, { type StatusFilter } from "../components/SearchBox";
import type { Application } from "../types/application";
import {
  createEmptyApplication,
  nextApplicationId,
} from "../types/application";

export default function DashboardPage() {
  const [applications, setApplications] = useState<Application[]>(() => [
    createEmptyApplication(1),
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("All");

  const filteredApplications = applications.filter((app) => {
    const query = searchQuery.toLowerCase();
    const matchesQuery =
      app.company.toLowerCase().includes(query) ||
      app.role.toLowerCase().includes(query);
    const matchesStatus =
      statusFilter === "All" ? true : app.status === statusFilter;
    return matchesQuery && matchesStatus;
  });

  const updateApplication = useCallback(
    (id: number, changes: Partial<Application>) => {
      setApplications((previous) =>
        previous.map((app) => (app.id === id ? { ...app, ...changes } : app)),
      );
    },
    [],
  );

  const addRow = useCallback(() => {
    setApplications((previous) => [
      ...previous,
      createEmptyApplication(nextApplicationId(previous)),
    ]);
    setStatusFilter("All");
  }, []);

  return (
    <div className="min-h-screen p-6 font-manrope bg-[#F8F8FA]">
      <DashboardCharts applications={applications} />
      <ApplicationStats applications={applications} />
      <SearchBox
        value={searchQuery}
        onChange={setSearchQuery}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
      />
      <ApplicationTable
        applications={filteredApplications}
        onUpdate={updateApplication}
        onAddRow={addRow}
      />
    </div>
  );
}
