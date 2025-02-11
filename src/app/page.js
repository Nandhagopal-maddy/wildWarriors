"use client";
import Header from "./Header/Header";
import About from "./About/About";
import { useEffect } from "react";
import { Inter } from 'next/font/google'
import Footer from "./components/Footer";

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
   <>
   <div className={inter.className}>
   <Header />
   <About />
   <Footer />
   </div>
   </>
  );
};


