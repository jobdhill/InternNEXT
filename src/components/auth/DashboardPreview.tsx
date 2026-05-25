import BrandMark from "./BrandMark";

type Status =
  | "Applied"
  | "OA"
  | "Interview"
  | "Offer"
  | "Rejected"
  | "Ghosted";

type Row = {
  company: string;
  role: string;
  date: string;
  status: Status;
};

const STATUS_STYLES: Record<Status, string> = {
  Applied: "bg-[#F3F4F6] text-[#6B7280]",
  OA: "bg-[#FEF3C7] text-[#78350F]",
  Interview: "bg-[#E0E7FF] text-[#3730A3]",
  Offer: "bg-[#D1FAE5] text-[#065F46]",
  Rejected: "bg-[#FEE2E2] text-[#991B1B]",
  Ghosted: "bg-[#EDE9FE] text-[#5B21B6]",
};

const ROWS: Row[] = [
  { company: "Stripe", role: "SWE Intern", date: "Jan 8", status: "Rejected" },
  {
    company: "Anthropic",
    role: "Research Eng Intern",
    date: "Jan 12",
    status: "Interview",
  },
  { company: "Capital One", role: "Frontend Intern", date: "Jan 18", status: "OA" },
  {
    company: "Amazon",
    role: "SWE Intern",
    date: "Jan 22",
    status: "Interview",
  },
  {
    company: "IBM",
    role: "Backend Intern",
    date: "Mar 10",
    status: "Offer",
  },
  { company: "Notion", role: "SWE Intern", date: "Jan 15", status: "Ghosted" },
  {
    company: "Figma",
    role: "Product Eng Intern",
    date: "Jan 14",
    status: "Rejected",
  },
];

export default function DashboardPreview() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="rounded-xl bg-white border border-[#E8E9EE] overflow-hidden shadow-[0_18px_48px_-22px_rgba(15,23,42,0.18),0_2px_8px_-2px_rgba(15,23,42,0.06)]">
        <div className="flex items-center gap-2.5 px-5 py-3.5 border-b border-[#F1F2F4]">
          <BrandMark size="sm" />
        </div>

        <div className="grid grid-cols-4 border-b border-[#F1F2F4]">
          <Stat label="TOTAL" value="30" valueClass="text-[#0F172A]" />
          <Stat label="RESPONSE" value="47%" valueClass="text-[#15803D]" />
          <Stat label="INTERVIEW" value="17%" valueClass="text-[#4338CA]" />
          <Stat label="OFFER" value="3%" valueClass="text-[#15803D]" />
        </div>

        <div>
          {ROWS.map((r, i) => (
            <div
              key={r.company}
              className={`grid grid-cols-[90px_minmax(0,1fr)_60px_110px] items-center gap-3 px-5 py-2.5 text-[13px] ${
                i !== ROWS.length - 1 ? "border-b border-[#F4F5F7]" : ""
              }`}
            >
              <div className="font-semibold text-[#0F172A] truncate">
                {r.company}
              </div>
              <div className="text-[#64748B] truncate">{r.role}</div>
              <div className="text-right font-mono text-[12px] text-[#94A3B8]">
                {r.date}
              </div>
              <div className="flex justify-end">
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium whitespace-nowrap ${STATUS_STYLES[r.status]}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                  {r.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-6 max-w-md text-sm text-[#475569] leading-relaxed">
        Track every application, response rate, and interview in one place.
        Built for students hunting their first internship.
      </p>
    </div>
  );
}

function Stat({
  label,
  value,
  valueClass,
}: {
  label: string;
  value: string;
  valueClass: string;
}) {
  return (
    <div className="px-5 py-3.5 border-r border-[#F1F2F4] last:border-r-0">
      <div className="text-[10px] font-semibold tracking-[0.08em] text-[#9CA3AF]">
        {label}
      </div>
      <div className={`mt-1 text-lg font-bold ${valueClass}`}>{value}</div>
    </div>
  );
}
