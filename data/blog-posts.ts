export interface BlogPost {
  date: string;
  title: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    date: "2024-03-20",
    title: "Example Blog Post",
    slug: "example-blog-post",
  },
  // Add more blog posts here
];

export default blogPosts;
