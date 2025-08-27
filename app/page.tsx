import React from "react";
import SignatureAnimation from "@/components/signature-animation";
import ProjectsTable from "@/components/projects-table";
import projects from "@/data/projects";
import Link from "next/link";
import Github from "@/components/icons/github-icon";
import LinkedIn from "@/components/icons/linkedin-icon";

const Page = () => {
  return (
    <div className="h-screen grid place-content-center">
      <div className="h-full max-w-screen-md ">
        <div className="flex flex-col justify-center h-full">
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
          <div className="flex items-center justify-between px-2">
            <div className="flex">
              <Link
                target="_blank"
                href={"http://github.com/arjundabir"}
                className="group"
              >
                <Github className="h-6 w-6 text-foreground mr-2 group-hover:text-black/70 " />
              </Link>
              <Link
                target="_blank"
                href={"https://linkedin.com/in/dabirarjun"}
                className="group"
              >
                <LinkedIn className="h-6 w-6 text-foreground group-hover:text-black/70" />
              </Link>
            </div>
            <SignatureAnimation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
