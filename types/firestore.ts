import { Timestamp } from "firebase/firestore";

export type UserStatus = "active" | "inactive";
export type ClientStatus = "active" | "inactive" | "lead" | "churned";
export type LeadStatus = "new" | "contacted" | "qualified" | "won" | "lost";
export type TaskPriority = "low" | "medium" | "high";
export type TaskStatus = "todo" | "in_progress" | "done";

export interface UserProfile {
  uid: string;
  name: string;
  email: string;
  createdAt: Timestamp;
}

export interface Client {
  id?: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  status: ClientStatus;
  notes: string;
  createdAt: Timestamp;
  ownerId: string; // uid of the user who created this client
}

export interface Lead {
  id?: string;
  title: string;
  clientName: string;
  status: LeadStatus;
  value: number;
  createdAt: Timestamp;
  ownerId: string;
}

export interface Task {
  id?: string;
  title: string;
  priority: TaskPriority;
  dueDate: Timestamp;
  status: TaskStatus;
  createdAt: Timestamp;
  ownerId: string;
}

// Input types (what forms submit, before Firestore adds timestamps/ids)
export type ClientInput = Omit<Client, "id" | "createdAt" | "ownerId">;
export type LeadInput = Omit<Lead, "id" | "createdAt" | "ownerId">;
export type TaskInput = Omit<Task, "id" | "createdAt" | "ownerId" | "dueDate"> & {
  dueDate: string | Date;
};
