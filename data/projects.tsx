import Image from "next/image";
import { Book, CheckIcon, type LucideIcon } from "lucide-react";
import Favicon from "favicon.ico";
import React from "react";

export type Project = {
  icon?: LucideIcon | React.ReactNode;
  title: string;
  description: string;
  link: string;
  displayUrl: string;
};

export const projects: Project[] = [
  {
    icon: <Image src="/zotsites.svg" alt="zotsites" width={20} height={20} />,
    title: "Zotsites",
    description: "Search Engine for UCI students.",
    link: "https://zotsites.com",
    displayUrl: "zotsites.com",
  },
  {
    icon: CheckIcon,
    title: "Todos",
    description: "Todo list like Linear.",
    link: "https://todos.arjundabir.com",
    displayUrl: "todos.arjundabir.com",
  },
  {
    icon: (
      <img
        src="https://gratitudeatsevenpm.com/favicon.ico"
        alt="gratitudeatsevenpm"
        width={20}
        height={20}
      />
    ),
    title: "Gratitude at 7 PM",
    description: "Write what you're grateful for at 7 pm every day.",
    link: "https://gratitudeatsevenpm.com",
    displayUrl: "gratitudeatsevenpm.com",
  },
  {
    icon: (
      <Image
        src="/favicons/light-mode-favicon.png"
        alt="arjundabir"
        className="invert ml-1"
        width={20}
        height={20}
      />
    ),
    title: "Archive",
    description: "My portfolio from 2023-2024.",
    link: "https://archive.arjundabir.com",
    displayUrl: "archive.arjundabir.com",
  },
  {
    icon: Book,
    title: "Blog",
    description: "I write about things I find cool.",
    link: "/blog",
    displayUrl: "arjundabir.com/blog",
  },
  {
    icon: (
      <img
        src="https://arjuns-closet.netlify.app/favicon.ico"
        alt="arjuns-closet"
        width={20}
        height={20}
      />
    ),
    title: "Arjun's Closet",
    description: "A fun way to choose what to wear.",
    link: "https://arjuns-closet.netlify.app",
    displayUrl: "arjuns-closet.netlify.app",
  },
  {
    icon: (
      <Image
        src="/favicons/light-mode-favicon.png"
        alt="portfolio"
        width={20}
        height={20}
      />
    ),
    title: "Portfolio",
    description: "A portfolio of websites I've built.",
    link: "/portfolio",
    displayUrl: "arjundabir.com/portfolio",
  },
  {
    icon: (
      <img
        src="https://usa.arjundabir.com/favicon.ico"
        alt="states i've visis"
        width={20}
        height={20}
      />
    ),
    title: "States I've Visited",
    description: "A map for the states I've been to.",
    link: "https://usa.arjundabir.com",
    displayUrl: "usa.arjundabir.com",
  },
];

export default projects;
