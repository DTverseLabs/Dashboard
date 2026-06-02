import { Flame, Sparkles } from "lucide-react";
import { BentoCard } from "@/components/bento-card";

export function HeroTile() {
  return (
    <BentoCard className="min-h-[260px] md:col-span-3">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute bottom-0 left-12 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/60">
            <Sparkles size={15} /> Student dashboard
          </p>

          <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Welcome back
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-white/60 sm:text-base">
            Track your courses, keep your learning streak alive, and continue from where you stopped.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <div className="rounded-2xl border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-100">
            <span className="inline-flex items-center gap-2"><Flame size={16} /> 12 day streak</span>
          </div>
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-100">
            4 active courses
          </div>
        </div>
      </div>
    </BentoCard>
  );
}
