import Head from "next/head";
import { HomeContainer } from "./container";
import React from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Homepage - Kensink</title>
        <meta
          name="description"
          content="Welcome to My Site, the best place for ..."
        />
      </Head>
      <HomeContainer />
    </div>
  );
}
