import { ProjectIdClient } from "@/app/(standalone)/workspaces/[workspaceId]/projects/[projectId]/client";
import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";

const ProjectIdPage = async () => {
  const user = await getCurrent();
  if (!user) redirect("sign-in");

  return <ProjectIdClient />;
};

export default ProjectIdPage;
