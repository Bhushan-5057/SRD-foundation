"use client";

import { useState } from "react";
import { SectionCard } from "@/components/common/SectionCard";
import { decrement, increment, incrementByAmount, reset } from "@/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

export function CounterPanel() {
  const [amount, setAmount] = useState(5);
  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <SectionCard title="Redux Toolkit State Example" description="Counter value from centralized store:">
      <p className="mt-4 text-4xl font-bold text-brand-600">{value}</p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => dispatch(decrement())}
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium transition hover:bg-slate-100"
        >
          -1
        </button>

        <button
          type="button"
          onClick={() => dispatch(increment())}
          className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-700"
        >
          +1
        </button>

        <button
          type="button"
          onClick={() => dispatch(reset())}
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium transition hover:bg-slate-100"
        >
          Reset
        </button>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <input
          type="number"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value) || 0)}
          className="w-24 rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-brand-500 focus:ring-2"
        />

        <button
          type="button"
          onClick={() => dispatch(incrementByAmount(amount))}
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          Add amount
        </button>
      </div>
    </SectionCard>
  );
}
