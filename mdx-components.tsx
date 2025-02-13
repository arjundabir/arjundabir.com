import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="font-medium">{children}</h1>,
    p: ({ children }) => <p className="mb-4">{children}</p>,
    ...components,
  };
}
