import { Outlet } from "react-router-dom";
import { AdminSidebar } from "./components/AdminSidebar";


export function AdminLayout() {
  return (
    <div className="min-h-screen bg-[#F4EFE7] flex">
      <AdminSidebar />

      <main className="flex-1 p-10">
        <Outlet />
      </main>
    </div>
  );
}