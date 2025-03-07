import { TiLocationArrow } from "react-icons/ti";
import Card from "../common/Card";
import CardsAnimation from "../feedback/CardsAnimation"

function Features() {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 py-20 md:px-20 text-white">
        <div className="py-8 font-circular text-xl">
          <p>Into the Metagame Layer</p>
        </div>

        <p className="max-w-md mb-20 text-gray-400 leading-[1.5]">
          Immerse yourself in an IP-rich product universe where AI-driven
          gamification and hyper-personalization lead the human-agentic economy.
        </p>

        <CardsAnimation className="border border-white/20 relative mb-7 h-96 w-full md:h-[65vh] overflow-x-hidden rounded-lg">
          <Card
            src="/videos/feature-1.mp4"
            title="radiant"
            description="The game of games transforming your in-game actions across Web2 & Web3 titles into a rewarding adventure."
          />
        </CardsAnimation>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <CardsAnimation className="relative border border-white/20 rounded-lg col-span-2 md:col-span-1 row-span-1 md:row-span-2 transition-transform duration-300">
            <Card
              src="/videos/feature-2.mp4"
              title="zigma"
              description="The NFT collection merging Zentry’s IP, AI, and gaming—pushing the boundaries of NFT innovation."
            />
          </CardsAnimation>

          <CardsAnimation className="row-span-1 border border-white/20 rounded-lg ms-32 md:col-span-1 md:ms-0 relative col-span-2 md:row-span-1 transition-transform duration-300">
            <Card
              src="/videos/feature-3.mp4"
              title="nexus"
              description="The player portal uniting humans & AI to play, compete, earn and showcase—gamifying social & Web3 experiences."
            />
          </CardsAnimation>

          <CardsAnimation className="row-span-1 border border-white/20 rounded-lg ms-32 md:col-span-1 md:ms-0 relative col-span-2 md:row-span-1 transition-transform duration-300">
            <Card
              src="/videos/feature-4.mp4"
              title="azul"
              description="The agent of agents elevating agentic AI experience to be more fun and productive. "
            />
          </CardsAnimation>

          <CardsAnimation className="relative col-span-1 row-span-1 overflow-hidden rounded-md transition-transform duration-300 ease-out">
            <div className="flex flex-col justify-between bg-violet-primary size-full rounded-lg text-black font-zentry-regular p-5">
              <h1 className="uppercase md:text-6xl text-4xl">
                more
                <br /> comming
                <br /> soon
              </h1>

              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </CardsAnimation>

          <CardsAnimation className=" relative col-span-1 row-span-1 overflow-hidden rounded-md transition-transform duration-300 ease-out">
            <video autoPlay loop className="size-full object-cover object-center" src="/videos/feature-5.mp4"></video>
          </CardsAnimation>
        </div>
      </div>
    </section>
  );
}

export default Features