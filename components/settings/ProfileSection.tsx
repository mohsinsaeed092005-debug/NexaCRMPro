import { Camera } from "lucide-react";
import { Card, CardHeader, CardTitle, CardSubtitle, CardContent } from "@/components/ui/Card";
import { Field, Input } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/ui/Avatar";
import { currentUser } from "@/lib/data";

export function ProfileSection() {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <CardHeader>
          <div>
            <CardTitle>Profile</CardTitle>
            <CardSubtitle>How your name and photo appear across NexaCRM.</CardSubtitle>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="mb-6 flex items-center gap-4">
            <div className="relative">
              <Avatar initials={currentUser.initials} size="lg" />
              <button
                aria-label="Change photo"
                className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-surface bg-ink-950 text-white"
              >
                <Camera size={11} />
              </button>
            </div>
            <div>
              <p className="text-[13.5px] font-medium text-text-primary">Profile photo</p>
              <p className="text-[12.5px] text-text-tertiary">JPG or PNG, up to 2MB.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Full name">
              <Input defaultValue={currentUser.name} />
            </Field>
            <Field label="Role">
              <Input defaultValue={currentUser.role} />
            </Field>
            <Field label="Email address">
              <Input defaultValue={currentUser.email} type="email" />
            </Field>
            <Field label="Phone number">
              <Input placeholder="+92 300 1234567" />
            </Field>
            <Field label="Timezone" hint="Used for scheduling and reminders.">
              <Input defaultValue="Asia/Karachi (GMT+5)" />
            </Field>
            <Field label="Language">
              <Input defaultValue="English" />
            </Field>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-2">
        <Button variant="outline">Discard</Button>
        <Button variant="secondary">Save changes</Button>
      </div>
    </div>
  );
}
