import { ActivityTile } from "@/components/activity-tile";
import { CourseGrid } from "@/components/course-grid";
import { HeroTile } from "@/components/hero-tile";
import { MobileNav } from "@/components/mobile-nav";
import { MotionShell } from "@/components/motion-shell";
import { Sidebar } from "@/components/sidebar";
import { StreakTile } from "@/components/streak-tile";
import { getCourses } from "@/lib/courses";

export default async function Home() {
  const courses = await getCourses();

  return (
    <main className="min-h-screen overflow-hidden bg-[#09090b] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.12),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.10),transparent_28%)]" />

      <section className="relative mx-auto min-h-screen w-full max-w-7xl px-4 py-4 pb-24 xl:pb-4 xl:pl-28">
        <Sidebar />

        <MotionShell className="grid w-full min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <HeroTile />
          <StreakTile />
          <CourseGrid courses={courses} />
          <ActivityTile />
        </MotionShell>
      </section>

      <MobileNav />
    </main>
  );
}
