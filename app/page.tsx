'use client'

import Image from 'next/image'
import Script from 'next/script'
import React from 'react';
import ReactHlsPlayer from "@ducanh2912/react-hls-player";
import Head from 'next/head';
//getData()

export default async function Home() {
  return (
    <>
      <Head>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <h1>
            Hi
          </h1>
          <ReactHlsPlayer
            src="http://103.74.101.152:8000/live/a22ae7bbf825442ca0017fef01b77178/index.m3u8"
            autoPlay={false}
            controls={true}
            width="100%"
            height="auto"
          />
        </div>
      </main>
    </>

  )
}
