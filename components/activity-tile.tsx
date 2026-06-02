import { BentoCard } from "@/components/bento-card";

const activity = [30, 70, 45, 90, 55, 80, 35, 65, 95, 40, 75, 60, 48, 86];

export function ActivityTile() {
  return (
    <BentoCard className="min-h-[240px] md:col-span-2">
      <div className="relative z-10">
        <p className="text-sm text-white/50">Weekly activity</p>
        <h2 className="mt-3 text-2xl font-semibold">Learning graph</h2>

        <div className="mt-8 flex h-28 items-end gap-2" aria-label="Mock weekly learning activity graph">
          {activity.map((height, index) => (
            <span
              key={index}
              className="flex-1 rounded-full bg-gradient-to-t from-violet-400/40 to-white/80"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </BentoCard>
  );
}
