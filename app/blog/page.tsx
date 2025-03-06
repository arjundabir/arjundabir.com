import BlogTable from "@/components/blog-table";
import FooterLogoAnimation from "@/components/footer-logo-animation";
import { getBlogPosts } from "@/utils/blog-utils";

const BlogPage = () => {
  const posts = getBlogPosts();

  return (
    <div className="container mx-auto max-w-screen-md flex flex-col justify-center h-svh">
      <div className="mt-auto">
        <h1 className="font-medium mb-4">Blog</h1>
        <BlogTable posts={posts} />
      </div>
      <FooterLogoAnimation />
    </div>
  );
};

export default BlogPage;
