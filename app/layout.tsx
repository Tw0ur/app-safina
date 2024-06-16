import "@/app/globals.css";
import {Inter as FontSans} from "next/font/google";
import {cn} from "@/lib/utils";
import {Menu} from "@/components/menu/menu";
import {ThemeProvider} from "@/components/theme-provider";


const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={cn(
                "h-full bg-background font-sans antialiased w-screen overflow-x-hidden",
                fontSans.variable
            )}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
        >
            <main className='h-full w-full'>
                {children}
            </main>
            <Menu/>
        </ThemeProvider>
        </body>
        </html>
    );
}
