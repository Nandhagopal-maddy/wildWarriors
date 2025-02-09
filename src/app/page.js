import Image from "next/image";
import Header from "./Header/Header";
import Footer from "./components/Footer";


function Home ({ components, pageProps }) {
  return (
   <>
   <Header />
   <>
      <components {...pageProps} />
      <Footer />
    </>
    </>
  );
};

export default Home;

