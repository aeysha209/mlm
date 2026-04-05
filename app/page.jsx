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
         <Link href="/registration" className={`btn btn-primary ${Style.buttonlogin}`}  // <-- use backticks
         
         data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample" > 
            registration
         </Link>
        <Link href="/login" className={`btn btn-primary ${Style.buttonlogin}`}  // <-- use backticks
         
         data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample" > 
            login
         </Link>
      </div>
    </div>
  );
}
