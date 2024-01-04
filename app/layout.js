import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/TopNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nextjs Authentication",
  description: "This project is for nextjs authentication",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
