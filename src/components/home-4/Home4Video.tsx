"use client";

import {
  Loader2Icon,
  MaximizeIcon,
  PauseIcon,
  PlayFilledIcon,
  VolumeIcon,
  VolumeMuteIcon,
} from "@/icons";
import { home4VideoThumbImg } from "@/images";
import { useEffect, useRef, useState } from "react";

const Home4Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const home4Video =
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  const togglePlay = async () => {
    if (!videoRef.current) return;

    setIsLoading(true);

    try {
      if (isPlaying) {
        await videoRef.current.pause();
        setIsPlaying(false);
      } else {
        await videoRef.current.play();
        setIsPlaying(true);
        setHasStarted(true);
      }
    } catch (error) {
      console.error("Video playback error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoRef.current.requestFullscreen();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadStart = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("loadstart", handleLoadStart);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("loadstart", handleLoadStart);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  return (
    <section className="py-6 lg:py-10">
      <div className="wrapper">
        {/* section content */}
        <div className="flex flex-col items-center justify-center gap-4 mb-8 lg:mb-10">
          {/* promotion tag */}
          <span className="text-base font-bold text-secondary-blue">
            PROMOTION
          </span>
          {/* section title */}
          <h4 className="section-title text-center tracking-tighter">
            Winter Collections
          </h4>
          <p className="text-base lg:text-xl text-primary-black">
            Introducing the new winter jackets.
          </p>
        </div>

        {/* video */}
        <div className="relative h-[375px] md:h-[420px] lg:h-[545px]">
          {/* Video Container */}
          <div className="relative h-full">
            <div
              className="relative group cursor-pointer rounded-2xl overflow-hidden bg-[#0000003D] h-full"
              onMouseEnter={() => hasStarted && setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
              onClick={togglePlay}
            >
              {/* Video Element */}
              <video
                ref={videoRef}
                className="w-full h-full aspect-video object-cover"
                poster={home4VideoThumbImg.src}
                muted={isMuted}
                playsInline
                preload="metadata"
                aria-label="Video: Winter Collections"
              >
                <source src={home4Video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play Button Overlay */}
              {(!hasStarted || !isPlaying) && (
                <div className="absolute inset-0 flex-center bg-black/24">
                  <button
                    className="w-16 lg:w-20 h-16 lg:h-20 rounded-full bg-neutral-8 text-neutral-6 shadow-[0px_8px_16px_-8px_#0F0F0F33] transition-all duration-300 transform hover:scale-110 flex-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay();
                    }}
                    disabled={isLoading}
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isLoading ? (
                      <Loader2Icon />
                    ) : isPlaying ? (
                      <PauseIcon />
                    ) : (
                      <PlayFilledIcon />
                    )}
                  </button>
                </div>
              )}

              {/* Video Controls */}
              {hasStarted && (
                <div
                  className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transition-opacity duration-300 ${
                    showControls || !isPlaying ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button
                        className="text-neutral-8"
                        onClick={(e) => {
                          e.stopPropagation();
                          togglePlay();
                        }}
                        disabled={isLoading}
                        aria-label={isPlaying ? "Pause video" : "Play video"}
                      >
                        {isLoading ? (
                          <Loader2Icon />
                        ) : isPlaying ? (
                          <PauseIcon />
                        ) : (
                          <PlayFilledIcon />
                        )}
                      </button>

                      <button
                        className="text-neutral-8"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMute();
                        }}
                        aria-label={isMuted ? "Unmute video" : "Mute video"}
                      >
                        {isMuted ? <VolumeMuteIcon /> : <VolumeIcon />}
                      </button>
                    </div>

                    <button
                      className="text-neutral-8"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFullscreen();
                      }}
                      aria-label="Enter fullscreen"
                    >
                      <MaximizeIcon />
                    </button>
                  </div>
                </div>
              )}

              {/* Loading Overlay */}
              {isLoading && hasStarted && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <Loader2Icon />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home4Video;
