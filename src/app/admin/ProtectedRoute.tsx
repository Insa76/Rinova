import {
  Navigate,
} from "react-router-dom";

import { authService }
from "../services/authService";

interface Props {
  children: React.ReactNode;
}

export function ProtectedRoute({
  children,
}: Props) {
  if (
    !authService.isAuthenticated()
  ) {
    return (
      <Navigate
        to="/admin/login"
        replace
      />
    );
  }

  return <>{children}</>;
}