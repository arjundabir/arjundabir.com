"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";
import "highlight.js/styles/github.min.css";
import { usePathname } from "next/navigation";
import { useTiptap } from "./TiptapWrapper";

const Tiptap = () => {
  const lowlight = createLowlight(all);
  const pathname = usePathname();
  const dateId = pathname.split("/").at(-1);
  const localStorageKey = `blog:drafts:${dateId}`;
  const { setLoading } = useTiptap();

  const editor = useEditor({
    onCreate: ({ editor }) => {
      const savedContent = localStorage.getItem(localStorageKey);
      const content = savedContent
        ? JSON.parse(savedContent)
        : `<h1>Hello World</h1>`;
      editor.commands.setContent(content);
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
    immediatelyRender: false,
    autofocus: true,
    editorProps: {
      attributes: {
        class: "focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      setLoading(true);
      localStorage.setItem(localStorageKey, JSON.stringify(editor.getJSON()));
      setLoading(false);
    },
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
