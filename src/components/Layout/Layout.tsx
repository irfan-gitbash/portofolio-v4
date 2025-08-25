import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="lg:pl-80">
        <div className="px-4 py-8 lg:px-8 lg:py-12 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}