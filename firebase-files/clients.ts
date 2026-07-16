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
import { Client, ClientInput } from "@/types/firestore";

const clientsCollection = collection(db, "clients");

/**
 * Subscribes to real-time updates for the current user's clients.
 * Call the returned function to unsubscribe (e.g. in a useEffect cleanup).
 */
export function subscribeToClients(
  ownerId: string,
  onData: (clients: Client[]) => void,
  onError: (message: string) => void
): () => void {
  const q = query(
    clientsCollection,
    where("ownerId", "==", ownerId),
    orderBy("createdAt", "desc")
  );

  return onSnapshot(
    q,
    (snapshot) => {
      const clients = snapshot.docs.map(
        (d) => ({ id: d.id, ...d.data() }) as Client
      );
      onData(clients);
    },
    (err) => {
      console.error("subscribeToClients failed:", err);
      onError("Could not load clients.");
    }
  );
}

export async function addClient(ownerId: string, input: ClientInput): Promise<string> {
  try {
    const docRef = await addDoc(clientsCollection, {
      ...input,
      ownerId,
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (err) {
    console.error("addClient failed:", err);
    throw new Error("Could not create client.");
  }
}

export async function updateClient(
  clientId: string,
  updates: Partial<ClientInput>
): Promise<void> {
  try {
    await updateDoc(doc(db, "clients", clientId), updates);
  } catch (err) {
    console.error("updateClient failed:", err);
    throw new Error("Could not update client.");
  }
}

export async function deleteClient(clientId: string): Promise<void> {
  try {
    await deleteDoc(doc(db, "clients", clientId));
  } catch (err) {
    console.error("deleteClient failed:", err);
    throw new Error("Could not delete client.");
  }
}
