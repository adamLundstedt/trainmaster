import Navbar from "../components/Navbar";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <div className="content">
        <Head>
          <title>Train Masters</title>
        </Head>
        <Navbar />
        <main className="overflow-hidden">{children}</main>
      </div>
    </>
  );
}
