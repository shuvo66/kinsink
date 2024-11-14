import { LlmContainer } from "../../container";
import Head from "next/head";
import React from "react";

export default function Llm() {
  return (
    <>
      <Head>
        <title>LLM | kensink</title>
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
