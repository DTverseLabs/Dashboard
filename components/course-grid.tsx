import { CourseCard } from "@/components/course-card";
import type { Course } from "@/lib/types";

type CourseGridProps = {
  courses: Course[];
};

export function CourseGrid({ courses }: CourseGridProps) {
  if (courses.length === 0) {
    return (
      <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:col-span-4">
        <p className="text-sm text-white/50">No courses yet</p>
        <h2 className="mt-3 text-2xl font-semibold">No courses are available yet</h2>
      </article>
    );
  }

  return (
    <>
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          title={course.title}
          progress={course.progress}
          iconName={course.icon_name}
        />
      ))}
    </>
  );
}
