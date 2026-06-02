import { Flame } from "lucide-react";
import { BentoCard } from "@/components/bento-card";

export function StreakTile() {
  return (
    <BentoCard className="min-h-[260px]">
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-200">
            <Flame size={20} />
          </div>

          <p className="mt-5 text-sm text-white/50">Daily streak</p>
          <h2 className="mt-3 text-5xl font-semibold">12</h2>
          <p className="mt-2 text-sm text-white/50">days active</p>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/60">
          Keep going today
        </div>
      </div>
    </BentoCard>
  );
}
