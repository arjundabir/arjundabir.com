import { getPost } from "@/app/actions";
import Tiptap from "@/components/blog/Tiptap";
import TiptapWrapper from "@/components/blog/tiptap-wrapper";

const BlogPostPage = async ({
  params,
}: {
  params: Promise<{
    date: string;
  }>;
}) => {
  const { date } = await params;
  const post = await getPost(date, "published");
  return (
    <TiptapWrapper>
      <Tiptap post={post} />
    </TiptapWrapper>
  );
};

export default BlogPostPage;
