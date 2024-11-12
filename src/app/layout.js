"use client";
import localFont from "next/font/local";
import "./globals.css";
import { usePathname } from "next/navigation";
import Dashboard from "./components/dashboard/dashboard";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const noDashboardRoutes = ["/"];

  const showDashboard = !noDashboardRoutes.includes(pathname);

  return (
    <html lang="en">
      <body
        className={
          showDashboard ? "page-dashboard-container" : "page-container"
        }
      >
        {showDashboard && <Dashboard />}
        <div className={`content ${showDashboard ? "" : "full-width"}`}>
          {children}
        </div>
      </body>
    </html>
  );
}
