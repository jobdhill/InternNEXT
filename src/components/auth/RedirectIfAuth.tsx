import { Navigate } from "react-router-dom";
import { useAuth } from "../../lib/AuthContext";

export default function RedirectIfAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const { session, loading } = useAuth();
  if (loading) return null;
  if (session) return <Navigate to="/app" replace />;
  return <>{children}</>;
}
