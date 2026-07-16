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
  Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Task, TaskInput } from "@/types/firestore";

function tasksCollection() {
  if (!db) throw new Error("Firebase is not configured.");
  return collection(db, "tasks");
}

export function subscribeToTasks(
  ownerId: string,
  onData: (tasks: Task[]) => void,
  onError: (message: string) => void
): () => void {
  const q = query(
    tasksCollection(),
    where("ownerId", "==", ownerId),
    orderBy("dueDate", "asc")
  );

  return onSnapshot(
    q,
    (snapshot) => {
      const tasks = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }) as Task);
      onData(tasks);
    },
    (err) => {
      console.error("subscribeToTasks failed:", err);
      onError("Could not load tasks.");
    }
  );
}

export async function addTask(ownerId: string, input: TaskInput): Promise<string> {
  try {
    const docRef = await addDoc(tasksCollection(), {
      ...input,
      dueDate: Timestamp.fromDate(new Date(input.dueDate)),
      ownerId,
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (err) {
    console.error("addTask failed:", err);
    throw new Error("Could not create task.");
  }
}

export async function updateTask(
  taskId: string,
  updates: Partial<Omit<TaskInput, "dueDate">> & { dueDate?: string | Date }
): Promise<void> {
  try {
    const { dueDate, ...rest } = updates;
    if (!db) throw new Error("Firebase is not configured.");
    await updateDoc(doc(db, "tasks", taskId), {
      ...rest,
      ...(dueDate ? { dueDate: Timestamp.fromDate(new Date(dueDate)) } : {}),
    });
  } catch (err) {
    console.error("updateTask failed:", err);
    throw new Error("Could not update task.");
  }
}

export async function deleteTask(taskId: string): Promise<void> {
  try {
    if (!db) throw new Error("Firebase is not configured.");
    await deleteDoc(doc(db, "tasks", taskId));
  } catch (err) {
    console.error("deleteTask failed:", err);
    throw new Error("Could not delete task.");
  }
}
