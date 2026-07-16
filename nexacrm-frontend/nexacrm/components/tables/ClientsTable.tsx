import { MoreHorizontal } from "lucide-react";
import { clients } from "@/lib/data";
import { Avatar } from "@/components/ui/Avatar";
import { Badge, statusTone } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export function ClientsTable() {
  return (
    <Card className="overflow-hidden bg-white/82 p-0">
      <div className="scroll-thin overflow-x-auto">
        <table className="w-full min-w-[820px] border-collapse text-left">
          <thead>
            <tr className="border-b border-line bg-white/55">
              <th className="px-5 py-3 text-[12px] font-semibold uppercase tracking-wide text-text-tertiary">
                Client
              </th>
              <th className="px-5 py-3 text-[12px] font-semibold uppercase tracking-wide text-text-tertiary">
                Segment
              </th>
              <th className="px-5 py-3 text-[12px] font-semibold uppercase tracking-wide text-text-tertiary">
                Status
              </th>
              <th className="px-5 py-3 text-[12px] font-semibold uppercase tracking-wide text-text-tertiary">
                Owner
              </th>
              <th className="px-5 py-3 text-right text-[12px] font-semibold uppercase tracking-wide text-text-tertiary">
                Value
              </th>
              <th className="px-5 py-3 text-[12px] font-semibold uppercase tracking-wide text-text-tertiary">
                Last activity
              </th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {clients.map((client) => (
              <tr
                key={client.id}
                className="group transition-colors hover:bg-signal-soft/45"
              >
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <Avatar initials={client.initials} size="md" />
                    <div className="min-w-0">
                      <p className="truncate text-[13.5px] font-medium text-text-primary">
                        {client.name}
                      </p>
                      <p className="truncate text-[12.5px] text-text-tertiary">
                        {client.company}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-[13px] text-text-secondary">
                  {client.segment}
                </td>
                <td className="px-5 py-3.5">
                  <Badge tone={statusTone[client.status]} dot>
                    {client.status}
                  </Badge>
                </td>
                <td className="px-5 py-3.5 text-[13px] text-text-secondary">
                  {client.owner}
                </td>
                <td className="px-5 py-3.5 text-right font-[family-name:var(--font-mono)] text-[13px] font-medium text-text-primary">
                  {client.value > 0 ? `$${client.value.toLocaleString()}` : "—"}
                </td>
                <td className="px-5 py-3.5 text-[13px] text-text-tertiary">
                  {client.lastActivity}
                </td>
                <td className="px-5 py-3.5 text-right">
                  <button
                    aria-label="More actions"
                    className="rounded-md p-1.5 text-text-tertiary opacity-0 transition-opacity hover:bg-line/60 group-hover:opacity-100"
                  >
                    <MoreHorizontal size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between border-t border-line px-5 py-3.5">
        <p className="text-[12.5px] text-text-tertiary">
          Showing <span className="font-medium text-text-secondary">8</span> of{" "}
          <span className="font-medium text-text-secondary">186</span> clients
        </p>
        <div className="flex items-center gap-1.5">
          <button className="rounded-md border border-line px-2.5 py-1 text-[12.5px] font-medium text-text-secondary hover:bg-canvas">
            Previous
          </button>
          <button className="rounded-md border border-line px-2.5 py-1 text-[12.5px] font-medium text-text-secondary hover:bg-canvas">
            Next
          </button>
        </div>
      </div>
    </Card>
  );
}
