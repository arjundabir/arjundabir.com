import React from "react";
import SignatureAnimation from "@/components/signature-animation";
import ProjectsTable from "@/components/projects-table";
import projects from "@/data/projects";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <div className="container mx-auto max-w-screen-md">
        <div className="flex flex-col justify-center h-screen">
          <div>
            <h1 className="font-medium" style={{ fontWeight: "500" }}>
              Hey, I&apos;m Arjun!
            </h1>
            <p>
              I love to build things.{" "}
              <Link href="mailto:arjunadabir@gmail.com" className="underline">
                Email Me
              </Link>{" "}
            </p>
          </div>
          <p className="font-medium mt-2">Check out some of my projects:</p>
          <ProjectsTable projects={projects} />
          <div className="ml-auto">
            <SignatureAnimation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
