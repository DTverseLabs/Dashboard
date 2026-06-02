export default function Loading() {
  return (
    <main className="min-h-screen bg-[#09090b] p-4 text-white">
      <section className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-4 md:grid-cols-4">
        <div className="animate-pulse rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:col-span-3" />
        <div className="animate-pulse rounded-3xl border border-white/10 bg-white/[0.04] p-6" />
        <div className="animate-pulse rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:col-span-2" />
        <div className="animate-pulse rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:col-span-2" />
        <div className="animate-pulse rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:col-span-2" />
      </section>
    </main>
  );
}
