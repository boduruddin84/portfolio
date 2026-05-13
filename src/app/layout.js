import { Geist, Geist_Mono, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import AppWrapper from "@/components/AppWrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Boduruddin",
  description: "Building modern web applications with a focus on aesthetics, functionality and accessibility.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="relative">
        
        <AppWrapper>
          <Header />
          <main>
            {children}
          </main>
          <ToastContainer />
          <Footer />
        </AppWrapper>
      </body>
    </html>
  );
}
