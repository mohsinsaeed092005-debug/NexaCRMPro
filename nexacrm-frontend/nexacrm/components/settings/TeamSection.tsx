import { Plus } from "lucide-react";
import { Card, CardHeader, CardTitle, CardSubtitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";

const members = [
  { name: "Sana Iqbal", email: "sana@nexacrm.com", role: "Owner", initials: "SI" },
  { name: "Hamza Tariq", email: "hamza@nexacrm.com", role: "Admin", initials: "HT" },
  { name: "Ken Osei", email: "ken@nexacrm.com", role: "Member", initials: "KO" },
  { name: "Layla Ahmed", email: "layla@nexacrm.com", role: "Member", initials: "LA" },
];

export function TeamSection() {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Team members</CardTitle>
          <CardSubtitle>People with access to your NexaCRM workspace.</CardSubtitle>
        </div>
        <Button variant="secondary" size="sm">
          <Plus size={14} />
          Invite
        </Button>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="divide-y divide-line">
          {members.map((m) => (
            <div key={m.email} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
              <div className="flex items-center gap-3">
                <Avatar initials={m.initials} size="md" />
                <div>
                  <p className="text-[13.5px] font-medium text-text-primary">{m.name}</p>
                  <p className="text-[12.5px] text-text-tertiary">{m.email}</p>
                </div>
              </div>
              <Badge tone={m.role === "Owner" ? "signal" : "neutral"}>{m.role}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
