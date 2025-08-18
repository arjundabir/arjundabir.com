"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<h1>Hello World! 🌎️</h1>",
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
