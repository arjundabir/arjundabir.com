import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-lg font-medium mb-4 border-b">{children}</h1>
    ),
    p: ({ children }) => <p className="my-2 mb-4">{children}</p>,
    a: ({ children, href }) => (
      <a href={href} className="text-blue-500 hover:underline">
        {children}
      </a>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-0">{children}</ol>
    ),
    li: ({ children }) => <li className="text-gray-800">{children}</li>,
    YouTube: ({ id, caption }: { id: string; caption?: string }) => (
      <div className="relative w-full aspect-video  mb-4">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full border-0 h-96"
        />
        {caption && (
          <p className="text-sm text-gray-800 text-center">{caption}</p>
        )}
      </div>
    ),
    ...components,
  };
}
