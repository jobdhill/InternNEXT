type Status = "Applied" | "OA" | "Interview" | "Offer" | "Rejected";

type Row = {
  company: string;
  role: string;
  applied: string;
  status: Status;
  location: string;
  resume: string;
};

const STATUS_STYLES: Record<Status, string> = {
  Applied: "bg-[#F3F4F6] text-[#6B7280]",
  OA: "bg-[#FEF3C7] text-[#78350F]",
  Interview: "bg-[#DBEAFE] text-[#1E40AF]",
  Offer: "bg-[#D1FAE5] text-[#065F46]",
  Rejected: "bg-[#FEE2E2] text-[#991B1B]",
};

const ROWS: Row[] = [
  {
    company: "Stripe",
    role: "SWE Intern",
    applied: "05/06/2026",
    status: "Interview",
    location: "Remote",
    resume: "swe-1",
  },
  {
    company: "Anthropic",
    role: "Research Eng Intern",
    applied: "04/28/2026",
    status: "OA",
    location: "SF, CA",
    resume: "swe-2",
  },
  {
    company: "Apple",
    role: "Frontend Intern",
    applied: "04/22/2026",
    status: "Rejected",
    location: "Remote",
    resume: "swe-1",
  },
  {
    company: "Meta",
    role: "SWE Intern",
    applied: "04/18/2026",
    status: "Applied",
    location: "NYC",
    resume: "swe-1",
  },
  {
    company: "Google",
    role: "Platform Intern",
    applied: "04/15/2026",
    status: "Rejected",
    location: "Remote",
    resume: "swe-2",
  },
  {
    company: "Reddit",
    role: "Backend Intern",
    applied: "04/10/2026",
    status: "Offer",
    location: "SF, CA",
    resume: "swe-1",
  },
];

export default function DashboardShowcase() {
  return (
    <section id="dashboard" className="border-y border-[#EEF0F4] bg-[#FAFBFC]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-s font-semibold uppercase tracking-[0.18em] text-[#10B981]">
            The dashboard
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">
            Your whole search all in one screen.
          </h2>
          <p className="mt-4 text-base text-[#475569] sm:text-[17px]">
            Every chart, stat, and row updates the second you add an
            application. 
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_24px_64px_-32px_rgba(15,23,42,0.22),0_4px_12px_-4px_rgba(15,23,42,0.06)]">
          <div className="overflow-x-auto">
            <div className="min-w-[1100px] p-6 sm:p-8">
              <ChartsRow />
              <StatsRow />
              <FilterRow />
              <ApplicationsTable />
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-[#94A3B8]">
          Sample data shown.
        </p>
      </div>
    </section>
  );
}

function ChartsRow() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <ChartCard label="PIPELINE FUNNEL">
        <FunnelChart />
      </ChartCard>
      <ChartCard label="APPLICATIONS PER WEEK">
        <WeekBars />
      </ChartCard>
      <ChartCard label="RESUME PERFORMANCE · INTERVIEW RATE">
        <ResumePerf />
      </ChartCard>
      <ChartCard label="APPLICATIONS PER INTERVIEW">
        <PerInterview />
      </ChartCard>
    </div>
  );
}

function ChartCard({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-[#EEF0F4] bg-white p-4">
      <p className="text-[10px] font-semibold tracking-[0.12em] text-[#9CA3AF]">
        {label}
      </p>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function FunnelChart() {
  const stages = [
    { label: "Applied", count: 20, color: "#9BC4D0", width: 100 },
    { label: "Responded", count: 6, color: "#4F95A8", width: 60 },
    { label: "Interview+", count: 3, color: "#2E6E84", width: 40 },
    { label: "Offer", count: 1, color: "#10B981", width: 20 },
  ];
  const pcts = ["—", "30%", "15%", "5%"];

  return (
    <div>
      <svg viewBox="0 0 240 70" className="w-full" aria-hidden>
        {stages.map((s, i) => {
          const x = i * 60;
          const w = 56;
          const halfH = s.width * 0.32;
          return (
            <polygon
              key={s.label}
              points={`${x},${35 - halfH} ${x + w},${35 - halfH * 0.85} ${x + w},${35 + halfH * 0.85} ${x},${35 + halfH}`}
              fill={s.color}
            />
          );
        })}
        {stages.map((s, i) => (
          <text
            key={s.label}
            x={i * 60 + 28}
            y={39}
            textAnchor="middle"
            fontSize="11"
            fontWeight="600"
            fill="#FFFFFF"
          >
            {s.count}
          </text>
        ))}
      </svg>
      <div className="mt-2 grid grid-cols-4 gap-1 text-center">
        {stages.map((s, i) => (
          <div key={s.label}>
            <p className="text-[10px] font-medium text-[#0F172A]">{s.label}</p>
            <p className="text-[10px] text-[#94A3B8]">{pcts[i]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function WeekBars() {
  const weeks = [
    { label: "3/15", val: 0 },
    { label: "3/22", val: 0 },
    { label: "3/29", val: 0 },
    { label: "4/5", val: 1 },
    { label: "4/12", val: 2 },
    { label: "4/19", val: 1 },
    { label: "4/26", val: 1 },
    { label: "5/3", val: 1 },
    { label: "5/10", val: 0 },
    { label: "5/17", val: 0 },
  ];
  return (
    <div>
      <div className="flex h-[60px] items-end gap-[3px]">
        {weeks.map((w, i) => (
          <div key={i} className="flex flex-1 flex-col items-center justify-end">
            {w.val > 0 ? (
              <>
                <span className="mb-0.5 text-[9px] font-semibold text-[#0F172A]">
                  {w.val}
                </span>
                <div
                  className="w-full rounded-sm bg-[#7C7BD0]"
                  style={{ height: w.val === 2 ? "56px" : "28px" }}
                />
              </>
            ) : (
              <div className="h-px w-full bg-transparent" />
            )}
          </div>
        ))}
      </div>
      <div className="mt-1 flex gap-[3px]">
        {weeks.map((w, i) => (
          <span
            key={i}
            className="flex-1 text-center text-[8px] text-[#94A3B8]"
          >
            {w.label}
          </span>
        ))}
      </div>
      <p className="mt-1 text-[9px] text-[#94A3B8]">week starting →</p>
    </div>
  );
}

function ResumePerf() {
  const rows = [
    { name: "swe-1", count: "2/4", pct: "50%", barPct: 50, starred: true },
    { name: "swe-2", count: "0/2", pct: "0%", barPct: 0, starred: false },
  ];
  return (
    <div className="space-y-2.5 pt-1">
      {rows.map((r) => (
        <div key={r.name} className="flex items-center gap-2 text-[11px]">
          <span className="w-3">
            {r.starred ? (
              <svg
                viewBox="0 0 24 24"
                fill="#F59E0B"
                className="h-3 w-3"
                aria-hidden
              >
                <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1L12 2z" />
              </svg>
            ) : null}
          </span>
          <span className="w-10 font-medium text-[#0F172A]">{r.name}</span>
          <div className="flex-1">
            <div className="h-1.5 w-full rounded-full bg-[#F1F5F9]">
              <div
                className="h-full rounded-full bg-[#10B981]"
                style={{ width: `${r.barPct}%` }}
              />
            </div>
          </div>
          <span className="w-8 text-right tabular-nums text-[#64748B]">
            {r.count}
          </span>
          <span className="w-10 text-right tabular-nums font-medium text-[#0F172A]">
            {r.pct}
          </span>
        </div>
      ))}
    </div>
  );
}

function PerInterview() {
  return (
    <div className="flex flex-col items-center pt-1 text-center">
      <p className="text-3xl font-bold tabular-nums text-[#065F46]">10</p>
      <p className="text-[10px] font-medium text-[#64748B]">
        apps per interview
      </p>
      <p className="mt-1 text-[10px] text-[#94A3B8]">2 interviews · 20 apps</p>
      <p className="mt-2 text-[9px] leading-snug text-[#94A3B8]">
        Average is around 1 interview every 40 applications.
      </p>
    </div>
  );
}

function StatsRow() {
  return (
    <div className="mt-4 grid grid-cols-6 gap-3">
      <StatCard label="Total" value="20" after="Applications" valueClass="text-[#111827]" />
      <StatCard label="Response rate" value="15.0%" valueClass="text-[#0369A1]" />
      <StatCard label="Interview" value="10.0%" valueClass="text-[#7C3AED]" />
      <StatCard label="Offer" value="5.00%" valueClass="text-[#065F46]" />
      <StatCard
        label="Avg. Reply"
        value="17 d"
        hint="after applying"
        valueClass="text-[#78350F]"
      />
      <StatCard
        label="Rejections"
        value="2"
        after="Applications"
        valueClass="text-[#8B0000]"
      />
    </div>
  );
}

function StatCard({
  label,
  value,
  after,
  hint,
  valueClass,
}: {
  label: string;
  value: string;
  after?: string;
  hint?: string;
  valueClass: string;
}) {
  return (
    <div className="rounded-lg border border-[#F0F0F0] bg-white px-4 py-3 shadow-sm">
      <p className="text-xs font-medium text-neutral-600">{label}</p>
      <p className={`mt-1 text-2xl font-semibold tabular-nums ${valueClass}`}>
        {value}
      </p>
      {after ? (
        <p className="mt-0.5 text-[11px] font-medium tracking-wide text-neutral-500">
          {after}
        </p>
      ) : null}
      {hint ? (
        <p className="mt-1 text-[11px] leading-snug text-neutral-500">{hint}</p>
      ) : null}
    </div>
  );
}

function FilterRow() {
  const filters = ["All", "Applied", "Interview", "Offer", "Rejected"];
  return (
    <div className="mt-5 flex items-center gap-3">
      <div className="flex flex-1 items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-3 py-2">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-4 w-4 text-[#94A3B8]"
          aria-hidden
        >
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="m20 20-3.5-3.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
        <span className="text-sm text-[#94A3B8]">Search company or role</span>
      </div>
      <div className="flex items-center gap-2">
        {filters.map((f, i) => (
          <button
            key={f}
            type="button"
            className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
              i === 0
                ? "bg-[#0F172A] text-white"
                : "border border-[#E5E7EB] bg-white text-[#475569]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <button
        type="button"
        className="rounded-lg border border-dashed border-[#CBD5E1] bg-white px-4 py-2 text-sm font-medium text-[#475569]"
      >
        + Add Application
      </button>
    </div>
  );
}

function ApplicationsTable() {
  return (
    <div className="mt-4 overflow-hidden rounded-lg border border-[#F0F0F0] bg-white">
      <div className="grid grid-cols-[40px_minmax(0,1.2fr)_minmax(0,1.4fr)_140px_120px_minmax(0,1fr)_100px_minmax(0,1fr)] items-center gap-2 border-b border-[#F0F0F0] bg-[#FAFAFA] px-4 py-2.5 text-[10px] font-semibold tracking-[0.08em] text-[#9CA3AF]">
        <span>#</span>
        <span>COMPANY</span>
        <span>ROLE</span>
        <span>APPLIED</span>
        <span>STATUS</span>
        <span>LOCATION</span>
        <span>RESUME</span>
        <span>NOTES</span>
      </div>
      {ROWS.map((r, i) => (
        <div
          key={r.company}
          className={`grid grid-cols-[40px_minmax(0,1.2fr)_minmax(0,1.4fr)_140px_120px_minmax(0,1fr)_100px_minmax(0,1fr)] items-center gap-2 px-4 py-2.5 text-[13px] ${
            i !== ROWS.length - 1 ? "border-b border-[#F4F5F7]" : ""
          }`}
        >
          <span className="text-[#94A3B8]">{i + 1}</span>
          <span className="font-medium text-[#0F172A]">{r.company}</span>
          <span className="text-[#475569]">{r.role}</span>
          <span className="flex items-center gap-1.5 text-[#0F172A]">
            <span className="tabular-nums">{r.applied}</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-3.5 w-3.5 text-[#94A3B8]"
              aria-hidden
            >
              <rect
                x="3"
                y="5"
                width="18"
                height="16"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="M3 9h18M8 3v4M16 3v4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span>
            <span
              className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1 text-[11px] font-medium ${STATUS_STYLES[r.status]}`}
            >
              {r.status}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-3 w-3"
                aria-hidden
              >
                <path
                  d="m6 9 6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </span>
          <span className="text-[#475569]">{r.location}</span>
          <span className="text-[#475569]">{r.resume}</span>
          <span className="text-[#94A3B8]">--</span>
        </div>
      ))}
    </div>
  );
}
