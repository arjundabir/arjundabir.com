import { getDrafts } from "@/app/actions";
import DraftsTable from "@/components/blog/drafts-table";
import FooterLogoAnimation from "@/components/footer-logo-animation";

export default async function page() {
  const drafts = await getDrafts();
  return (
    <div className="container mx-auto max-w-screen-md flex flex-col justify-center h-svh">
      <div className="mt-auto">
        <h1 className="font-medium mb-4">Drafts</h1>
        <DraftsTable drafts={drafts} />
      </div>
      <FooterLogoAnimation />
    </div>
  );
}
