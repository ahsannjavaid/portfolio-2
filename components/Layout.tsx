import * as React from "react";
import Nav from "./Nav";
import Head from "next/head";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Head>
        <title>Nathan Luong</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      {children}

      <Footer />
    </div>
  );
};

export default Layout;
