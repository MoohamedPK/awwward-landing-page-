import { useEffect, useRef, useState } from "react"
import Button from "../common/Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all"
import Loading from "../feedback/Loading";

gsap.registerPlugin(ScrollTrigger);

function Hero() {

    const [currentIndex, setCurrentIndex] = useState(1);  
    const [isClicked, setIsClicked] = useState(false);

    const [isLoading, setIsLoading] = useState(true); // bs the video takes some time to laoded 
    const [loadedVideo, setLoadedVideo] = useState(0); // the numbers of videos that has loaded 
    
    const totalVideos = 4;
    const nextVideoRef = useRef(null);
    
    const upComingVideoIndex = (currentIndex % totalVideos) + 1;

    const handleVideoLoad = () => {
        setLoadedVideo((prev) => prev + 1)
    }

    const handleMiniVideoClick = () => {
        setIsClicked(true);
        setCurrentIndex(upComingVideoIndex);
    }

    const getVideoSrc = (index) => `videos/hero-${index}.mp4`

    useEffect(() => {
      if (loadedVideo === totalVideos - 1) {
        setIsLoading(false)
      }
    }, [loadedVideo])

    // GSAP ANIMATION 
    useGSAP(
      () => {
        if (isClicked) {
          gsap.set("#next-video", { visibility: "visible" });
          gsap.to("#next-video", {
            transformOrigin: "center center",
            scale: 1,
            width: "100%",
            height: "100%",
            duration: 1,
            ease: "power1.inOut",
            onStart: () => nextVideoRef.current.play(),
          });
          gsap.from("#current-video", {
            transformOrigin: "center center",
            scale: 0,
            duration: 1.5,
            ease: "power1.inOut",
          });
        }
      },
      {
        dependencies: [currentIndex],
        revertOnUpdate: true,
      }
    );


    useGSAP(() => {
        gsap.set("#video-frame", {
          clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
          borderRadius: "0 0 40% 10%",
        });

        gsap.from("#video-frame", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          borderRadius: '0 0 0 0',
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: "#video-frame",
            start: "center center",
            end: "bottom top",
            scrub: 1,
          }
        });
    })

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {isLoading && (
        <div className="flex justify-center items-center absolute z-[100] h-dvh w-screen overflow-hidden bg-first-white">
          <div className="three-body ">
            <Loading message="loading..."/>
          </div>
        </div>
      )}  

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-first-white"
      >
        <div>
          <div className="mask-clip-path absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg absolute-center">
            <div
              className="origin-center scale-50 opacity-0 transition-all duration-500 hover:scale-100 hover:opacity-100"
              onClick={handleMiniVideoClick}
            >
              <video
                ref={nextVideoRef}
                src={getVideoSrc(upComingVideoIndex)}
                loop
                muted
                id="current-video"
                onLoadedData={handleVideoLoad}
                className="size-64 origin-center scale-150 object-cover object-center"
              />
            </div>
          </div>

          <video
            src={getVideoSrc(currentIndex)}
            ref={nextVideoRef}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />

          <video
            onLoadedData={handleVideoLoad}
            className="absolute top-0 left-0 size-full object-cover object-center"
            autoPlay
            muted
            loop
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
          />
        </div>

        <h1 className="font-zentry-regular text-[100px] text-first-white absolute bottom-0 right-5 z-40">
          Gaming
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full text-first-white">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="text-[100px] font-zentry-regular ">Redefine</h1>

            <p className="mb-5 max-w-64 font-robert-medium">
              Enter the Metagame Layer <br /> Unleash the Play Economy{" "}
            </p>

            <Button
              id="watch-trailer"
              title="Watch the full trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="!bg-yellow-secondary flex justify-center items-center gap-1"
            />
          </div>
        </div>
      </div>

      <h1 className="font-zentry-regular text-[100px] text-black absolute bottom-0 right-5 -z-40">
        Gaming
      </h1>
    </div>
  );
}

export default Hero