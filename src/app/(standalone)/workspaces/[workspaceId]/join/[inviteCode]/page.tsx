import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import WorkspaceIdJoinClient from "./client";

const WorkspaceIdJoindPage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sig-in");

  return (
    <WorkspaceIdJoinClient />
  );
};

export default WorkspaceIdJoindPage;
