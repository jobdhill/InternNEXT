type Stat = {
  value: string;
  valueClass: string;
  label: string;
  source: string;
};

const STATS: Stat[] = [
  {
    value: "273",
    valueClass: "text-[#e0474c]",
    label: "applicants per tech internship posting on average",
    source: "Handshake 2025 Internship Index",
  },
  {
    value: "2.6%",
    valueClass: "text-[#0F172A]",
    label: "average response rate on cold applications",
    source: "NACE 2024 Internship & Co-op Report",
  },
  {
    value: "50+",
    valueClass: "text-[#0F172A]",
    label: "applications to land one offer on average",
    source: "Handshake 2024 student survey",
  },
  {
    value: "0",
    valueClass: "text-[#10B981]",
    label: "of the above improves without tracking",
    source: "InternNEXT",
  },
];

export default function StatsBand() {
  return (
    <section className="border-y border-[#EEF0F4] bg-[#F8F9FB]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-s font-semibold uppercase tracking-[0.18em] text-[#10B981]">
            Why track?
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">
            The internship market is brutal. Knowing your numbers is the only
            edge.
          </h2>
          <p className="mt-4 text-base text-[#475569] sm:text-[17px]">
            The data on a typical search isn't pretty. Most students don't know
            their own response rate — which means they can't tell a resume
            problem from a volume problem.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#EEF0F4] bg-[#EEF0F4] lg:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex flex-col bg-white p-6 sm:p-8"
            >
              <div
                className={`text-5xl font-bold tabular-nums tracking-tight sm:text-6xl ${s.valueClass}`}
              >
                {s.value}
              </div>
              <p className="mt-3 text-sm font-medium leading-snug text-[#0F172A]">
                {s.label}
              </p>
              <p className="mt-auto pt-4 text-[11px] italic leading-snug text-[#94A3B8]">
                {s.source}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
