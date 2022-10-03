import Head from "next/head";

export default function Layout({ children }) {
  return (
    <> <div>
      <Head>
        <title>Train Masters</title>
      </Head>
      <div className="w-full h-screen">
        <div className="bg-[url('/background.jpeg')] bg-cover bg-center bg-no-repeat">
          <main className="overflow-hidden">{children}</main>
        </div>
      </div></div>

    </>
  );
}
