"use client";
import Logo from "@/public/Vertical.png";
import Image from "next/image";
import React, { useState, ReactNode } from "react";
import { BiBall } from "react-icons/bi";
import {
  Bell,
  CalendarCheck,
  CircleDollarSign,
  ClipboardList,
  FileBarChart,
  History,
  TrendingUp,
  CircleUser,
  LucideMenu,
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  MapPin,
  Home,
  UserCog,
  UserCheck,
  GraduationCap,
  LogOut,
  Landmark,
  Eye,
  MonitorPlay,
  UserSquare2,
  Building2,
  Layers,
  Wallet,
} from "lucide-react";
import PieChartWithCustomizedLabel from "../components/Pichart";
import TinyBarChart from "../components/BarChart";
import StackedBarChart from "../components/BarChart";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

//define  the shape of out menue//

type CardProps = {
  title: string;
  value: string;
};

type MenuTitle =
  | "Dashboard"
  | "All Employees"
  | "CircleUser"
  | "Documents"
  | "Attendance"
  | "Field Force"
  | "Leave"
  | "Payroll"
  | "PMS"
  | "Reports"
  | "Users"
  | "Notifications"
  | "Settings"
  | "Audit Logs";

interface DashboardProps {
  size: number;
}

type MenuItemProps = {
  icon: React.ReactNode;
  text: string;
  href: string;
  label: string;
  active: boolean;
  size: number;
};

export default function Dashboard() {
  const Dashboard: React.FC<DashboardProps> = ({ size }) => {
    // component implementation
  };
  const [collapsed, setCollapsed] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [language, setLanguage] = useState<"bn" | "en">("bn");

  {/==========Logout=============*/}
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    alert("Logout Successfull");
    router.push("/login");
  };
{/==========Logout End=============*/}
  return (
    <div className="w-full d-flex">
      {/* side bar  */}
      <div
        className="d-flex flex-column p-3 text-white bg-green-400 sidebar-bg"
        style={{ width: "250px", height: "100vh", backgroundColor: "#3E9582" }}
      >
        {/* Title */}
        <Image src={Logo} alt="logo" />

        {/* Menu */}
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a
              href="/dashboard"
              className="nav-link text-black d-flex gap-2 sidebar_nav_link mb-1"
            >
              <Home size={20} />
              ড্যাশবোর্ড
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/users"
              className="nav-link text-balack d-flex gap-2 sidebar_nav_link mb-1"
            >
              <UserCog size={20} />
              কর্মকর্তা ব্যবস্থাপনা
            </a>
          </li>

          <li className="nav-item">
            <a
              href="/UserCog"
              className="nav-link text-black d-flex gap-2 sidebar_nav_link mb-1"
            >
              <UserCog size={20} />
              ব্যবহারকারী ব্যবস্থাপনা
            </a>
          </li>

          <li className="nav-item">
            <a
              href="/Network"
              className="nav-link text-black d-flex gap-2 sidebar_nav_link mb-1"
            >
              <Layers size={20} />
              কেন্দ্র ব্যবস্থাপনা
            </a>
          </li>

          <li className="nav-item">
            <a
              href="/GraduationCap"
              className="nav-link text-black d-flex gap-2 sidebar_nav_link mb-1"
            >
              <GraduationCap size={20} />
              শিক্ষার্থী ব্যবস্থাপনা
            </a>
          </li>

          <li className="nav-item">
            <a
              href="/leave"
              className="nav-link text-black d-flex gap-2 sidebar_nav_link mb-1"
            >
              <UserSquare2 size={20} />
              শিক্ষক ব্যবস্থাপনা
            </a>
          </li>

          <li className="nav-item">
            <a
              href="/"
              className="nav-link text-black d-flex gap-2 sidebar_nav_link"
            >
              <Eye size={20} />
              পরিদর্শন ব্যবস্থাপনা"
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/pms"
              className="nav-link text-black d-flex gap-2 sidebar_nav_link"
            >
              <MonitorPlay size={20} />
              পর্যবেক্ষণ ব্যবস্থাপনা
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/reports"
              className="nav-link text-black d-flex gap-2 sidebar_nav_link"
            >
              <Landmark size={20} />
              অর্থ ব্যবস্থাপনা
            </a>
          </li>

          <li className="nav-item">
            <a
              href="/users"
              className="nav-link text-black d-flex gap-2 sidebar_nav_link"
            >
              <Settings size={20} />
              কনফিগারেশন ব্যবস্থাপনা
            </a>
          </li>

          <li className="nav-item">
            <a
              href="/reports"
              className="nav-link text-black d-flex gap-2 sidebar_nav_link"
            >
              <FileBarChart size={20} />
              প্রতিবেদন
            </a>
          </li>

          <li className="nav-item">
            <a
              href="/settings"
              className="nav-link text-black d-flex gap-2 sidebar_nav_link"
            >
              <Settings size={20} />
              সেটিংস
            </a>
          </li>
        </ul>
      </div>
      {/* main content  */}

      <div style={{ width: "100%", backgroundColor: "#F5F5F5" }}>
        {/* ===============tobar============ */}

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
        {/*========== tobar end===========*/}

        {/* ===============main content/section============ */}
        <section>
          <div className="row">
            <div className="col-md-8">
              <div className="w-full m-2 bg-white p-5 rounded-md shadow-md">
                <div>
                  <p className="text-lg font-medium text-[#333333]">এক পলকে</p>
                </div>

                <div className="d-flex w-full justify-content-between mt-4 gap-4">
                  <div className="w-full">
                    <p className="text-sm">শিক্ষা কেন্দ্রের তথ্য</p>
                    <div className="d-flex justify-content-between g-2 w-full p-2 bg-[#E1F5F0] rounded-lg">
                      <div>
                        <p className="text-xs d-grid gap-2">
                          <span className="text-#000000">মোট কেন্দ্র </span>
                          <span className="text-[#066E38]">৬৮,২০৫</span>
                        </p>
                      </div>
                      <div>
                        <p className="text-xs">
                          <span className="text-#000000">
                            সক্রিয় কেন্দ্র:{" "}
                          </span>
                          <span className="text-[#066E38]">৬৮,২০৫</span>
                        </p>
                        <p className="text-xs">
                          <span className="text-#000000">খালি কেন্দ্র: </span>
                          <span className="text-[#066E38]">২০৫</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm">রিসোর্স সেন্টার তথ্য</p>
                    <div className="d-flex justify-content-between g-2 w-full p-2 bg-[#E1F5F0] rounded-lg">
                      <div>
                        <p className="text-xs d-grid gap-2">
                          <span className="text-#000000">মোট কেন্দ্র </span>
                          <span className="text-[#066E38]">৬৮,২০৫</span>
                        </p>
                      </div>
                      <div>
                        <p className="text-xs">
                          <span className="text-#000000">
                            সক্রিয় কেন্দ্র:{" "}
                          </span>
                          <span className="text-[#066E38]">৬৮,২০৫</span>
                        </p>
                        <p className="text-xs">
                          <span className="text-#000000">খালি কেন্দ্র: </span>
                          <span className="text-[#066E38]">৬৮,২০৫</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex w-full justify-content-between mt-4 gap-4">
                  <div className="w-full">
                    <p className="text-sm">শিক্ষা কেন্দ্রের তথ্য</p>
                    <div className="w-full p-2 bg-[#E1F5F0] rounded-lg">
                      <div>
                        <p className="text-xs">
                          <span className="text-#000000">মোট শিক্ষার্থী: </span>
                          <span className="text-[#066E38]">৬৮,০০০</span>
                        </p>

                        <p className="text-xs">
                          <span className="text-#000000">প্রাক-প্রাথমিক: </span>
                          <span className="text-[#066E38]">৬০,০০০</span>
                        </p>

                        <p className="text-xs">
                          <span className="text-#000000">
                            সহজ কোরআন শিক্ষা:{" "}
                          </span>
                          <span className="text-[#066E38]">৮,০০০</span>
                        </p>
                        <p className="text-xs">
                          <span className="text-#000000">
                            সহজ কোরআন শিক্ষা (বয়স্ক):{" "}
                          </span>
                          <span className="text-[#066E38]">৬০০</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm">চলতি বছরে ভর্তির তথ্য</p>
                    <div className="w-full p-2 bg-[#E1F5F0] rounded-lg">
                      <div>
                        <p className="text-xs">
                          <span className="text-#000000">মোট শিক্ষার্থী: </span>
                          <span className="text-[#066E38]">৬৮,২০৫</span>
                        </p>

                        <p className="text-xs">
                          <span className="text-#000000">প্রাক-প্রাথমিক: </span>
                          <span className="text-[#066E38]">৬৮,২০৫</span>
                        </p>

                        <p className="text-xs">
                          <span className="text-#000000">
                            সহজ কোরআন শিক্ষা:{" "}
                          </span>
                          <span className="text-[#066E38]">৬৮,২০৫</span>
                        </p>
                        <p className="text-xs">
                          <span className="text-#000000">
                            সহজ কোরআন শিক্ষা (বয়স্ক):{" "}
                          </span>
                          <span className="text-[#066E38]">৬৮,২০৫</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm">শিক্ষকদের তথ্য</p>
                    <div className="w-full p-2 bg-[#E1F5F0] rounded-lg">
                      <div>
                        <p className="text-xs">
                          <span className="text-#000000">মোট শিক্ষক: </span>
                          <span className="text-[#066E38]">৬৮,২০৫</span>
                        </p>
                        <p className="text-xs">
                          <span className="text-#000000">প্রাক-প্রাথমিক: </span>
                          <span className="text-[#066E38]">৬০,০০০</span>
                        </p>

                        <p className="text-xs">
                          <span className="text-#000000">
                            সহজ কোরআন শিক্ষা:{" "}
                          </span>
                          <span className="text-[#066E38]">৮,০০০</span>
                        </p>
                        <p className="text-xs">
                          <span className="text-#000000">
                            সহজ কোরআন শিক্ষা (বয়স্ক):{" "}
                          </span>
                          <span className="text-[#066E38]">৬০০</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="w-full m-2 bg-gray-50 rounded-xl">
                <div>
                  <div className="card">
                    <div className="card-body">
                      <h6>শিক্ষা কেন্দ্রের ধরন</h6>
                      <div className="">
                        <PieChartWithCustomizedLabel />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="row">
          <div className="col-md-5">
            <div className="w-full mt-4 p-2 bg-gray-50 rounded-xl">
              <div className="card">
                <div className="card-body">
                  <h6>বার্ষিক শিক্ষার্থী ভর্তি তথ্য</h6>

                  <StackedBarChart />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="w-full mt-4 bg-gray-50 rounded-xl">
              <div className="card">
                <div className="card-body">
                  <h6>আজকের ভিজিট</h6>
                  <div className="d-flex justify-content-end mt-2 mb-4 gap-5">
                    <button
                      className="btn"
                      style={{ backgroundColor: "#35836F", color: "#fff" }}
                    >
                      সব দেখুন
                    </button>
                  </div>

                  <div className="row-md-6">
                    <table className="table">
                      <thead>
                        <tr className="table_head">
                          <th scope="col">ক্র/নং</th>
                          <th scope="col">তারিখ</th>
                          <th scope="col">কেন্দ্র কোড</th>
                          <th scope="col">কেন্দ্রের নাম</th>

                          <th scope="col">বিভাগ</th>
                          <th scope="col">জেলা</th>
                          <th scope="col">পরিদর্শনকারী</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="table_head">
                          <th scope="col">01</th>

                          <td>০১/০৮/২০২২</td>
                          <td>১০১৩৫৪৫৫</td>
                          <td>এ বি সি সেন্টার</td>
                          <td>ঢাকা</td>
                          <td>কুমিল্লা</td>
                          <td>সোলাইমান</td>
                        </tr>
                        <tr className="table_head">
                          <th scope="col">02</th>

                          <td>০১/০৮/২০২২</td>
                          <td>১০১৩৫৪৫৫</td>
                          <td>এ বি সি সেন্টার</td>
                          <td>ঢাকা</td>
                          <td>কুমিল্লা</td>
                          <td>সোলাইমান</td>
                        </tr>
                        <tr className="table_head">
                          <th scope="col">03</th>

                          <td>০১/০৮/২০২২</td>
                          <td>১০১৩৫৪৫৫</td>
                          <td>এ বি সি সেন্টার</td>
                          <td>ঢাকা</td>
                          <td>কুমিল্লা</td>
                          <td>সোলাইমান</td>
                        </tr>
                        <tr className="table_head">
                          <th scope="col">04</th>

                          <td>০১/০৮/২০২২</td>
                          <td>১০১৩৫৪৫৫</td>
                          <td>এ বি সি সেন্টার</td>
                          <td>ঢাকা</td>
                          <td>কুমিল্লা</td>
                          <td>সোলাইমান</td>
                        </tr>
                        <tr className="table_head">
                          <th scope="col">05</th>

                          <td>০১/০৮/২০২২</td>
                          <td>১০১৩৫৪৫৫</td>
                          <td>এ বি সি সেন্টার</td>
                          <td>ঢাকা</td>
                          <td>কুমিল্লা</td>
                          <td>সোলাইমান</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
