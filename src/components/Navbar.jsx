import { useEffect, useRef, useState } from "react"
import MeImg from "../../public/img/me.jpg"
import Button from "../common/Button";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap"


const navLinks = ['Nexus', 'Vault', 'Prologue', 'About', 'Contact'];

function Navbar() {

    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true)

    const {y: currentScrollY} = useWindowScroll();

    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsAndicatorActive] = useState(false);

    const navContainerRef = useRef(null);
    const audioRef = useRef();

    const handleAudioPLayer = () => {
        setIsAudioPlaying((prev) => !prev );
        setIsAndicatorActive((prev) => !prev);
    }   

    useEffect(() => {
      if (currentScrollY === 0) {

        setIsNavbarVisible(true);
        navContainerRef.current.classList.remove('floating-nav');

      } else if (currentScrollY > lastScrollY) {

        setIsNavbarVisible(false);
        navContainerRef.current.classList.add('floating-nav');

      } else if (currentScrollY < lastScrollY ) {

        setIsNavbarVisible(true);
        navContainerRef.current.classList.add('floating-nav');
      }

      setLastScrollY(currentScrollY)
      
    }, [currentScrollY, lastScrollY])

    useEffect(() => {
      gsap.to(navContainerRef.current, {
        y: isNavbarVisible ? 0 : -100 ,
        opacity: isNavbarVisible ? 1 : 0
      })
    }, [isNavbarVisible])

    useEffect(() => {
        if (isAudioPlaying) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [isAudioPlaying])

  return (
    <div
      ref={navContainerRef}
      className=" fixed inset-x-0 z-50 top-4 h-16 transition-all duration-300 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex items-center justify-between size-full p-4">
          <div className="flex items-center gap-5 ">
            <img src={MeImg} alt="" className="rounded-full size-10" />

            <Button
              title="Products"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-secondary flex items-center "
            />
          </div>

          <div className="flex h-full items-center text-white">
            <div className="hidden md:block">
              {navLinks.map((link) => (
                <a
                  className="relative ms-10 font-general text-sm uppercase text-blue-50 after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-white cursor-pointer"
                  key={link}
                  href={`#${link.toLowerCase()}`}
                >
                  {link}
                </a>
              ))}
            </div>

            <button
              className="flex items-center sapce-x-0.5 ml-8"
              onClick={handleAudioPLayer}
            >
              <audio
                ref={audioRef}
                className="hidden"
                src="../../public/audio/STORMY - PIRATE (Music Video, pt. 56).mp3"
                loop
              />

                {[1,2,3,4,5].map((line) => (
                    <div key={line} className={`cursor-pointer p-1 indicator-line h-2 w-[3px]  bg-white transition-all duration-500 ease-in-out ${isIndicatorActive ? 'active' : ""}`} style={{animationDelay: `${line * 0.1}s`}}/>
                ))}
              
            </button>
          </div>
        </nav>
      </header>
    </div>
  ); 
    
}

export default Navbar