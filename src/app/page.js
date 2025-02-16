"use client";
import Header from "./Header/Header";
import About from "./About/About";
import { useEffect } from "react";
import { Inter } from 'next/font/google'
import Footer from "./components/Footer";
import History from "@/History/History";
import Wwinfra from "@/Wwinfra/Wwinfra";
import Wwx from "@/Wwx/Wwx";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
   <Wwx />
   <Wwinfra />
   <History />
   <Footer />
   </div>
   </>
  );
};


