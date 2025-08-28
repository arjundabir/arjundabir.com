import { getDrafts } from "@/app/actions";
import DraftsTable from "@/components/blog/drafts-table";
import FooterLogoAnimation from "@/components/footer-logo-animation";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

export default async function page() {
  const drafts = await getDrafts();
  return (
    <div className="container mx-auto max-w-screen-md flex flex-col justify-center h-svh">
      <div className="mt-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="font-medium">Drafts</h1>
          <Button size={"icon"} variant={"link"} className="h-full w-auto">
            <Link href={"/blog/drafts/new"}>
              <PlusIcon className="size-4" />
            </Link>
          </Button>
        </div>
        <DraftsTable drafts={drafts} />
      </div>
      <FooterLogoAnimation />
    </div>
  );
}
