import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

import 'get-starknet-core';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {


  const [providerUrl, setProviderUrl] = useState(null);

  useEffect(() => {
    const poll = async () => {
      console.log(window.starknet_metamask);
      if (window.starknet_metamask) {
        await window.starknet_metamask.enable()
        console.log(window.starknet_metamask.provider.channel.nodeUrl);
        setProviderUrl(window.starknet_metamask.provider.channel.nodeUrl);
      } else {
        poll();
      }
    }
    setTimeout(poll, 500);

  }, []);

  return (
    <>
      <h1>
        metamask bug regen
      </h1>
      <br>
      </br>
      providerUrl: {providerUrl ? <h2 style={{
        color: 'red'
      }}> {providerUrl}</h2> : <h2>loading...</h2>}
    </>
  );
}
