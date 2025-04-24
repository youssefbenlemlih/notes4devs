import { createServerFn } from "@tanstack/react-start";
import * as fs from "node:fs";
import { console } from "node:inspector";

export type Note = {
  id: string;
  title: string;
  content: string;
};
const filePath = "notes.json";

export async function readNotes() {
  return JSON.parse(
    await fs.promises.readFile(filePath, "utf-8").catch(() => "")
  ) as Note[];
}

export const getNotes = createServerFn({
  method: "GET",
}).handler(() => {
  return readNotes();
});

export const getNote = createServerFn({ method: "GET" })
  .validator((id: string) => id)
  .handler(async ({ data }) => {
    const note = (await readNotes()).find((note) => note.id === data);
    if (!note) {
      throw new Error("note not found");
    }
    return note;
  });
export const createNewNote = createServerFn({ method: "POST" }).handler(
  async () => {
    const notes = await readNotes();
    const newNote = { id: crypto.randomUUID(), title: "Title", content: "" };
    notes.push(newNote);
    await saveNotes(notes);
    return newNote;
  }
);

export const updateNote = createServerFn({ method: "POST" })
  .validator((note: Note) => note)
  .handler(async ({ data }) => {
    const notes = await readNotes();
    console.log(data);
    const newNotes = notes.map((note) => (note.id === data.id ? data : note));
    await saveNotes(newNotes);
  });

async function saveNotes(notes: Note[]) {
  await fs.promises.writeFile(filePath, JSON.stringify(notes));
}
