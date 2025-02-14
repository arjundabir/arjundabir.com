import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-lg font-medium mb-4 border-b">{children}</h1>
    ),
    p: ({ children }) => <p className="mb-4">{children}</p>,
    a: ({ children, href }) => (
      <a href={href} className="text-blue-500 hover:underline">
        {children}
      </a>
    ),
    ...components,
  };
}
