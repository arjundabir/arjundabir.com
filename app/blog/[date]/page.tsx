const BlogPostPage = async ({
  params,
}: {
  params: Promise<{
    date: string;
  }>;
}) => {
  const { date } = await params;

  const { default: Post } = await import(`@/blogs/${date}.mdx`);

  return <Post />;
};

export default BlogPostPage;
