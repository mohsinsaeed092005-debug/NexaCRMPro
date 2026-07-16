import { Card, CardHeader, CardTitle, CardSubtitle, CardContent } from "@/components/ui/Card";
import { Toggle } from "@/components/ui/Toggle";

const emailPrefs = [
  { label: "New lead assigned to you", hint: "Get notified the moment a lead lands in your queue.", checked: true },
  { label: "Deal stage changes", hint: "When a deal you own moves stages.", checked: true },
  { label: "Task due reminders", hint: "One hour before a task is due.", checked: true },
  { label: "Weekly performance summary", hint: "A digest sent every Monday morning.", checked: false },
];

const pushPrefs = [
  { label: "Client replies to email", hint: "Real-time push when a client responds.", checked: true },
  { label: "Mentions and comments", hint: "When a teammate @mentions you.", checked: true },
  { label: "At-risk account alerts", hint: "When an account health score drops.", checked: false },
];

export function NotificationsSection() {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <CardHeader>
          <div>
            <CardTitle>Email notifications</CardTitle>
            <CardSubtitle>Choose what NexaCRM emails you about.</CardSubtitle>
          </div>
        </CardHeader>
        <CardContent className="divide-y divide-line pt-4">
          {emailPrefs.map((p) => (
            <div key={p.label} className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0">
              <div>
                <p className="text-[13.5px] font-medium text-text-primary">{p.label}</p>
                <p className="text-[12.5px] text-text-tertiary">{p.hint}</p>
              </div>
              <Toggle defaultChecked={p.checked} />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div>
            <CardTitle>Push notifications</CardTitle>
            <CardSubtitle>Real-time alerts on desktop and mobile.</CardSubtitle>
          </div>
        </CardHeader>
        <CardContent className="divide-y divide-line pt-4">
          {pushPrefs.map((p) => (
            <div key={p.label} className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0">
              <div>
                <p className="text-[13.5px] font-medium text-text-primary">{p.label}</p>
                <p className="text-[12.5px] text-text-tertiary">{p.hint}</p>
              </div>
              <Toggle defaultChecked={p.checked} />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
