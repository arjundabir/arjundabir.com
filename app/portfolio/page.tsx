import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A showcase of my projects and work",
};

import { ProjectCard } from "@/components/project-card";
import FooterLogoAnimation from "@/components/footer-logo-animation";

export default function Home() {
  const projects = [
    {
      title: "4th Hurdle Media",
      description: "Digital media platform focused on healthcare innovation.",
      url: "https://4th-hurdle-media.netlify.app/",
    },
    {
      title: "Zotistes",
      description: "Search engine for UCI students.",
      url: "https://zotsites.vercel.app",
    },
    {
      title: "The Project Breakpoint",
      description:
        "Free tennis coaching, equipment, and snacks for kids from low-income communities.",
      url: "https://www.theprojectbreakpoint.org/",
    },
    {
      title: "SASI Conference",
      description: "Social Justice Conference website.",
      url: "https://sasicon.org/",
    },
    {
      title: "CheckThat",
      description:
        "Verification and fact-checking technology - hackathon project.",
      url: "https://www.checkthat.tech/",
    },
    {
      title: "JournAI",
      description: "AI-powered journaling and reflection tool.",
      url: "https://journai-two.vercel.app/",
    },
  ];

  return (
    <div className="flex flex-col h-svh">
      <main className="flex flex-1 flex-col items-center justify-center p-4 md:p-24">
        <div className="container mx-auto max-w-screen-md">
          <h1 className="text-base font-medium text-left">Portfolio</h1>

          <div className="space-y-0">
            {projects.map((project, index) => (
              <div key={index}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  url={project.url}
                />
                {index < projects.length - 1 && (
                  <div className="border-b border-gray-100"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <FooterLogoAnimation />
    </div>
  );
}
