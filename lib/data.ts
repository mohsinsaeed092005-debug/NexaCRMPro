export type Client = {
  id: string;
  name: string;
  company: string;
  email: string;
  segment: "Enterprise" | "Mid-market" | "SMB";
  status: "Active" | "Onboarding" | "At risk" | "Churned";
  value: number;
  owner: string;
  initials: string;
  lastActivity: string;
};

export type Lead = {
  id: string;
  name: string;
  company: string;
  source: "Website" | "Referral" | "Outbound" | "Event" | "Partner";
  stage: "New" | "Contacted" | "Qualified" | "Proposal" | "Won" | "Lost";
  value: number;
  score: number;
  owner: string;
  initials: string;
};

export type Task = {
  id: string;
  title: string;
  relatedTo: string;
  priority: "High" | "Medium" | "Low";
  due: string;
  done: boolean;
  assignee: string;
};

export type Activity = {
  id: string;
  actor: string;
  initials: string;
  action: string;
  target: string;
  time: string;
  kind: "call" | "email" | "deal" | "note" | "meeting";
};

export const clients: Client[] = [
  { id: "CL-1042", name: "Amara Whitfield", company: "Northlake Freight Co.", email: "amara@northlakefreight.com", segment: "Enterprise", status: "Active", value: 84200, owner: "Sana Iqbal", initials: "AW", lastActivity: "2h ago" },
  { id: "CL-1041", name: "Devon Rhee", company: "Pixelworks Studio", email: "devon@pixelworks.io", segment: "Mid-market", status: "Onboarding", value: 21500, owner: "Hamza Tariq", initials: "DR", lastActivity: "5h ago" },
  { id: "CL-1040", name: "Farah Siddiqui", company: "Crestline Retail Group", email: "farah@crestlineretail.com", segment: "Enterprise", status: "At risk", value: 132800, owner: "Sana Iqbal", initials: "FS", lastActivity: "1d ago" },
  { id: "CL-1039", name: "Marcus Ito", company: "Bluepeak Analytics", email: "marcus@bluepeak.ai", segment: "SMB", status: "Active", value: 9600, owner: "Ken Osei", initials: "MI", lastActivity: "3d ago" },
  { id: "CL-1038", name: "Lena Voss", company: "Hartmann & Reyes LLP", email: "lena@hartmannreyes.com", segment: "Mid-market", status: "Active", value: 47300, owner: "Hamza Tariq", initials: "LV", lastActivity: "6h ago" },
  { id: "CL-1037", name: "Tariq Bashir", company: "Orion Manufacturing", email: "tariq@orionmfg.com", segment: "Enterprise", status: "Churned", value: 0, owner: "Ken Osei", initials: "TB", lastActivity: "2w ago" },
  { id: "CL-1036", name: "Priya Nair", company: "Verdant Foods", email: "priya@verdantfoods.com", segment: "SMB", status: "Active", value: 14200, owner: "Sana Iqbal", initials: "PN", lastActivity: "9h ago" },
  { id: "CL-1035", name: "Owen Blackwood", company: "Harborline Logistics", email: "owen@harborline.com", segment: "Mid-market", status: "Onboarding", value: 33900, owner: "Ken Osei", initials: "OB", lastActivity: "1d ago" },
];

export const leads: Lead[] = [
  { id: "LD-2381", name: "Sofia Marchetti", company: "Lumen Retail", source: "Website", stage: "New", value: 18000, score: 62, owner: "Sana Iqbal", initials: "SM" },
  { id: "LD-2380", name: "Grace Kim", company: "Foundry Health", source: "Referral", stage: "Qualified", value: 42500, score: 81, owner: "Hamza Tariq", initials: "GK" },
  { id: "LD-2379", name: "Elias Novak", company: "Vantage Robotics", source: "Event", stage: "Proposal", value: 96000, score: 88, owner: "Sana Iqbal", initials: "EN" },
  { id: "LD-2378", name: "Nadia Hussain", company: "Cobalt Freight", source: "Outbound", stage: "Contacted", value: 15400, score: 47, owner: "Ken Osei", initials: "NH" },
  { id: "LD-2377", name: "Ravi Chandran", company: "Metrix Cloud", source: "Partner", stage: "Won", value: 61200, score: 95, owner: "Hamza Tariq", initials: "RC" },
  { id: "LD-2376", name: "Julia Ferreira", company: "Solstice Wear", source: "Website", stage: "Lost", value: 8700, score: 22, owner: "Ken Osei", initials: "JF" },
  { id: "LD-2375", name: "Marcus Webb", company: "Ironclad Insurance", source: "Referral", stage: "Qualified", value: 54300, score: 74, owner: "Sana Iqbal", initials: "MW" },
  { id: "LD-2374", name: "Ana Beatriz", company: "Solace Wellness", source: "Event", stage: "New", value: 12100, score: 39, owner: "Hamza Tariq", initials: "AB" },
];

export const tasks: Task[] = [
  { id: "TK-501", title: "Send renewal proposal to Crestline Retail", relatedTo: "Crestline Retail Group", priority: "High", due: "Today, 2:00 PM", done: false, assignee: "Sana Iqbal" },
  { id: "TK-502", title: "Call Elias Novak to review proposal terms", relatedTo: "Vantage Robotics", priority: "High", due: "Today, 4:30 PM", done: false, assignee: "Sana Iqbal" },
  { id: "TK-503", title: "Prepare onboarding checklist for Pixelworks", relatedTo: "Pixelworks Studio", priority: "Medium", due: "Tomorrow, 10:00 AM", done: false, assignee: "Hamza Tariq" },
  { id: "TK-504", title: "Follow up with Nadia after outbound call", relatedTo: "Cobalt Freight", priority: "Medium", due: "Tomorrow, 1:00 PM", done: false, assignee: "Ken Osei" },
  { id: "TK-505", title: "Log Q3 contract renewal for Northlake Freight", relatedTo: "Northlake Freight Co.", priority: "Low", due: "Fri, Jul 18", done: true, assignee: "Sana Iqbal" },
  { id: "TK-506", title: "Share case study with Marcus Webb", relatedTo: "Ironclad Insurance", priority: "Low", due: "Fri, Jul 18", done: false, assignee: "Sana Iqbal" },
  { id: "TK-507", title: "Review at-risk account playbook", relatedTo: "Crestline Retail Group", priority: "High", due: "Mon, Jul 21", done: false, assignee: "Hamza Tariq" },
  { id: "TK-508", title: "Confirm demo time with Foundry Health", relatedTo: "Foundry Health", priority: "Medium", due: "Mon, Jul 21", done: true, assignee: "Hamza Tariq" },
];

export const activity: Activity[] = [
  { id: "AC-1", actor: "Sana Iqbal", initials: "SI", action: "closed a deal with", target: "Metrix Cloud", time: "12 min ago", kind: "deal" },
  { id: "AC-2", actor: "Hamza Tariq", initials: "HT", action: "logged a call with", target: "Cobalt Freight", time: "48 min ago", kind: "call" },
  { id: "AC-3", actor: "Ken Osei", initials: "KO", action: "sent a proposal to", target: "Vantage Robotics", time: "1h ago", kind: "email" },
  { id: "AC-4", actor: "Sana Iqbal", initials: "SI", action: "added a note on", target: "Crestline Retail Group", time: "3h ago", kind: "note" },
  { id: "AC-5", actor: "Hamza Tariq", initials: "HT", action: "scheduled a meeting with", target: "Foundry Health", time: "5h ago", kind: "meeting" },
  { id: "AC-6", actor: "Ken Osei", initials: "KO", action: "moved lead to Qualified", target: "Ironclad Insurance", time: "Yesterday", kind: "deal" },
];

export const statTrend = {
  clients: [38, 41, 40, 44, 47, 45, 49, 52, 51, 55, 58, 61],
  leads: [22, 26, 24, 29, 31, 28, 33, 36, 34, 39, 41, 44],
  revenue: [180, 195, 188, 210, 224, 219, 238, 251, 246, 262, 271, 289],
  conversion: [18, 19, 21, 20, 22, 24, 23, 25, 27, 26, 28, 29],
};

export const pipelineByStage = [
  { stage: "New", count: 24, value: 186000 },
  { stage: "Contacted", count: 18, value: 214000 },
  { stage: "Qualified", count: 13, value: 248000 },
  { stage: "Proposal", count: 8, value: 296000 },
  { stage: "Won", count: 11, value: 341000 },
];

export const leadSources = [
  { label: "Website", value: 34, color: "var(--signal)" },
  { label: "Referral", value: 26, color: "var(--emerald)" },
  { label: "Outbound", value: 20, color: "var(--sky)" },
  { label: "Event", value: 12, color: "var(--amber)" },
  { label: "Partner", value: 8, color: "var(--rose)" },
];

export const forecastCards = [
  {
    label: "Weighted pipeline",
    value: 642800,
    change: "+18.4%",
    tone: "emerald",
    note: "Based on open deal probability",
  },
  {
    label: "Commit forecast",
    value: 318500,
    change: "+7.2%",
    tone: "signal",
    note: "Expected to close this quarter",
  },
  {
    label: "Expansion risk",
    value: 132800,
    change: "2 accounts",
    tone: "amber",
    note: "Needs executive attention",
  },
];

export const automationQueue = [
  { title: "Renewal reminders", count: 12, detail: "Scheduled across active accounts" },
  { title: "Lead scoring updates", count: 38, detail: "Refreshed from latest activity" },
  { title: "Proposal follow-ups", count: 7, detail: "Ready for owner review" },
];

export const teamPerformance = [
  { name: "Sana Iqbal", role: "Sales ops", target: 92, closed: 148000, initials: "SI" },
  { name: "Hamza Tariq", role: "Account exec", target: 78, closed: 102400, initials: "HT" },
  { name: "Ken Osei", role: "Growth lead", target: 64, closed: 84600, initials: "KO" },
];

export const currentUser = {
  name: "Sana Iqbal",
  role: "Sales Operations Lead",
  email: "sana@nexacrm.com",
  initials: "SI",
};
