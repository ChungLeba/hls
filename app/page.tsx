'use client'

import Image from 'next/image'
import Script from 'next/script'
import React from 'react';
import ReactHlsPlayer from "@ducanh2912/react-hls-player";

//getData()

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>
          Hi
        </h1>
        <ReactHlsPlayer
          src="http://103.74.101.152:8000/live/4a6e1ed5d7224853af8e2b9a1464c164/index.m3u8"
          autoPlay={false}
          controls={true}
          width="100%"
          height="auto"
        />
      </div>
    </main>
  )
}
