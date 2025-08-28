"use client";
import FooterLogoAnimation from "@/components/footer-logo-animation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { verifyAdmin } from "../actions";

export default function Page() {
  return (
    <div className="container mx-auto max-w-screen-sm h-screen flex flex-col">
      <form
        className="grow flex flex-col justify-center space-y-4"
        action={async (formData) => {
          await verifyAdmin(formData);
        }}
      >
        <div>
          <label htmlFor="username" className="font-medium">
            Username
          </label>
          <Input id="username" name="username" className="w-full" />
        </div>
        <div>
          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <Input id="password" name="password" />
        </div>
        <Button className="w-[78.85px]">Submit</Button>
      </form>
      <FooterLogoAnimation />
    </div>
  );
}
