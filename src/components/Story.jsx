import AnimatedTitle from "../common/AnimatedTitle";
import CardAnimation from "../feedback/CardsAnimation"
function Story() {

  return (
    <section
      id="story"
      className="min-h-dvh w-screen bg-black text-first-white"
    >
      <div className="flex flex-col items-center size-full ">
        <p className="font-general uppercase">the multiversal ip world</p>

        <div className="relative">
          <AnimatedTitle
            text="the story of <br /> a hidden realm"
            containerClass="mt-6 mix-blend-difference pointer-events-none relative text-white z-10"
          />

          <CardAnimation className="story-img-container relative w-screen md:w-full md:h-dvh h-[90vh] ">
            <div className="img-mask absolute top-[-120px] md:-left-20 size-full overflow-hidden md:size-[800px]">
              <div className="story-content size-[500px] md:size-full">
                <img
                  src="/img/entrance.webp"
                  alt=" "
                  className="object-contain "
                />
              </div>
            </div>
          </CardAnimation>

          <div className="max-w-2/3 absolute bottom-15 left-18 ">
            <p className="text-center">
              The Open IP Universe The story of a hidden realm Where realms
              converge, lies Zentry and the boundless pillar. Discover its
              secrets and shape your fate amidst infinite opportunities.
            </p>

            <div className=" text-black mt-5 flex justify-center">
              <button className="bg-white px-8 py-3 rounded-full text-sm font-general font-semibold cursor-pointer">
                Discover Prologue
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story