
'use client'

import React, { useEffect, useRef } from "react";
import { SiteFooter } from "./site-footer";
import Image from 'next/image'

export default function VideoHero() {
  const videoEl = useRef<HTMLVideoElement | null>(null);

  const attemptPlay = () => {
    videoEl.current &&
      videoEl.current.play().catch((error: any) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className="relative w-full h-[700px] md:h-full overflow-hidden">
      <video
        className="w-full h-full object-cover inset-0"
        playsInline
        autoPlay
        loop
        muted
        src="/bikes.mp4"
        ref={videoEl}
      />
      <div className="absolute scale-[60%] md:scale-75 lg:scale-[100%] top-32 md:top-40 left-0 w-full h-[50%] flex items-center justify-center flex-col md:flex-row">
        <a
          href="/"
          className=" bg-white border-2 border-black hover:scale-110 dark:text-gray-300 text-3xl font-medium py-5 px-20 w-80 h-20  order-2 md:order-1  m-5 dark:bg-black text-center place-content-center md:hidden"
        >
          Motorcycles
        </a>
        <Image
          src="/logogentsgarage.png"
          alt="crest"
          width="400"
          height="400"
          className="dark:invert-0 invert order-1 md:order-2 ">


        </Image>
        <div className="">

        </div>
        <Image
          src="/gentlemansgarage.png"
          alt="crest"
          width="400"
          height="400"
          className="dark:invert-0 invert order-1 md:order-2 ">


        </Image>


        <a
          href="/"
          className=" bg-white border-2 border-black  hover:scale-110 dark:text-gray-300 text-3xl font-medium py-5 px-20 w-80 h-20  order-3 m-5 dark:bg-black text-center place-content-center md:hidden"
        >
          Accessories
        </a>
        

      </div>
    </div>
  );
}
