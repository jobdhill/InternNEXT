import DashboardShowcase from "../components/landing/DashboardShowcase";
import Features from "../components/landing/Features";
import Hero from "../components/landing/Hero";
import LandingFooter from "../components/landing/LandingFooter";
import LandingNav from "../components/landing/LandingNav";
import SignUpCTA from "../components/landing/SignUpCTA";
import StatsBand from "../components/landing/StatsBand";

export default function LandingPage() {
  return (
    <div className="font-manrope min-h-screen bg-white text-[#0F172A]">
      <LandingNav />
      <main>
        <Hero />
        <StatsBand />
        <Features />
        <DashboardShowcase />
        <SignUpCTA />
      </main>
      <LandingFooter />
    </div>
  );
}
