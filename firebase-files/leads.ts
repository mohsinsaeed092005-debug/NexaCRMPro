import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Lead, LeadInput } from "@/types/firestore";

const leadsCollection = collection(db, "leads");

export function subscribeToLeads(
  ownerId: string,
  onData: (leads: Lead[]) => void,
  onError: (message: string) => void
): () => void {
  const q = query(
    leadsCollection,
    where("ownerId", "==", ownerId),
    orderBy("createdAt", "desc")
  );

  return onSnapshot(
    q,
    (snapshot) => {
      const leads = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }) as Lead);
      onData(leads);
    },
    (err) => {
      console.error("subscribeToLeads failed:", err);
      onError("Could not load leads.");
    }
  );
}

export async function addLead(ownerId: string, input: LeadInput): Promise<string> {
  try {
    const docRef = await addDoc(leadsCollection, {
      ...input,
      ownerId,
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (err) {
    console.error("addLead failed:", err);
    throw new Error("Could not create lead.");
  }
}

export async function updateLead(
  leadId: string,
  updates: Partial<LeadInput>
): Promise<void> {
  try {
    await updateDoc(doc(db, "leads", leadId), updates);
  } catch (err) {
    console.error("updateLead failed:", err);
    throw new Error("Could not update lead.");
  }
}

export async function deleteLead(leadId: string): Promise<void> {
  try {
    await deleteDoc(doc(db, "leads", leadId));
  } catch (err) {
    console.error("deleteLead failed:", err);
    throw new Error("Could not delete lead.");
  }
}
