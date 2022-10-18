import Layout from "../layout/Layout";
import "../styles/globals.css";
import { useEffect, createContext, useState } from "react";
import AppContext from "../components/AppContext";

function MyApp({ Component, pageProps }) {
  const [nameContext, setNameContext] = useState("default");

  return (
    <AppContext.Provider value={{ nameContext, setNameContext }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;
