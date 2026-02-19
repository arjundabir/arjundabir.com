import type { Metadata } from "next";
import Link from "next/link";
import FooterLogoAnimation from "@/components/footer-logo-animation";

export const metadata: Metadata = {
  title: "Speaker Series",
  description: "Resources and links from the speaker series",
};

interface Resource {
  name: string;
  url: string;
}

interface Category {
  label: string;
  items: Resource[];
}

const categories: Category[] = [
  {
    label: "Books",
    items: [
      {
        name: "The Lean Startup",
        url: "https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898",
      },
      {
        name: "Make Something Wonderful — Steve Jobs in His Own Words",
        url: "https://books.apple.com/us/book/make-something-wonderful/id6446905902",
      },
    ],
  },
  {
    label: "Videos",
    items: [
      {
        name: "How David Lieb Turned a Failing Startup Into Google Photos",
        url: "https://youtu.be/CcnwFJqEnxU",
      },
      {
        name: "Cold Outreach — Y Combinator",
        url: "https://youtu.be/7Kh_fpxP1yY",
      },
      {
        name: "How to Talk to Users",
        url: "https://youtu.be/MT4Ig2uqjTc",
      },
      {
        name: "Founder Mode",
        url: "https://youtu.be/ViqxJY_AG_w",
      },
      {
        name: "OpenNote Launch Video",
        url: "https://youtu.be/QtmAYsCBgQY",
      },
      {
        name: "Cursor Composer",
        url: "https://cursor.com/blog/composer",
      },
    ],
  },
  {
    label: "Ideas & Opportunities",
    items: [
      {
        name: "YC Requests for Startups",
        url: "https://www.ycombinator.com/rfs",
      },
      {
        name: "a16z Big Ideas 2026",
        url: "https://a16z.com/newsletter/big-ideas-2026-part-1/",
      },
      {
        name: "2026 Is the Best Time to Build — Startup Accelerators",
        url: "https://www.linkedin.com/posts/alex-s-0a1692117_2026-is-the-best-time-to-build-for-early-stage-share-7424498538912337920-58t8/",
      },
      {
        name: "Vercel & the Future of the Web — Lee Robinson",
        url: "https://leerob.com/vercel",
      },
    ],
  },
  {
    label: "Outreach & Sales",
    items: [
      {
        name: "HireRoger",
        url: "https://hireroger.com",
      },
      {
        name: "HeyReach",
        url: "https://www.heyreach.io/",
      },
    ],
  },
  {
    label: "AI & Productivity Tools",
    items: [
      {
        name: "Cursor",
        url: "https://cursor.com",
      },
      {
        name: "ChatGPT Codex",
        url: "https://chatgpt.com/codex",
      },
      {
        name: "Antigravity — Google",
        url: "https://antigravity.google/",
      },
      {
        name: "Otter AI",
        url: "https://otter.ai/",
      },
      {
        name: "Caret",
        url: "https://caret.so",
      },
      {
        name: "Cluely",
        url: "https://cluely.com",
      },
    ],
  },
  {
    label: "Build Tools",
    items: [
      {
        name: "v0",
        url: "https://v0.app",
      },
      {
        name: "Lovable",
        url: "https://lovable.dev",
      },
      {
        name: "Bolt",
        url: "https://bolt.new",
      },
      {
        name: "Getting Started with Claude Code",
        url: "https://code.claude.com/docs/en/overview",
      },
    ],
  },
  {
    label: "UI Libraries",
    items: [
      {
        name: "shadcn/ui",
        url: "https://ui.shadcn.com",
      },
      {
        name: "DaisyUI",
        url: "https://daisyui.com",
      },
      {
        name: "Tamagui",
        url: "https://tamagui.dev",
      },
    ],
  },
  {
    label: "Events & Screencasting",
    items: [
      {
        name: "Luma",
        url: "https://lu.ma",
      },
      {
        name: "Partiful",
        url: "https://partiful.com",
      },
      {
        name: "Screen Studio",
        url: "https://screen.studio/",
      },
    ],
  },
];

function ResourceRow({ name, url }: Resource) {
  let domain = "";
  try {
    domain = new URL(url).hostname.replace("www.", "");
  } catch {
    domain = url;
  }

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-baseline justify-between gap-4 py-2 px-2 -mx-2 rounded hover:bg-gray-50 transition-colors duration-150 group !no-underline"
    >
      <span className="text-sm text-gray-900 group-hover:underline">{name}</span>
      <span className="text-xs text-stone-400 shrink-0 tabular-nums">{domain}</span>
    </Link>
  );
}

export default function SpeakerSeriesPage() {
  return (
    <div className="flex flex-col h-svh">
      <main className="flex flex-1 flex-col items-center justify-center p-4 md:p-24">
        <div className="container mx-auto max-w-screen-md w-full">
          <h1 className="text-base font-medium mb-6">Speaker Series</h1>

          <Link
            href="https://docs.google.com/presentation/d/1zDYAQAAg2r3vzHAeVNEIImYrIIKJBuW0uwik1MQpOjY/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-baseline justify-between gap-4 py-2 px-2 -mx-2 rounded hover:bg-gray-50 transition-colors duration-150 group !no-underline mb-6 border-b border-gray-100"
          >
            <span className="text-sm text-gray-900 group-hover:underline">Designing an MVP — Slide Deck</span>
            <span className="text-xs text-stone-400 shrink-0">docs.google.com</span>
          </Link>

          <div className="space-y-6">
            {categories.map((category) => (
              <div key={category.label}>
                <p className="text-xs text-stone-400 uppercase tracking-wide mb-1 px-2 -mx-2">
                  {category.label}
                </p>
                <div className="border-t border-gray-100">
                  {category.items.map((item, index) => (
                    <div key={index}>
                      <ResourceRow name={item.name} url={item.url} />
                      {index < category.items.length - 1 && (
                        <div className="border-b border-gray-100 mx-2" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <FooterLogoAnimation />
    </div>
  );
}
