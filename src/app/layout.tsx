import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBarWeb from "../components/nav-bar/web/nav-bar-web";
import classNames from "classnames";
import { Montserrat } from "next/font/google";
import "../styles/index.scss";
import styles from "./layout.module.scss";

const montserrat = Montserrat({ subsets: ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Besa",
  description: "Besa marketing solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        {/* <div className={classNames(styles.mobileView, styles.cs_sticky_nav)}>
          <NavBarMobile />
        </div> */}

        <div className={classNames(styles.desktopView, styles.cs_sticky_nav)}>
          <NavBarWeb />
        </div>
        {children}
        {/* <div className={classNames(styles.footer_container)}>
          <Footer />
        </div> */}
      </body>
    </html>
  );
}
