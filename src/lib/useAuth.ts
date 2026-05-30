import { createContext, useContext } from "react";
import type { Session } from "@supabase/supabase-js";

export type AuthCtx = { session: Session | null; loading: boolean };

export const Ctx = createContext<AuthCtx>({ session: null, loading: true });

export const useAuth = () => useContext(Ctx);
