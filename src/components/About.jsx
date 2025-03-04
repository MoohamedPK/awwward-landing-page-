import AboutImg from "../../public/img/about.webp"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from "gsap/all"
import AnimatedTitle from "../common/AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

function About() {

    useGSAP (() => {

        const clipAnimation = gsap.timeline({
            scrollTrigger : {
                trigger: "#clip",
                start: 'center center',
                end: '+=800 center',
                scrub: 1.5,
                pin: true,
                pinSpacing: true,
            }
        })

        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0,
        })
    })


  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative flex flex-col items-center gap-5 mb-8 mt-32">
        <p className="uppercase font-general text-xl">Welcome to Zentry</p>

        {/* animated text compo */}
        <AnimatedTitle
          text="Disc<b>o</b>ver the world's<br/> l<b>a</b>rgest shared adventure"
          
        />

        <div className="absolute bottom-[-90dvh] w-full max-w-96 text-center font-circular">
          <p>The Game of Games begins—your life, now an epic MMORPG</p>
          <p className="text-gray-500">
            Zentry unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy
          </p>
        </div>
      </div>

      <div className=" relative h-dvh w-screen" id="clip">
        <div className="mask-clip-path absolute left-1/2 top-0 z-20 md:h-[60vh] w-96 origin-center -translate-x-1/2 overflow-hidden rounded-3xl md:w-[25vw]">
          <img
            src={AboutImg}
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover border"
          />
        </div>
      </div>
    </div>
  );
}

export default About