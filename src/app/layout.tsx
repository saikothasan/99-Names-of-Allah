import "./globals.css"
import { Inter, Amiri } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type React from "react"
import Sidebar from "@/components/Sidebar"
import { ModeToggle } from "@/components/ModeToggle"

const inter = Inter({ subsets: ["latin"] })
const amiri = Amiri({ subsets: ["arabic"], weight: ["400", "700"] })

export const metadata = {
  title: "99 Names of Allah | Asma ul Husna",
  description:
    "Explore the 99 beautiful names of Allah (Asma ul Husna) in Arabic, Bangla, and English with meanings and benefits.",
  keywords: "Allah, 99 names, Asma ul Husna, Islamic, Arabic, Bangla, English",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-islamic-background text-islamic-text`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <header className="bg-islamic-primary text-white p-4 flex justify-between items-center">
                <h1 className={`text-2xl font-bold ${amiri.className}`}>أسماء الله الحسنى</h1>
                <ModeToggle />
              </header>
              <main className="flex-1 p-4 md:p-8 overflow-auto">
                <div className="max-w-7xl mx-auto">{children}</div>
              </main>
              <footer className="bg-islamic-primary text-white p-4 text-center">
                <p>&copy; {new Date().getFullYear()} 99 Names of Allah. All rights reserved.</p>
              </footer>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

