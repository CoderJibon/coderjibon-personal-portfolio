import { ThemeProvider } from "next-themes";

export default function ThemeProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="  dark:text-black  text-white bg-[#191923] dark:bg-[#EDEFF3] min-h-screen select-none transition-colors duration-300 ">
        {children}
      </div>
    </ThemeProvider>
  );
}
