import { MobileAppContainer } from "../../container";
import Head from "next/head";
import React from "react";

export const metadata = {
  metadataBase: new URL("http://localhost:3000/"),
  title: "Mobile App - Kensink",
  description: "Learn more about our company and what we do.",
  keywords: ["Mobile App", "kensink"],
  openGraph: {
    title: "Mobile App - Kensink",
    description: "Learn more about our company and what we do.",
    url: "#",
    images: [
      {
        url: "#",
        width: 800,
        height: 600,
        alt: "Mobile App - Kensink",
      },
    ],
  },
};

export default function MobileApp() {
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
