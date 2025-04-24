import { Button } from "@/components/ui/button";
import { createNewNote, getNotes } from "@/server";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { PlusIcon } from "lucide-react";

export const Route = createFileRoute("/notes/")({
  component: RouteComponent,
  loader: async () => await getNotes(),
});

function RouteComponent() {
  const notes = Route.useLoaderData();
  const navigate = useNavigate();
  return (
    <div className=" grid h-screen grid-rows-[min-content_1fr] gap-2">
      <div className="border-b-2 p-2 flex justify-between items-center">
        <h1>Notes</h1>
        <Button
          size={"sm"}
          onClick={() =>
            createNewNote().then((newNote) =>
              navigate({ to: "/notes/$id", params: { id: newNote.id } })
            )
          }
        >
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
