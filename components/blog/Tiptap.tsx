"use client";

import { useMemo } from "react";
import { useEditor, EditorContent, Editor, nodeInputRule } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";
import "highlight.js/styles/github.min.css";
import { usePathname } from "next/navigation";
import { useTiptap } from "./tiptap-wrapper";
import { getPost, updateDraftContent } from "@/app/actions";
import debounce from "lodash.debounce";
import { BlogPost } from "@/types/blog";
import { toast } from "sonner";
import Link from "@tiptap/extension-link";
import Youtube from "@tiptap/extension-youtube";
import { styleText } from "util";

const Tiptap = ({ post }: { post: BlogPost | undefined }) => {
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
          const prevDraft = await getPost(dateId, "drafts");
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
      Link,
      Youtube.configure({
        progressBarColor: "white",
        HTMLAttributes: {
          class: "w-full aspect-video h-auto",
        },
      }).extend({
        addInputRules() {
          return [
            nodeInputRule({
              find: /(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/,
              type: this.type,
              getAttributes: (match) => ({
                src: match[0],
              }),
            }),
          ];
        },
      }),
    ],
    editable: post?.type === "drafts",
    content: post?.content,
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
