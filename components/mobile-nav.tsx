"use client";

import { BookOpen, Home, LineChart, Settings } from "lucide-react";

const items = [Home, BookOpen, LineChart, Settings];

export function MobileNav() {
  return (
    <nav aria-label="Mobile navigation" className="fixed bottom-4 left-4 right-4 z-50 rounded-3xl border border-white/10 bg-zinc-950/85 p-2 backdrop-blur md:hidden">
      <ul className="flex items-center justify-around">
        {items.map((Icon, index) => (
          <li key={index}>
            <button type="button" className="flex h-11 w-11 items-center justify-center rounded-2xl text-white/70 hover:bg-white/10 hover:text-white">
              <Icon size={19} />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
