import Tiptap from "@/components/blog/Tiptap";
import TiptapLoader from "@/components/blog/TiptapLoader";
import TiptapWrapper from "@/components/blog/TiptapWrapper";
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
      <TiptapWrapper>
        <div className="container mx-auto max-w-3xl grow">
          <Tiptap />
        </div>
        <footer className="container mx-auto max-w-3xl flex justify-between items-center gap-1">
          <TiptapLoader />
          <div className="flex gap-1">
            <Button variant={"secondary"}>Save Draft</Button>
            <Button>Publish</Button>
          </div>
        </footer>
      </TiptapWrapper>
    </main>
  );
}
