import { useRouter } from "next/router";
import { ReactNode } from "react";
import { UserAuth } from "../context/AuthContext";

interface ProtectedRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();
  const { user } = UserAuth();

  if (!user) {
    return router.push("/");
  } else {
    return children;
  }
}
