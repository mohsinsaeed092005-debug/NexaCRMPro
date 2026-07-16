import { Users, Radar, DollarSign, TrendingUp, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { StatCard } from "@/components/dashboard/StatCard";
import { PipelineChart } from "@/components/dashboard/PipelineChart";
import { DonutChart } from "@/components/dashboard/DonutChart";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { UpcomingTasks } from "@/components/dashboard/UpcomingTasks";
import { CommandCenter } from "@/components/dashboard/CommandCenter";
import { ForecastCards } from "@/components/dashboard/ForecastCards";
import { Card, CardHeader, CardTitle, CardSubtitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { statTrend } from "@/lib/data";

export default function DashboardPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Overview"
        title="Good morning, Sana"
        description="Here's how your pipeline is moving today, Jul 16."
        actions={
          <>
            <Button variant="outline" size="md">
              Export report
            </Button>
            <Button variant="secondary" size="md">
              New deal
            </Button>
          </>
        }
      />

      <CommandCenter />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total clients"
          value={186}
          delta={8.2}
          trend={statTrend.clients}
          icon={Users}
          accent="var(--signal)"
        />
        <StatCard
          label="Active leads"
          value={120}
          delta={12.4}
          trend={statTrend.leads}
          icon={Radar}
          accent="var(--sky)"
        />
        <StatCard
          label="Revenue this quarter"
          value={289400}
          delta={6.1}
          trend={statTrend.revenue}
          icon={DollarSign}
          accent="var(--emerald)"
          format="currency"
        />
        <StatCard
          label="Conversion rate"
          value={29}
          delta={-2.3}
          trend={statTrend.conversion}
          icon={TrendingUp}
          accent="var(--amber)"
          format="percent"
        />
      </div>

      <div className="mt-4">
        <ForecastCards />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <div>
              <CardTitle>Pipeline by stage</CardTitle>
              <CardSubtitle>Open deal value across your funnel</CardSubtitle>
            </div>
            <Button variant="ghost" size="sm">
              View pipeline
              <ArrowRight size={14} />
            </Button>
          </CardHeader>
          <CardContent className="pt-4">
            <PipelineChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div>
              <CardTitle>Lead sources</CardTitle>
              <CardSubtitle>Where new leads come from</CardSubtitle>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <DonutChart />
          </CardContent>
        </Card>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <div>
              <CardTitle>Recent activity</CardTitle>
              <CardSubtitle>Latest updates across your team</CardSubtitle>
            </div>
            <Button variant="ghost" size="sm">
              View all
              <ArrowRight size={14} />
            </Button>
          </CardHeader>
          <CardContent className="pt-4">
            <ActivityFeed />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div>
              <CardTitle>Upcoming tasks</CardTitle>
              <CardSubtitle>Due today and this week</CardSubtitle>
            </div>
            <Button variant="ghost" size="sm">
              View all
              <ArrowRight size={14} />
            </Button>
          </CardHeader>
          <CardContent className="pt-4">
            <UpcomingTasks />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
