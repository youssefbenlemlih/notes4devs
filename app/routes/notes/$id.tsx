import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getNote, updateNote } from "@/server";
import {
  headingsPlugin,
  listsPlugin,
  MDXEditor,
  quotePlugin,
  thematicBreakPlugin,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/notes/$id")({
  component: RouteComponent,
  loader: async ({ params }) => getNote({ data: params.id }),
});

function RouteComponent() {
  const initialNote = Route.useLoaderData();
  const [note, setNote] = useState(initialNote);
  const onSaveClick = () => {
    console.log(note);
    updateNote({ data: note });
  };
  return (
    <div className="p-2 grid h-screen grid-rows-[min-content_1fr] gap-2">
      <div className="flex gap-2">
        <Link to="..">
          <Button variant={"link"}>
            <ChevronLeft />
          </Button>
        </Link>

        <Input
          placeholder="Title"
          value={note.title}
          onChange={(e) => setNote((n) => ({ ...n, title: e.target.value }))}
        />
        <Button onClick={onSaveClick}>Save</Button>
      </div>
      <MDXEditor
        markdown={note.content}
        onChange={(markdown) => setNote((n) => ({ ...n, content: markdown }))}
        className="border rounded-md"
        plugins={[
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          thematicBreakPlugin(),
        ]}
      />
    </div>
  );
}
