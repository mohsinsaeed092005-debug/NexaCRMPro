import { CheckCircle2, Circle } from "lucide-react";
import { tasks } from "@/lib/data";
import { Badge, statusTone } from "@/components/ui/Badge";

export function UpcomingTasks() {
  const items = tasks.filter((t) => !t.done).slice(0, 5);

  return (
    <div className="flex flex-col divide-y divide-line">
      {items.map((task) => (
        <div key={task.id} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
          {task.done ? (
            <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-emerald" />
          ) : (
            <Circle size={17} className="mt-0.5 shrink-0 text-line-strong" />
          )}
          <div className="min-w-0 flex-1">
            <p className="truncate text-[13.5px] font-medium text-text-primary">
              {task.title}
            </p>
            <p className="mt-0.5 text-[12px] text-text-tertiary">
              {task.relatedTo} · {task.due}
            </p>
          </div>
          <Badge tone={statusTone[task.priority]}>{task.priority}</Badge>
        </div>
      ))}
    </div>
  );
}
