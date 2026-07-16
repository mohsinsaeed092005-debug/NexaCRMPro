"use client";

import { useState } from "react";
import { CheckCircle2, Circle, Calendar } from "lucide-react";
import { tasks as initialTasks } from "@/lib/data";
import { Avatar } from "@/components/ui/Avatar";
import { Badge, statusTone } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export function TaskList() {
  const [tasks, setTasks] = useState(initialTasks);

  function toggle(id: string) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  const open = tasks.filter((t) => !t.done);
  const done = tasks.filter((t) => t.done);

  return (
    <div className="flex flex-col gap-6">
      <section>
        <h3 className="mb-3 text-[13px] font-semibold uppercase tracking-wide text-text-tertiary">
          Open · {open.length}
        </h3>
        <Card className="divide-y divide-line bg-white/82 p-0">
          {open.map((task) => (
            <TaskRow key={task.id} task={task} onToggle={toggle} />
          ))}
        </Card>
      </section>

      {done.length > 0 && (
        <section>
          <h3 className="mb-3 text-[13px] font-semibold uppercase tracking-wide text-text-tertiary">
            Completed · {done.length}
          </h3>
          <Card className="divide-y divide-line bg-white/82 p-0">
            {done.map((task) => (
              <TaskRow key={task.id} task={task} onToggle={toggle} />
            ))}
          </Card>
        </section>
      )}
    </div>
  );
}

function TaskRow({
  task,
  onToggle,
}: {
  task: (typeof initialTasks)[number];
  onToggle: (id: string) => void;
}) {
  return (
    <div className="flex items-center gap-3.5 px-5 py-3.5 transition-colors hover:bg-signal-soft/40">
      <button
        onClick={() => onToggle(task.id)}
        aria-label={task.done ? "Mark as not done" : "Mark as done"}
        className="shrink-0 text-line-strong transition-colors hover:text-signal"
      >
        {task.done ? (
          <CheckCircle2 size={19} className="text-emerald" />
        ) : (
          <Circle size={19} />
        )}
      </button>

      <div className="min-w-0 flex-1">
        <p
          className={cn(
            "truncate text-[13.5px] font-medium",
            task.done ? "text-text-tertiary line-through" : "text-text-primary"
          )}
        >
          {task.title}
        </p>
        <p className="mt-0.5 flex items-center gap-1 truncate text-[12px] text-text-tertiary">
          <Calendar size={11} />
          {task.relatedTo} · {task.due}
        </p>
      </div>

      <Badge tone={statusTone[task.priority]} className="hidden sm:inline-flex">
        {task.priority}
      </Badge>
      <Avatar initials={task.assignee.split(" ").map((n) => n[0]).join("")} size="sm" />
    </div>
  );
}
