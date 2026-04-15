"use client";

import Image from "next/image";
import Logo from "./../public/Vertical.png";
import Link from "next/link";
import Style from "./styles.module.css";

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "#F2ECE5", minHeight: "100vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src={Logo} alt="Logo" />
      </div>

      <div className="d-grid gap-2 col-2 mx-auto">
         <a href="/registration" className={`btn btn-primary ${Style.buttonlogin}`} > 
            registration
         </a>
        <a href="/login" className={`btn btn-primary ${Style.buttonlogin}`}  > 
            login
         </a>
      </div>
    </div>
  );
}
