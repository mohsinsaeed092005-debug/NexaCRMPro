import { leads, pipelineByStage } from "@/lib/data";
import { Avatar } from "@/components/ui/Avatar";
import { Card } from "@/components/ui/Card";

export function PipelineBoard() {
  return (
    <div className="mb-5 grid grid-cols-1 gap-3 lg:grid-cols-5">
      {pipelineByStage.map((stage) => {
        const stageLeads = leads.filter((lead) => lead.stage === stage.stage).slice(0, 2);
        return (
          <Card key={stage.stage} className="bg-white/78 p-3 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-raised)]">
            <div className="mb-3 flex items-center justify-between gap-2">
              <p className="text-[13px] font-semibold text-text-primary">{stage.stage}</p>
              <span className="rounded-md bg-canvas px-2 py-1 font-[family-name:var(--font-mono)] text-[12px] text-text-secondary">
                {stage.count}
              </span>
            </div>
            <div className="space-y-2">
              {stageLeads.map((lead) => (
                <div key={lead.id} className="rounded-lg border border-line bg-canvas/50 p-2.5">
                  <div className="flex items-center gap-2">
                    <Avatar initials={lead.initials} size="sm" />
                    <div className="min-w-0">
                      <p className="truncate text-[12.5px] font-medium text-text-primary">{lead.company}</p>
                      <p className="text-[11.5px] text-text-tertiary">${lead.value.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              ))}
              {stageLeads.length === 0 && (
                <div className="rounded-lg border border-dashed border-line bg-canvas/40 p-3 text-[12px] text-text-tertiary">
                  No visible cards
                </div>
              )}
            </div>
          </Card>
        );
      })}
    </div>
  );
}
