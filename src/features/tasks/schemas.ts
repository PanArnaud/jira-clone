import { z } from "zod";
import { TaskStatus } from "./types";

export const createTaskSchema = z.object({
  name: z.string().min(1, "Required"),
  status: z.nativeEnum(TaskStatus, { required_error: "Required" }),
  workspaceId: z.string().min(1, "Required"),
  projectId: z.string().min(1, "Required"),
  dueDate: z.date(),
  assigneeId: z.string().trim().min(1, "Required"),
  description: z.string().optional(),
});
