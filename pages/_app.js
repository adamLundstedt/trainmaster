import Layout from "../layout/Layout";
import "../styles/globals.css";

import { AppWrapper } from "../my-app/context/AppContext";

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
}

export default MyApp;
