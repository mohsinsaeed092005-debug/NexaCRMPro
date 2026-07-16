import { Plus } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { DataToolbar, FilterChip } from "@/components/layout/DataToolbar";
import { TaskList } from "@/components/tasks/TaskList";
import { TaskFocusPanel } from "@/components/tasks/TaskFocusPanel";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { tasks } from "@/lib/data";

export default function TasksPage() {
  const dueToday = tasks.filter((t) => t.due.startsWith("Today")).length;
  const highPriority = tasks.filter((t) => t.priority === "High" && !t.done).length;
  const completed = tasks.filter((t) => t.done).length;

  return (
    <div>
      <PageHeader
        eyebrow="Workspace"
        title="Tasks"
        description="Stay on top of everything your team owes clients and leads."
        actions={
          <Button variant="secondary" size="md">
            <Plus size={15} />
            New task
          </Button>
        }
      />

      <TaskFocusPanel />

      <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { label: "Due today", value: dueToday.toString() },
          { label: "High priority", value: highPriority.toString() },
          { label: "Completed", value: completed.toString() },
        ].map((s) => (
          <Card key={s.label} className="px-4 py-3.5">
            <p className="text-[12px] font-medium text-text-secondary">{s.label}</p>
            <p className="mt-1 font-[family-name:var(--font-mono)] text-[19px] font-semibold text-text-primary">
              {s.value}
            </p>
          </Card>
        ))}
      </div>

      <DataToolbar
        placeholder="Search tasks…"
        filters={
          <>
            <FilterChip label="All" active />
            <FilterChip label="Mine" />
            <FilterChip label="High priority" />
          </>
        }
      />

      <TaskList />
    </div>
  );
}
