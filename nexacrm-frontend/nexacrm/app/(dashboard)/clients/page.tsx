import { Plus, Download } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { DataToolbar, FilterChip } from "@/components/layout/DataToolbar";
import { ClientsTable } from "@/components/tables/ClientsTable";
import { AccountHealthPanel } from "@/components/clients/AccountHealthPanel";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { clients } from "@/lib/data";

export default function ClientsPage() {
  const active = clients.filter((c) => c.status === "Active").length;
  const atRisk = clients.filter((c) => c.status === "At risk").length;
  const totalValue = clients.reduce((sum, c) => sum + c.value, 0);

  return (
    <div>
      <PageHeader
        eyebrow="Workspace"
        title="Clients"
        description="Every account your team manages, with health and ownership at a glance."
        actions={
          <>
            <Button variant="outline" size="md">
              <Download size={15} />
              Export
            </Button>
            <Button variant="secondary" size="md">
              <Plus size={15} />
              Add client
            </Button>
          </>
        }
      />

      <AccountHealthPanel />

      <div className="mb-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { label: "Total clients", value: "186" },
          { label: "Active", value: active.toString() },
          { label: "At risk", value: atRisk.toString() },
          { label: "Portfolio value", value: `$${totalValue.toLocaleString()}` },
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
        placeholder="Search clients by name or company…"
        filters={
          <>
            <FilterChip label="All" active />
            <FilterChip label="Enterprise" />
            <FilterChip label="At risk" />
          </>
        }
      />

      <ClientsTable />
    </div>
  );
}
