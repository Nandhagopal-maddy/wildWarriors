"use client";
import Header from "./Header/Header";
import About from "./About/About";
import { useEffect } from "react";
import { Inter } from 'next/font/google'
import Footer from "./components/Footer";
import Races from "./Races/Races";
import History from "./History/History";
import Wwinfra from "./Wwinfra/Wwinfra";
import Wwx from "./Wwx/Wwx";

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
   <Races />
   <Wwx />
   <Wwinfra />
   <History />
   <Footer />
   </div>
   </>
  );
};


