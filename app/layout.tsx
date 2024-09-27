import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProviders from "./ThemeProviders";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "react-modern-drawer/dist/index.css";
import "react-circular-progressbar/dist/styles.css";
import "react-loading-skeleton/dist/skeleton.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Define Helvetica font family
const Helvetica = localFont({
  src: [
    {
      path: "./fonts/Helvetica.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/helvetica-light.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Helvetica-Bold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-helvetica", // A custom CSS variable
});
export const metadata: Metadata = {
  title: "CoderJibon",
  description:
    "👋 Hi, I'm Jibon Roy, a passionate and results-driven Full-Stack MERN Developer with expertise in creating feature-rich, scalable web applications. I specialize in building dynamic and intuitive user interfaces using React and Next.js, backed by robust server-side logic powered by Node.js and Express.js, Prisma and managing data with MongoDB, and MySQL.I have extensive experience across the full development stack, ensuring seamless integration between front-end and back-end systems. interactive UI or engineering high-performance API with technology combination enables me to build full-stack applications that efficiently handle data flow and user interactions, resulting in modern and feature-rich web experiences.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Helvetica.variable} font-helvetica  `}>
        <ThemeProviders>
          {/* Header area */}
          <Header />
          {/* section area */}
          <main className="pl-[5px] pr-[5px] md:pr-[15px] md:pl-[15px]">
            {children}
          </main>
          {/* Footer area */}
          <Footer />
        </ThemeProviders>
      </body>
    </html>
  );
}
