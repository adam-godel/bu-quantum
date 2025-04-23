"use client";
import { useEffect, useRef } from "react";
import renderMathInElement from "katex/dist/contrib/auto-render";

function KatexSpan({ children }) {
  const elementRef = useRef(null);

  useEffect(() => {
    renderMathInElement(elementRef.current, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true },
      ],
      throwOnError: false,
    });
  }, []);

  return <span ref={elementRef}>{children}</span>;
}

export default KatexSpan;