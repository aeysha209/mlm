"use client";

import { Bell, CircleUser } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/lib/auth/store";

   {/* ===============tobar============ */}
 const [collapsed, setCollapsed] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [language, setLanguage] = useState<"bn" | "en">("bn");
        <div className="d-flex justify-content-between text-white p-2  bg-[#3E9582]">
          <h3>মসজিদ ভিত্তিক শিশু ও গণশিক্ষা কার্যক্রম</h3>
          <div className="flex items-center gap-4">
            {/* Language Switch */}
            <div className="flex items-center gap-3">
              <div className="relative flex items-center w-28 h-7 bg-gray-500 rounded-full p-1">
                {/* ========Sliding Background ========*/}
                <div
                  className={`absolute top-1 left-1 h-5 w-[48%] bg-[#e6f4f1] rounded-full transition-all duration-300 ${
                    language === "en" ? "translate-x-full" : "translate-x-0"
                  }`}
                />

                {/* =========BN Button =============*/}
                <button
                  onClick={() => setLanguage("bn")}
                  className={`relative z-10 flex-1 text-xs font-medium ${
                    language === "bn" ? "text-black" : "text-white"
                  }`}
                >
                  বাংলা
                </button>

                {/* =========EN Button =============*/}
                <button
                  onClick={() => setLanguage("en")}
                  className={`relative z-10 flex-1 text-xs font-medium ${
                    language === "en" ? "text-black" : "text-white"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            {/* =========Notification Bell =============*/}
            <div className="relative cursor-pointer">
              <Bell size={24} />
              <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-green-400" />
            </div>
            <ul className="nav-item dropdown mb-0">
              <a
                className="nav-link dropdown-toggle nav-link text-hite d-flex gap-2 items-center"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <CircleUser size={20} /> স্বাগতম
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    প্রোফাইল
                  </a>
                </li>
                <li
                  className="dropdown-item cursor-pointer"
                  onClick={handleLogout}
                >
                  লগ আউট
                </li>
              </ul>
            </ul>
          </div>
        </div>
       // authActions.ts
export function handleLogout() {
  // function implementation
}
        {/*========== tobar end===========*/}