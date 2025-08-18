"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";
import "highlight.js/styles/github.min.css";

const Tiptap = () => {
  const lowlight = createLowlight(all);

  const editor = useEditor({
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
    content: `<h1>Hello World! 🌎️</h1>
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
