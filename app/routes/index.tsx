// app/routes/index.tsx
import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="flex items-center gap-4 justify-center flex-col h-screen">
      <h1 className="text-xl font-bold">Notes made for Developers</h1>
      <Link to="/notes">
        <Button size="sm">Get Started </Button>
      </Link>
    </div>
  );
}
