import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/TopBar";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <Sidebar />
      <div style={{ width: "100%", backgroundColor: "#F5F5F5" }}>
        <Topbar />
        <main>{children}</main>
      </div>
    </div>
  );
}
