import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Button variant="destructive" size="sm">
        Click me
      </Button>
      <p className="text-red-500 font-semibold">Erika</p>
    </div>
  );
}
