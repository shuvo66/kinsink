import { LlmContainer } from "../../container";
import Head from "next/head";
import React from "react";

export const metadata = {
  metadataBase: new URL("http://localhost:3000/"),
  title: "LLM - Kensink",
  description: "Learn more about our company and what we do.",
  keywords: ["LLM", "Kensink"],
  openGraph: {
    title: "LLM - Kensink",
    description: "Learn more about our company and what we do.",
    url: "#",
    images: [
      {
        url: "#",
        width: 800,
        height: 600,
        alt: "LLM - Kensink",
      },
    ],
  },
};

export default function Llm() {
  return (
    <>
      <Head>
        <title>LLM | kensink</title>
        <meta property="og:title" content="LLM" key="title" />
        <meta
          name="kensink - mobile app"
          content="Learn more about our company and values."
        />
        <meta name="kensink" content="mobile, company, values" />
      </Head>
      <LlmContainer />
    </>
  );
}
