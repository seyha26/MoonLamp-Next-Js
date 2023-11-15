import Image from "next/image";
import heroImage from "@/public/images/moonlamphero.png";

const Hero = () => {
  return (
    <div className="bg-background py-10" id="#hero">
      <div className="w-[89%] m-auto grid lg:grid-cols-2 grid-cols-1 items-center max-w-[1400px] gap-20">
        <div>
          <h1 className="text-5xl font-bold text-dark">
            Illuminate Your World: Discover MoonLamp Magic
          </h1>
          <p className="mt-5 text-secondary">
            With every purchase of our moonlamp 10% of the sale will go
            donation. We love to give back to community
          </p>
          <div className="flex gap-5 mt-8">
            <button className="bg-primary py-2 px-5 rounded-xl text-white">
              More Info
            </button>
            <button className="bg-secondary py-2 px-5 rounded-xl text-white">
              Buy Now
            </button>
          </div>
        </div>
        <div className="flex lg:justify-end justify-center items-center">
          <Image src={heroImage} width={600} height={600} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
