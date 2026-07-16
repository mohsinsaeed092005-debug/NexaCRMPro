import { Card, CardHeader, CardTitle, CardSubtitle, CardContent } from "@/components/ui/Card";
import { Field, Input } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";

export function CompanySection() {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <CardHeader>
          <div>
            <CardTitle>Company</CardTitle>
            <CardSubtitle>Details used on invoices and client-facing documents.</CardSubtitle>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Company name">
              <Input defaultValue="Nestrahub Technologies" />
            </Field>
            <Field label="Industry">
              <Input defaultValue="Software & IT Services" />
            </Field>
            <Field label="Website">
              <Input defaultValue="https://nestrahub.com" />
            </Field>
            <Field label="Company size">
              <Input defaultValue="11–50 employees" />
            </Field>
            <Field label="Tax / VAT ID" hint="Shown on generated invoices.">
              <Input placeholder="e.g. PK-1234567" />
            </Field>
            <Field label="Currency">
              <Input defaultValue="USD ($)" />
            </Field>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div>
            <CardTitle>Business address</CardTitle>
            <CardSubtitle>Used for billing and tax documents.</CardSubtitle>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Address line 1">
              <Input placeholder="Street address" />
            </Field>
            <Field label="Address line 2">
              <Input placeholder="Suite, floor (optional)" />
            </Field>
            <Field label="City">
              <Input defaultValue="Lahore" />
            </Field>
            <Field label="Postal code">
              <Input placeholder="54000" />
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
