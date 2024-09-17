import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProviders from "./ThemeProviders";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "react-modern-drawer/dist/index.css";
import "react-circular-progressbar/dist/styles.css";
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
    "👋 Hello! I'm Jibon Roy, a passionate MERN stack developer, you specialize in creating web applications by utilizing MongoDB for data storage, Express.js for building the backend, React And Next.js for crafting dynamic user interfaces, and Node.js for server-side functionality. My expertise ranges from creating robust APIs and managing databases to designing intuitive user interfaces that offer exceptional user experiences. This technology combination enables me to create full-stack applications that efficiently handle data flow and user interactions, resulting in modern and feature-rich web experiences. Also, I am Working as Shopify Developer. I always look for challenges where I can utilize my skill and knowledge most and always love to work on cutting-edge technologies.",
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
