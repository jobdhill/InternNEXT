import { Navigate } from "react-router-dom";
import { useAuth } from "../../lib/useAuth";


export default function RequireAuth({ children }: { children: React.ReactNode }) {
    const { session, loading } = useAuth();
    if (loading) return null; 
    if (!session) return <Navigate to="/login" replace />;
    return <>{children}</>;
  }