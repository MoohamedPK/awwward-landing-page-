import gsap from "gsap";
import { useEffect, useRef } from "react";
import {ScrollTrigger} from "gsap/all"

gsap.registerPlugin(ScrollTrigger);

function AnimatedTitle({text, containerClass}) {

    const containerRef = useRef(null);

    useEffect(() => {

        const ctx = gsap.context(() => {
          const titleAnimation = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "100 bottom",
              end: "center bottom",
              toggleActions: "play none none reverse",
            },
          });

          titleAnimation.to(
            ".animated-word",
            {
              opacity: 1,
              transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
              ease: "power2.inOut",
              stagger: 0.02,
            },
            0
          );
        }, containerRef);// <- scope

        return () => ctx.revert(); // clean up on unmount
    }, [])


  return (
    <div ref={containerRef} className={`mt-5 text-center text-black text-4xl uppercase leading-[0.8] md:text-[30px] ${containerClass}`}>
      {text.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex justify-center items-center md:w-[40dvw] flex-wrap gap-2 px-8"
        >
          {line.split(" ").map((word, i) => (
            <span
              key={i}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
      ))}
        </div>
      ))}
    </div>
  );
}

export default AnimatedTitle