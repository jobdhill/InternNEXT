import { useNavigate } from "react-router-dom";

export default function SignUpCTA() {
  const navigate = useNavigate();


  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-28">
        <div className="relative mx-auto overflow-hidden rounded-3xl border border-[#EEF0F4] bg-[#FAFBFC] px-6 py-14 sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #EEF0FF 0%, rgba(238,240,255,0) 70%)",
            }}
          />
          <div className="relative">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">
              Stop applying blind.{" "}
              <span className="text-[#10B981]">Start tracking.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-[#475569] sm:text-[17px]">
              Add your first application in under a minute. See your funnel,
              your response rate, and the resume that's actually getting
              callbacks.
            </p>

          
              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="inline-flex h-12 mt-4 items-center justify-center gap-2 rounded-full bg-[#0F172A] px-6 text-sm font-semibold text-white shadow-[0_8px_24px_-12px_rgba(15,23,42,0.5)] transition hover:bg-[#10B981] focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2"
              >
                Get started free
                <span aria-hidden>→</span>
              </button>
            <p className="mt-4 text-xs text-[#94A3B8]">
              Free forever. No credit card.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
