"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";

const HtmlRenderer = dynamic(
  () => import("@/components/html-renderer"),
  { ssr: false }
);

export default function Project1Page() { 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="h-full overflow-hidden">
            <HtmlRenderer
                filePath="/notebooks/acciones_Merval.html"  
                className="w-full"
                height="100vh"
            />
        </div>
    );
}