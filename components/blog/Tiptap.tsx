"use client";

import { useMemo } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";
import "highlight.js/styles/github.min.css";
import { usePathname } from "next/navigation";
import { useTiptap } from "./tiptap-wrapper";
import { updateDraftContent } from "@/app/actions";
import debounce from "lodash.debounce";
import { BlogPost } from "@/types/blog";

const Tiptap = ({ draft }: { draft: BlogPost | undefined }) => {
  const lowlight = createLowlight(all);
  const pathname = usePathname();
  const dateId = pathname.split("/").at(-1) as string;
  const { setLoading } = useTiptap();

  const debouncedUpdateDraftContent = useMemo(
    () =>
      debounce(async (html: BlogPost["content"]) => {
        await updateDraftContent(dateId, html);
        setLoading(false);
      }, 500),

    [setLoading, dateId]
  );

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
      }),
    ],
    content: draft?.content,
    immediatelyRender: false,
    autofocus: true,
    editorProps: {
      attributes: {
        class: "focus:outline-none",
      },
    },
    onUpdate: async ({ editor }) => {
      setLoading(true);
      debouncedUpdateDraftContent(editor.getHTML());
    },
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
