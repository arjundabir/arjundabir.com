import BlogTable from "@/components/blog-table";
import LogoAnimation from "@/components/logo-animation";
import { getBlogPosts } from "@/utils/blog-utils";
import Link from "next/link";

const BlogPage = () => {
  const posts = getBlogPosts();

  return (
    <div className="container mx-auto max-w-screen-md flex flex-col justify-center h-svh">
      <div className="mt-auto">
        <h1 className="font-medium mb-4">Blog</h1>
        <BlogTable posts={posts} />
      </div>
      <footer className="flex-0 max-h-10 mt-auto">
        <Link href="/">
          <LogoAnimation />
        </Link>
      </footer>
    </div>
  );
};

export default BlogPage;
