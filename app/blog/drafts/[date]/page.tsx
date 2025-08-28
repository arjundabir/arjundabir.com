import { getDraft } from "@/app/actions";
import Tiptap from "@/components/blog/tiptap";
import TiptapLoader from "@/components/blog/tiptap-loader";
import TiptapWrapper from "@/components/blog/tiptap-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function page({
  params,
}: {
  params: Promise<{ date: string }>;
}) {
  const slug = (await params).date;
  const dateId = slug.split("/").at(-1) as string;
  const draft = await getDraft(dateId);

  return (
    <main className="min-h-screen flex flex-col">
      <header>
        <Button variant={"link"} asChild>
          <Link href={"/blog/drafts"}>Back</Link>
        </Button>
      </header>
      <TiptapWrapper>
        <div className="container mx-auto max-w-3xl grow">
          <Tiptap draft={draft} />
        </div>
        <footer className="container mx-auto max-w-3xl flex justify-between items-center gap-1">
          <TiptapLoader />
          <div className="flex gap-1">
            <Button variant={"secondary"} asChild>
              <Link href={"/blog/drafts"} className="hover:no-underline">
                See Drafts
              </Link>
            </Button>
            <Button>Publish</Button>
          </div>
        </footer>
      </TiptapWrapper>
    </main>
  );
}
