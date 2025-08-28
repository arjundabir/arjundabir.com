import { createDraft, getPost } from "@/app/actions";
import BackButton from "@/components/blog/back-button";
import Tiptap from "@/components/blog/tiptap";
import TiptapFooter from "@/components/blog/tiptap-footer";
import TiptapWrapper from "@/components/blog/tiptap-wrapper";
import { BlogPost } from "@/types/blog";

export default async function page({
  params,
}: {
  params: Promise<{ date: string }>;
}) {
  const slug = (await params).date;
  const dateId = slug.split("/").at(-1) as string;
  let draft: BlogPost | undefined;
  draft = await getPost(dateId, "drafts");
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
    draft = await getPost(dateId, "drafts");
  }
  return (
    <main className="min-h-screen flex flex-col">
      <header>
        <BackButton />
      </header>
      <TiptapWrapper>
        <div className="container mx-auto max-w-3xl grow">
          <Tiptap post={draft} />
        </div>
        <footer className="container mx-auto max-w-3xl flex justify-between items-center gap-1">
          <TiptapFooter draft={draft} />
        </footer>
      </TiptapWrapper>
    </main>
  );
}
