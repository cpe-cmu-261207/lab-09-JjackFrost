import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="d-flex justify-content-center gap-100">
      <div style={{ paddingTop: "10px" }}>
        <div className="hstack gap-5">
          <a href="/">Home </a>
          <a href="/Exp"> Experience </a>
          <a href="/Cont">Contact</a>
          <a href="/lab-07">Lab-07</a>
        </div>
      </div>
    </div>
  );
}
