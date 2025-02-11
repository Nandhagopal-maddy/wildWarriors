import Image from "next/image";
import Header from "./Header/Header";
import Footer from "./components/Footer";
import Wwinfra from "@/Wwinfra/Wwinfra";

function Home ({ components, pageProps }) {
  return (
   <>
   <Header />
   <Wwinfra />
   <>
      <components {...pageProps} />
      <Footer />
    </>
    </>
  );
};

export default Home;

