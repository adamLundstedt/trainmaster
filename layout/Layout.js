import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <Head>
          <title>Train Masters</title>
        </Head>
        <div className="w-full h-screen">
          <main className="overflow-hidden">{children}</main>
        </div>
      </div>
    </>
  );
}
