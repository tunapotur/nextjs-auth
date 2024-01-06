import { Inter } from "next/font/google";
import "./globals.css";

//Providers
import { AuthProvider } from "@/providers/AuthProviders";

// Components
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
        <AuthProvider>
          <TopNav />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
