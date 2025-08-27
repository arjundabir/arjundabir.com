"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
  type ReactNode,
} from "react";

export const BLOG_ARRAY_KEY = "blog:drafts";

type tiptapContextType = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

export const tiptapContext = createContext<tiptapContextType | undefined>(
  undefined
);

export default function TiptapWrapper({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <tiptapContext.Provider value={{ loading, setLoading }}>
      {children}
    </tiptapContext.Provider>
  );
}

export const useTiptap = () => {
  const ctx = useContext(tiptapContext);
  if (!ctx)
    throw new Error("useTiptap must be used within a tiptapContextProvider");
  return ctx;
};
