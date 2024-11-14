import { MobileAppContainer } from "../../container";
import Head from "next/head";
import React from "react";

export default function MobileApp() {
  console.log("test");
  return (
    <>
      <Head>
        <title>Mobile - app | kensink</title>
        <meta
          name="kensink - mobile app"
          content="Learn more about our company and values."
        />
        <meta name="kensink" content="mobile, company, values" />
      </Head>
      <MobileAppContainer />
    </>
  );
}
