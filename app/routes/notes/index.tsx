import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PlusIcon } from "lucide-react";

export const Route = createFileRoute("/notes/")({
  component: RouteComponent,
});

const notes = [
  { title: "title 1", id: "1" },
  { title: "title 2", id: "2" },
  { title: "title 3", id: "3" },
  { title: "title 4", id: "4" },
  { title: "title 5", id: "5" },
  { title: "title 6", id: "6" },
  { title: "title 7", id: "7" },
];
function RouteComponent() {
  return (
    <div className=" grid h-screen grid-rows-[min-content_1fr] gap-2">
      <div className="border-b-2 p-2 flex justify-between items-center">
        <h1>Notes</h1>
        <Button size={"sm"}>
          <PlusIcon />
          Add Note
        </Button>
      </div>
      <div className="p-2">
        {notes.map((note) => (
          <Link
            className="hover:text-blue-500"
            to={"/notes/$id"}
            key={note.id}
            params={{ id: note.id }}
          >
            <div>{note.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
