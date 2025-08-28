"use client";

import { useMemo } from "react";
import { useEditor, EditorContent, Content } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";
import "highlight.js/styles/github.min.css";
import { usePathname } from "next/navigation";
import { useTiptap } from "./tiptap-wrapper";
import { createDraft, updateDraftContent } from "@/app/actions";
import debounce from "lodash.debounce";
import { BlogPost } from "@/types/blog";

const Tiptap = ({ draft }: { draft: BlogPost | undefined }) => {
  const lowlight = createLowlight(all);
  const pathname = usePathname();
  const dateId = pathname.split("/").at(-1) as string;
  const { setLoading } = useTiptap();

  const debouncedUpdateDraftContent = useMemo(
    () =>
      debounce(async (json: object) => {
        await updateDraftContent(dateId, json);
        setLoading(false);
      }, 500),

    [setLoading, dateId]
  );

  const editor = useEditor({
    onBeforeCreate: async () => {
      const year = dateId.slice(4, 8);
      const month = dateId.slice(0, 2);
      const day = dateId.slice(2, 4);
      const date = `${year}-${month}-${day}`;

      const blog = {
        slug: dateId,
        date,
        title: "Hello World",
        type: "drafts",
        content: {},
      };

      createDraft(blog);
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
    content: draft?.content as Content,
    immediatelyRender: false,
    autofocus: true,
    editorProps: {
      attributes: {
        class: "focus:outline-none",
      },
    },
    onUpdate: async ({ editor }) => {
      setLoading(true);
      debouncedUpdateDraftContent(editor.getJSON());
      // throttledUpdateDraftContent(editor.getJSON());
    },
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
