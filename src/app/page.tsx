import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Badge variant="outline">coming soon</Badge>
      <div className="flex flex-row items-center gap-8">
        <Image
          src="/logo.svg"
          alt="Youth Vision Logo"
          width={100}
          height={100}
        />
        <h1 className="text-6xl font-bold">Youth Vision Sri Lanka</h1>
      </div>
    </div>
  );
}
