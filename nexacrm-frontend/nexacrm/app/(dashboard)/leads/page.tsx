import { Plus, Download } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { DataToolbar, FilterChip } from "@/components/layout/DataToolbar";
import { LeadsTable } from "@/components/tables/LeadsTable";
import { PipelineBoard } from "@/components/leads/PipelineBoard";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { pipelineByStage } from "@/lib/data";

export default function LeadsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Workspace"
        title="Leads"
        description="Track every lead from first touch to closed deal."
        actions={
          <>
            <Button variant="outline" size="md">
              <Download size={15} />
              Export
            </Button>
            <Button variant="secondary" size="md">
              <Plus size={15} />
              Add lead
            </Button>
          </>
        }
      />

      <PipelineBoard />

      <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-5">
        {pipelineByStage.map((stage) => (
          <Card key={stage.stage} className="px-4 py-3.5">
            <p className="text-[12px] font-medium text-text-secondary">{stage.stage}</p>
            <p className="mt-1 font-[family-name:var(--font-mono)] text-[19px] font-semibold text-text-primary">
              {stage.count}
            </p>
          </Card>
        ))}
      </div>

      <DataToolbar
        placeholder="Search leads by name or company…"
        filters={
          <>
            <FilterChip label="All" active />
            <FilterChip label="Qualified" />
            <FilterChip label="High score" />
          </>
        }
      />

      <LeadsTable />
    </div>
  );
}
