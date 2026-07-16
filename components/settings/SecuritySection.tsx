import { ShieldCheck, Monitor, Smartphone } from "lucide-react";
import { Card, CardHeader, CardTitle, CardSubtitle, CardContent } from "@/components/ui/Card";
import { Field, Input } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { Toggle } from "@/components/ui/Toggle";

const sessions = [
  { device: "MacBook Pro · Chrome", location: "Lahore, Pakistan", icon: Monitor, current: true },
  { device: "iPhone 15 · NexaCRM app", location: "Lahore, Pakistan", icon: Smartphone, current: false },
];

export function SecuritySection() {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <CardHeader>
          <div>
            <CardTitle>Password</CardTitle>
            <CardSubtitle>Use a strong password you don&apos;t use elsewhere.</CardSubtitle>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Current password">
              <Input type="password" placeholder="••••••••••" />
            </Field>
            <div />
            <Field label="New password">
              <Input type="password" placeholder="••••••••••" />
            </Field>
            <Field label="Confirm new password">
              <Input type="password" placeholder="••••••••••" />
            </Field>
          </div>
          <div className="mt-4 flex justify-end">
            <Button variant="secondary" size="sm">Update password</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <ShieldCheck size={17} className="text-emerald" />
            <div>
              <CardTitle>Two-factor authentication</CardTitle>
              <CardSubtitle>Add an extra layer of security to your account.</CardSubtitle>
            </div>
          </div>
          <Toggle defaultChecked />
        </CardHeader>
        <CardContent className="pt-2" />
      </Card>

      <Card>
        <CardHeader>
          <div>
            <CardTitle>Active sessions</CardTitle>
            <CardSubtitle>Devices currently signed in to your account.</CardSubtitle>
          </div>
        </CardHeader>
        <CardContent className="divide-y divide-line pt-4">
          {sessions.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.device} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-canvas">
                    <Icon size={16} className="text-text-secondary" />
                  </span>
                  <div>
                    <p className="text-[13.5px] font-medium text-text-primary">
                      {s.device}{" "}
                      {s.current && (
                        <span className="ml-1 text-[11.5px] font-medium text-emerald">· This device</span>
                      )}
                    </p>
                    <p className="text-[12.5px] text-text-tertiary">{s.location}</p>
                  </div>
                </div>
                {!s.current && (
                  <button className="text-[12.5px] font-medium text-rose hover:underline">
                    Sign out
                  </button>
                )}
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}
