"use client";
import dynamic from 'next/dynamic';

const HtmlRenderer = dynamic(() => import('@/components/html-renderer'));

export default function ClientComponent() { return <HtmlRenderer filePath="/notebooks/venta_departamentos_properati.html" height={800} />; }