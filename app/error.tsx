"use client";

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#09090b] px-4 text-white">
      <section className="max-w-md rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center">
        <p className="text-sm text-red-300">Something went wrong</p>
        <h1 className="mt-3 text-2xl font-semibold">Unable to load dashboard data</h1>
        <p className="mt-3 text-sm text-white/50">{error.message}</p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 rounded-2xl bg-white px-4 py-2 text-sm font-medium text-black"
        >
          Try again
        </button>
      </section>
    </main>
  );
}
