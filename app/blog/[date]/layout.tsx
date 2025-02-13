import React from "react";
import Link from "next/link";
import LogoAnimation from "@/components/logo-animation";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-svh">
      <header className="flex-0 max-h-10 mr-auto p-2">
        <Link
          href="/blog"
          className="flex items-center gap-1 text-sm underline"
        >
          Back
        </Link>
      </header>
      <main className="flex-1">
        <article className="container mx-auto max-w-screen-md py-8">
          {children}
        </article>
      </main>
      <footer className="flex-0 max-h-10">
        <Link href="/">
          <LogoAnimation />
        </Link>
      </footer>
    </div>
  );
};

export default BlogLayout;
