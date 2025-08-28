"use client";

import { useMemo } from "react";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";
import "highlight.js/styles/github.min.css";
import { usePathname } from "next/navigation";
import { useTiptap } from "./tiptap-wrapper";
import { getDraft, updateDraftContent } from "@/app/actions";
import debounce from "lodash.debounce";
import { BlogPost } from "@/types/blog";
import { toast } from "sonner";

const Tiptap = ({ draft }: { draft: BlogPost | undefined }) => {
  const lowlight = createLowlight(all);
  const pathname = usePathname();
  const dateId = pathname.split("/").at(-1) as string;
  const { setLoading } = useTiptap();

  const debouncedUpdateDraftContent = useMemo(
    () =>
      debounce(async (editor: Editor) => {
        try {
          await updateDraftContent(dateId, editor.getHTML());
        } catch {
          toast.error("Document must contain a title");
          const prevDraft = await getDraft(dateId);
          editor.commands.setContent(prevDraft?.content || "<h1></h1>");
        }
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
      debouncedUpdateDraftContent(editor);
    },
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
