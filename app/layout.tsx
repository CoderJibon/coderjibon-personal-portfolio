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
import CursorPointer from "@/components/CursorPointer/CursorPointer";

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
    "👋 Hi, I'm Jibon Roy, a Full-Stack Developer specializing in MERN stack and building scalable, feature-rich applications. Check out my work!",
  openGraph: {
    title: "CoderJibon - Full-Stack MERN Developer",
    description:
      "👋 Hi, I'm Jibon Roy, a Full-Stack Developer specializing in MERN stack and building scalable, feature-rich applications. Check out my work!",
    url: "https://coderjibon.web.app",
    type: "website",
    images: [
      {
        url: "https://coderjibon.web.app/preview.jpg", // Ensure this is the correct path to your image
        width: 1200,
        height: 630,
        alt: "CoderJibon Preview Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CoderJibon - Full-Stack MERN Developer",
    description:
      "👋 Hi, I'm Jibon Roy, a Full-Stack Developer specializing in MERN stack and building scalable, feature-rich applications. Check out my work!",
    images: ["https://coderjibon.web.app/preview-image.jpg"], // Ensure this is the correct path to your image
  },
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
          <div className="hidden md:block ">
            <CursorPointer />
          </div>
        </ThemeProviders>
      </body>
    </html>
  );
}
