import Image from 'next/image'
import React from 'react'
import Logo from "@/public/Vertical.png";
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

export default function Sidebar() {
  return (
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
  )
}