import { Link } from "react-router-dom";
import DashboardPreview from "../auth/DashboardPreview";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, #EEF0FF 0%, rgba(238,240,255,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-0 h-[420px] w-[420px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, #ECFDF5 0%, rgba(236,253,245,0) 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pt-16 pb-20 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pt-24 lg:pb-28">
        <div className="flex flex-col justify-center">            
          <h1 className="mt-5 text-[44px] font-bold leading-[1.05] tracking-tight text-[#0F172A] sm:text-[56px] lg:text-[64px]">
            Track every internship{" "}
            <span className="text-[#10B981]">application.</span>
            <br />
            Find your bottleneck.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#475569] sm:text-[17px]">
            The average internship now gets{" "}
            <span className="font-semibold text-[#0F172A]">109 applicants</span>
            . Stop sending into the void. Track your funnel, see your response
            rate, and figure out which resume actually works.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-[#0F172A]  px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-12px_rgba(15,23,42,0.5)] transition hover:bg-[#10B981] focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2"
            >
              Start tracking — free
              <span aria-hidden>→</span>
            </Link>
            <a
              href="#dashboard"
              className="inline-flex items-center rounded-full border border-[#E5E7EB] bg-white px-6 py-3.5 text-sm font-semibold text-[#0F172A] transition hover:bg-[#FAFBFC] focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2"
            >
              See a demo
            </a>
          </div>
          
        </div>

        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="w-full max-w-xl">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
