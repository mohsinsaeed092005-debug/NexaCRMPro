import { CreditCard, Download } from "lucide-react";
import { Card, CardHeader, CardTitle, CardSubtitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const invoices = [
  { id: "INV-0091", date: "Jul 1, 2026", amount: "$149.00", status: "Paid" },
  { id: "INV-0084", date: "Jun 1, 2026", amount: "$149.00", status: "Paid" },
  { id: "INV-0077", date: "May 1, 2026", amount: "$149.00", status: "Paid" },
];

export function BillingSection() {
  return (
    <div className="flex flex-col gap-4">
      <Card className="overflow-hidden">
        <div className="bg-ink-950 px-5 py-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-wide text-signal">
                Current plan
              </p>
              <p className="mt-1 font-[family-name:var(--font-display)] text-[20px] font-bold text-white">
                Nexa Growth
              </p>
              <p className="mt-1 text-[13px] text-text-on-ink-muted">
                $149/month · billed monthly · renews Aug 1, 2026
              </p>
            </div>
            <Button variant="secondary" size="sm">Upgrade plan</Button>
          </div>
        </div>
        <CardContent className="pt-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-canvas">
              <CreditCard size={18} className="text-text-secondary" />
            </span>
            <div className="flex-1">
              <p className="text-[13.5px] font-medium text-text-primary">Visa ending in 4242</p>
              <p className="text-[12.5px] text-text-tertiary">Expires 09/28</p>
            </div>
            <button className="text-[12.5px] font-medium text-signal-dark hover:underline">
              Update
            </button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div>
            <CardTitle>Billing history</CardTitle>
            <CardSubtitle>Download past invoices for your records.</CardSubtitle>
          </div>
        </CardHeader>
        <CardContent className="divide-y divide-line pt-4">
          {invoices.map((inv) => (
            <div key={inv.id} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
              <div>
                <p className="text-[13.5px] font-medium text-text-primary">{inv.id}</p>
                <p className="text-[12.5px] text-text-tertiary">{inv.date}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-[family-name:var(--font-mono)] text-[13px] text-text-secondary">
                  {inv.amount}
                </span>
                <Badge tone="emerald">{inv.status}</Badge>
                <button aria-label="Download invoice" className="text-text-tertiary hover:text-text-primary">
                  <Download size={15} />
                </button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
