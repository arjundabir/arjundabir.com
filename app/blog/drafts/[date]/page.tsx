import { createDraft, getDraft } from "@/app/actions";
import Tiptap from "@/components/blog/tiptap";
import TiptapLoader from "@/components/blog/tiptap-loader";
import TiptapWrapper from "@/components/blog/tiptap-wrapper";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/types/blog";
import Link from "next/link";

export default async function page({
  params,
}: {
  params: Promise<{ date: string }>;
}) {
  const slug = (await params).date;
  const dateId = slug.split("/").at(-1) as string;
  let draft: BlogPost | undefined;
  draft = await getDraft(dateId);
  if (!draft) {
    const year = dateId.slice(4, 8);
    const month = dateId.slice(0, 2);
    const day = dateId.slice(2, 4);
    const date = `${year}-${month}-${day}`;

    const blog: BlogPost = {
      slug: dateId,
      date,
      title: "Hello World",
      type: "drafts",
      content: `<h1>Hello World</h1>`,
    };

    await createDraft(blog);
    draft = await getDraft(dateId);
  }

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
