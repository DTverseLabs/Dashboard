"use client";

import { motion } from "framer-motion";
import { BookOpen, Flame, Home, Settings, Trophy } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", icon: Home },
  { label: "Courses", icon: BookOpen },
  { label: "Streak", icon: Flame },
  { label: "Awards", icon: Trophy },
  { label: "Settings", icon: Settings },
];

export function Sidebar() {
  const [active, setActive] = useState("Home");

  return (
    <aside className="fixed left-4 top-4 z-40 hidden h-[calc(100vh-2rem)] w-20 shrink-0 rounded-3xl border border-white/10 bg-white/[0.035] p-3 backdrop-blur-xl xl:block">
      <nav aria-label="Dashboard navigation" className="flex h-full flex-col items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sm font-bold text-black">
          L
        </div>

        <ul className="flex flex-col gap-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.label;

            return (
              <li key={item.label}>
                <button
                  type="button"
                  onClick={() => setActive(item.label)}
                  className="relative flex h-11 w-11 items-center justify-center rounded-2xl text-white/55 transition-colors hover:text-white"
                  title={item.label}
                  aria-label={item.label}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute inset-0 rounded-2xl bg-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className="relative z-10" size={19} />
                </button>
              </li>
            );
          })}
        </ul>

        <div className="h-10 w-10 rounded-full border border-white/10 bg-gradient-to-br from-violet-500 to-blue-500" />
      </nav>
    </aside>
  );
}
