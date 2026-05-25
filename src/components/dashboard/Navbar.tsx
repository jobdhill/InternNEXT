import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import Button from "../ui/Button";

export default function Navbar() {
  const navigate = useNavigate();

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/login", { replace: true });
  }

  return (
    <nav className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-[#E5E7EB]">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-3.5">
        <div className="flex items-center text-[22px] font-bold tracking-tight leading-none">
          <span className="text-[#0F172A]">Intern</span>
          <span className="text-[#10B981]">NEXT</span>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={handleLogout}
          className="gap-1.5"
        >
          <LogOut className="h-4 w-4" strokeWidth={1.75} />
          Log out
        </Button>
      </div>
    </nav>
  );
}
