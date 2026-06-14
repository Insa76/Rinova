import { NavLink, useNavigate } from "react-router-dom";

import { authService } from "../../services/authService";

export function AdminSidebar() {
    const navigate = useNavigate();
  return (
    <aside
      className="
        w-[280px]
        bg-black
        text-white
        min-h-screen
        p-8
      "
    >
      <h1
        className="
          font-heading
          text-3xl
          mb-12
        "
      >
        RINOVA
      </h1>

      <nav className="flex flex-col gap-4">
        <NavLink
          to="/admin"
          end
          className="hover:text-gray-300"
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/properties"
          className="hover:text-gray-300"
        >
          Propiedades
        </NavLink>

        <NavLink
          to="/admin/leads"
          className="hover:text-gray-300"
        >
          Leads
        </NavLink>

        <NavLink
          to="/admin/settings"
          className="hover:text-gray-300"
        >
          Configuración
        </NavLink>
      </nav>

      <button
  onClick={() => {
    authService.logout();

    navigate(
      "/admin/login"
    );
  }}
  className="
    mt-10
    text-left
  "
>
  Cerrar sesión
</button>
    </aside>
  );
}