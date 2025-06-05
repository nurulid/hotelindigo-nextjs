"use client";

import { CameraIcon, PauseIcon, PlayIcon, Volume1Icon, VolumeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const HeroVideo = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isAudio, setIsAudio] = useState(false);

  const handlePlayPause = () => {
    setIsPaused(!isPaused);
    const videoElement = document.querySelector("video");
    if (videoElement) {
      if (isPaused) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    }
  };
  const handleMuteUnmute = () => {
    setIsAudio(!isAudio);
    const videoElement = document.querySelector("video");
    if (videoElement) {
      videoElement.muted = isAudio;
    }
  };
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 z-10 pointer-events-none"></div>
      <video
        src="/videos/intro-video-low.webm"
        className="absolute top-0 h-[70vh] sm:h-screen w-full object-cover"
        poster="/images/thumbnail-vid.png"
        playsInline
        autoPlay
        loop
        muted
        preload="auto"
      >
        <source src="/videos/intro-video-low.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute left-14 right-14 bottom-7 flex items-center justify-between z-20 space-y-5">
        <div className="text-white flex items-center gap-5">
          <button className="cursor-pointer hover:opacity-70 transition-all duration-300">
            <CameraIcon size={32} />
          </button>
          <button onClick={handlePlayPause} className="cursor-pointer hover:opacity-70 transition-all duration-300">
            {isPaused ? (
              <PlayIcon size={32} />
            ) : (
              <PauseIcon size={32} />
            )}
          </button>
          <button onClick={handleMuteUnmute} className="cursor-pointer hover:opacity-70 transition-all duration-300">
            {isAudio ? (
              <Volume1Icon size={32} />
            ) : (
              <VolumeIcon size={32} />
            )}
          </button>
        </div>

        <Link href="/" className="hover:opacity-70 transition-all duration-300">
          <Image
            src="/icons/360.png"
            width={60}
            height={60}
            alt=""
            className="w-10 h-auto"
          />
        </Link>
      </div>
    </section>
  );
};
