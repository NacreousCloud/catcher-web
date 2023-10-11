import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen">
      <Header />
      <div className="py-16 h-screen">
        <Component {...pageProps} />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default MyApp;
