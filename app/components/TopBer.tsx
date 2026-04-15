"use client";

import { Bell, CircleUser } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Topbar() {
  const [language, setLanguage] = useState<"bn" | "en">("bn");
  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear();
    router.push("/login");
  };

  return (
    <div className="d-flex justify-content-between p-2 text-white" style={{ backgroundColor: "#3E9582" }}>
      
      <h5>মসজিদ ভিত্তিক শিশু শিক্ষা</h5>

      <div className="d-flex align-items-center gap-3">

        {/* Language Toggle */}
        <button onClick={() => setLanguage("bn")}>BN</button>
        <button onClick={() => setLanguage("en")}>EN</button>

        {/* Notification */}
        <Bell />

        {/* Profile Dropdown */}
        <div className="dropdown">
          <button className="btn text-white dropdown-toggle" data-bs-toggle="dropdown">
            <CircleUser /> User
          </button>

          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
          </ul>
        </div>

      </div>
    </div>
  );
}