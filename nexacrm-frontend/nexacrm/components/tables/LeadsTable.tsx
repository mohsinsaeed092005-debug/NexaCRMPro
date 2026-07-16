import { MoreHorizontal } from "lucide-react";
import { leads } from "@/lib/data";
import { Avatar } from "@/components/ui/Avatar";
import { Badge, statusTone } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

function scoreColor(score: number) {
  if (score >= 75) return "var(--emerald)";
  if (score >= 45) return "var(--amber)";
  return "var(--rose)";
}

export function LeadsTable() {
  return (
    <Card className="overflow-hidden bg-white/82 p-0">
      <div className="scroll-thin overflow-x-auto">
        <table className="w-full min-w-[860px] border-collapse text-left">
          <thead>
            <tr className="border-b border-line bg-white/55">
              <th className="px-5 py-3 text-[12px] font-semibold uppercase tracking-wide text-text-tertiary">
                Lead
              </th>
              <th className="px-5 py-3 text-[12px] font-semibold uppercase tracking-wide text-text-tertiary">
                Source
              </th>
              <th className="px-5 py-3 text-[12px] font-semibold uppercase tracking-wide text-text-tertiary">
                Stage
              </th>
              <th className="px-5 py-3 text-[12px] font-semibold uppercase tracking-wide text-text-tertiary">
                Score
              </th>
              <th className="px-5 py-3 text-right text-[12px] font-semibold uppercase tracking-wide text-text-tertiary">
                Value
              </th>
              <th className="px-5 py-3 text-[12px] font-semibold uppercase tracking-wide text-text-tertiary">
                Owner
              </th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {leads.map((lead) => (
              <tr key={lead.id} className="group transition-colors hover:bg-signal-soft/45">
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <Avatar initials={lead.initials} size="md" />
                    <div className="min-w-0">
                      <p className="truncate text-[13.5px] font-medium text-text-primary">
                        {lead.name}
                      </p>
                      <p className="truncate text-[12.5px] text-text-tertiary">
                        {lead.company}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-[13px] text-text-secondary">
                  {lead.source}
                </td>
                <td className="px-5 py-3.5">
                  <Badge tone={statusTone[lead.stage]} dot>
                    {lead.stage}
                  </Badge>
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-16 overflow-hidden rounded-full bg-line">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${lead.score}%`,
                          backgroundColor: scoreColor(lead.score),
                        }}
                      />
                    </div>
                    <span className="font-[family-name:var(--font-mono)] text-[12.5px] text-text-secondary">
                      {lead.score}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-right font-[family-name:var(--font-mono)] text-[13px] font-medium text-text-primary">
                  ${lead.value.toLocaleString()}
                </td>
                <td className="px-5 py-3.5 text-[13px] text-text-secondary">
                  {lead.owner}
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
          <span className="font-medium text-text-secondary">120</span> leads
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
