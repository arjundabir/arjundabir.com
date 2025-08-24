import Tiptap from "@/components/blog/Tiptap";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  return (
    <main className="min-h-screen flex flex-col">
      <header>
        <Button variant={"link"} asChild>
          <Link href={"/blog"}>Back</Link>
        </Button>
      </header>
      <div className="container mx-auto max-w-3xl grow">
        <Tiptap />
      </div>
      <footer className="container mx-auto max-w-3xl flex justify-end gap-1">
        <Button variant={"secondary"}>Save Draft</Button>
        <Button>Publish</Button>
      </footer>
    </main>
  );
}
