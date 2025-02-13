import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

interface BlogPost {
  title: string;
  date: string;
  slug: string;
}

export function getBlogPosts(): BlogPost[] {
  const blogsDirectory = path.join(process.cwd(), "blogs");
  const filenames = fs.readdirSync(blogsDirectory);

  return filenames
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => {
      // Parse date from filename (MMDDYYYY)
      const [month, day, year] = [
        filename.slice(0, 2),
        filename.slice(2, 4),
        filename.slice(4, 8),
      ];

      const fullPath = path.join(blogsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Get title from first heading in markdown
      const { content } = matter(fileContents);
      const titleMatch = content.match(/^#\s+(.+)$/m);
      const title = titleMatch ? titleMatch[1] : "Untitled";

      return {
        title,
        date: `${year}-${month}-${day}`,
        slug: filename.replace(".mdx", ""),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export const getBlogPostByDate = async (date: string) => {
  const blogsDirectory = path.join(process.cwd(), "blogs");
  const filename = `${date}.md`;
  const fullPath = path.join(blogsDirectory, filename);

  try {
    const fileContents = await fs.promises.readFile(fullPath, "utf8");
    const { content } = matter(fileContents);
    const htmlContent = marked(content);
    return { content: htmlContent };
  } catch (error) {
    return null;
  }
};
