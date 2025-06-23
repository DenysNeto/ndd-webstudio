"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavC = (props) => {
  const pathName = usePathname();
  let isShown = pathName != "/portfolio_viewer";
  return (
    isShown && (
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          paddingLeft: "0 !important",
          padding: 0,
          margin: 0,
        }}
        id="header">
        <nav
          className="style1"
          style={{
            width: "100%",
            padding: 0,
            margin: 0,
            display: "flex",
            background: "#5A1BAF",
            justifyContent: "center",
          }}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/development">Development</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  );
};

export default MobileNavC;
