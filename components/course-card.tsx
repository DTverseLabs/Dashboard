import { BookOpen, Code, Database, Sparkles } from "lucide-react";
import { BentoCard } from "@/components/bento-card";
import { ProgressBar } from "@/components/progress-bar";

const icons = {
  BookOpen,
  Code,
  Database,
  Sparkles,
};

type CourseCardProps = {
  title: string;
  progress: number;
  iconName: string;
};

export function CourseCard({ title, progress, iconName }: CourseCardProps) {
  const Icon = icons[iconName as keyof typeof icons] ?? BookOpen;

  return (
    <BentoCard className="min-h-[210px] md:col-span-2">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.16),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_30%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:26px_26px]" />

      <div className="relative z-10">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
          <Icon size={20} />
        </div>

        <h2 className="mt-5 text-xl font-semibold text-white">{title}</h2>
        <p className="mt-2 text-sm text-white/50">{progress}% completed</p>
        <ProgressBar value={progress} />
      </div>
    </BentoCard>
  );
}
