import "@/app/globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Menu } from "@/components/menu/menu";
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "@/components/nav/nav";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased w-screen",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Nav></Nav>

          <main className="h-full w-full">{children}</main>

          <Menu />
        </ThemeProvider>
      </body>
    </html>
  );
}
