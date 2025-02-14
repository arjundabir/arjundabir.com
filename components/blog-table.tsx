import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export interface BlogPost {
  date: string;
  title: string;
  slug: string;
}

const BlogTable = ({ posts }: { posts: BlogPost[] }) => (
  <Table>
    <TableHeader className="sr-only">
      <TableRow>
        <TableHead>Date</TableHead>
        <TableHead>Title</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {posts.map((post) => (
        <TableRow key={post.slug} className="group">
          <TableCell className="py-2 pr-4 align-top w-32">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </TableCell>
          <TableCell>
            <Link href={`/blog/${post.slug}`} className="group-hover:underline">
              {post.title}
            </Link>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default BlogTable;
