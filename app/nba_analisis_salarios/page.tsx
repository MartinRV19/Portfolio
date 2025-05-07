"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";

const HtmlRenderer = dynamic(
  () => import("@/components/html-renderer"),
  { ssr: false }
);

export default function Project5Page() { 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="h-full overflow-hidden">
            <HtmlRenderer
                filePath="/notebooks/NBA_analisis_salarios.html"
                className="w-full"
                height="100vh"
            />
        </div>
    );
}