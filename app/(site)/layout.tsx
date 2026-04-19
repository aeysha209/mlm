import React from "react";
import Link from "next/link";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#3E9582", padding: "10px 20px" }}
      >
        <div className="container-fluid">
          <Link href="/" className="navbar-brand text-white fw-bold">
            Ayesha Express
          </Link>
          <div className="d-flex gap-2">
            <Link href="/" className="btn btn-sm btn-light">
              Home
            </Link>
            <Link href="/registration" className="btn btn-sm btn-light">
              Registration
            </Link>
            <Link href="/login" className="btn btn-sm btn-light">
              Login
            </Link>
          </div>
        </div>
      </nav>
      {children}
    </main>
  );
}
