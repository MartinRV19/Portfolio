import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'John Doe | Portfolio',
  description: 'Personal portfolio of John Doe, Full Stack Developer',
  generator: 'v0.dev'
};

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem 
          disableTransitionOnChange
        >
          {/* Header */}
          <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
              <div className="font-bold text-xl">John Doe</div>
              <nav className="hidden md:flex gap-6">
                <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
                <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </nav>
              <div className="flex items-center gap-2">
                {/* Your social links */}
              </div>
            </div>
          </header>

          {/* Main layout with sidebar */}
          <div className="flex flex-col md:flex-row">
            {/* Scrollable sidebar */}
            <aside className="md:w-64 md:h-[calc(100vh-4rem)] md:sticky md:top-16 overflow-y-auto border-r bg-background">
              <nav className="p-4">
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="hover:text-primary transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/#projects" className="hover:text-primary transition-colors">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/#about" className="hover:text-primary transition-colors">
                      About
                    </Link>
                  </li>
                </ul>
              </nav>
            </aside>

            {/* Main content area */}
            <main className="flex-1 overflow-auto">
              {children}
            </main>
          </div>

          {/* Footer */}
          <footer className="border-t py-6">
            <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} John Doe. All rights reserved.
              </div>
              <div className="flex gap-4">
                <Link href="#about" className="text-sm hover:text-primary transition-colors">
                  About
                </Link>
                <Link href="#projects" className="text-sm hover:text-primary transition-colors">
                  Projects
                </Link>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}