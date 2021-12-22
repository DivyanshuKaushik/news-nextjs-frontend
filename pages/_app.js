import "tailwindcss/tailwind.css";
import "../styles/global.css";
import Layout from "../Layout/Layout";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { ContextWrapper } from "../store/AppContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class">
        {/* <Layout> */}
        <ContextWrapper>
          <Component {...pageProps} />
        </ContextWrapper>
        {/* </Layout> */}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
