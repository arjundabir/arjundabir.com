import Image from "next/image";
import {
  Book,
  CheckIcon,
  HeartIcon,
  Shirt,
  type LucideIcon,
} from "lucide-react";
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
    link: "https://todos.arjundabir.com/todo",
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
];

export default projects;
