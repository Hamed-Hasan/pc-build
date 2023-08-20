import Footer from "@/components/UI/Footer";
import Navbar from "@/components/UI/Navbar";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <Navbar />
        <div>
          <Component {...pageProps} />
          <Toaster />
        </div>
        <Footer />
      </SessionProvider>
    </Provider>
  );
}
