import {
  Routes,
  Route,
} from "react-router-dom";

import { HomePage } from "./routes/HomePage";

import { RealEstateView } from "./views/RealEstateView";
import { PropertyManagementView } from "./views/PropertyManagementView";
import { RentaView } from "./views/RentaView";
import { ConciergeView } from "./views/ConciergeView";

import { AdminLayout } from "./admin/AdminLayout";
import { DashboardView } from "./admin/DashboardView";
import { PropertiesView } from "./admin/PropertiesView";
import { LeadsView } from "./admin/LeadsView";
import { SettingsView } from "./admin/SettingsView";

import { LoginView } from "./admin/LoginView";
import { ProtectedRoute } from "./admin/ProtectedRoute";

export default function App() {
  return (
    <Routes>

      {/* SITIO PÚBLICO */}

      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/real-estate"
        element={<RealEstateView />}
      />

      <Route
        path="/management"
        element={<PropertyManagementView />}
      />

      <Route
        path="/renta"
        element={<RentaView />}
      />

      <Route
        path="/concierge"
        element={<ConciergeView />}
      />

      {/* LOGIN ADMIN */}

      <Route
        path="/admin/login"
        element={<LoginView />}
      />

      {/* ADMIN PROTEGIDO */}

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route
          index
          element={<DashboardView />}
        />

        <Route
          path="properties"
          element={<PropertiesView />}
        />

        <Route
          path="leads"
          element={<LeadsView />}
        />

        <Route
          path="settings"
          element={<SettingsView />}
        />
      </Route>

    </Routes>
  );
}