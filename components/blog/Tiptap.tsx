"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";
import "highlight.js/styles/github.min.css";
import { usePathname } from "next/navigation";

const Tiptap = () => {
  const lowlight = createLowlight(all);
  const pathname = usePathname();
  const dateId = pathname.split("/")[-1];
  let content: string | null = "";

  const editor = useEditor({
    onBeforeCreate: () => {
      content = localStorage.getItem(`blog:drafts:${dateId}`);
    },
    extensions: [
      CodeBlockLowlight.configure({
        lowlight,
        defaultLanguage: "javascript",
        HTMLAttributes: {
          class: "mb-4",
        },
      }),
      StarterKit.configure({
        codeBlock: false,
        heading: {
          levels: [1, 2],
        },
      }),
    ],
    content: content
      ? JSON.parse(content)
      : `<h1>Hello World! 🌎️</h1>
    <pre><code>function helloWorld(){}</code></pre>
    `,
    immediatelyRender: false,
    autofocus: true,
    editorProps: {
      attributes: {
        class: "focus:outline-none",
      },
    },
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
