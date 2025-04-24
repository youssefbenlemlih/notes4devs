import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
});

function RouteComponent() {
  const [note, setNote] = useState({
    title: "title",
    content: "# Hello **world**",
  });
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
        <Button>Save</Button>
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
