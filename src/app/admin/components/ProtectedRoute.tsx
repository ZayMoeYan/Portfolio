import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { supabase } from "../../../lib/supabase";
import type { Session } from "@supabase/supabase-js";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null | undefined>(undefined);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: listener } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => listener.subscription.unsubscribe();
  }, []);

  if (session === undefined) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#0046FF] border-t-transparent" />
      </div>
    );
  }

  if (!session) return <Navigate to="/admin/login" replace />;

  return <>{children}</>;
}
