"use client";
// app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { config } from "@/config";
import Web3ModalProvider from "@/context"; // Assuming this is for web3 modal
import { cookieToInitialState } from "wagmi";
import { WalletProvider } from "@/components/basicComponents/Web3Context"; // Import the Web3Provider
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initState = cookieToInitialState(config);
  const pathname = usePathname();
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col justify-between items-center`}
      >
        <Header />
        <Web3ModalProvider initialState={initState}>
          <WalletProvider>{children}</WalletProvider>
        </Web3ModalProvider>
        {pathname !== "/" && <Footer />}        
        <ToastContainer />
      </body>
    </html>
  );
}
