import { getPosts } from "@/app/actions";
import DraftsTable from "@/components/blog/drafts-table";
import FooterLogoAnimation from "@/components/footer-logo-animation";
import { Button } from "@/components/ui/button";
import { BookmarkCheckIcon, PlusIcon } from "lucide-react";
import Link from "next/link";

export default async function page() {
  const drafts = await getPosts("drafts");
  const publishesd = await getPosts("published");
  return (
    <div className="container mx-auto max-w-screen-md flex flex-col justify-center h-svh">
      <div className="mt-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="font-medium">Drafts</h1>
          <div>
            <Button size={"icon"} variant={"link"} className="h-full w-auto">
              <Link href={"/blog/drafts/new"}>
                <PlusIcon />
              </Link>
            </Button>
            <Button size={"icon"} variant={"link"} className="h-full w-auto">
              <Link href={"/blog"}>
                <BookmarkCheckIcon />
              </Link>
            </Button>
          </div>
        </div>
        <DraftsTable drafts={drafts} />
        <h1 className="font-medium mb-4">Published</h1>
        <DraftsTable drafts={publishesd} />
      </div>
      <FooterLogoAnimation />
    </div>
  );
}
