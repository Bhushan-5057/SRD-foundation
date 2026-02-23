import { CounterPanel } from "@/features/counter/CounterPanel";

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-6 py-12">
      <section className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">Frontend Foundation</h1>
        <p className="max-w-2xl text-slate-600">
          This project is scaffolded with Next.js, TypeScript, Redux Toolkit, and Tailwind CSS using a
          scalable folder structure.
        </p>
      </section>

      <CounterPanel />
    </main>
  );
}
