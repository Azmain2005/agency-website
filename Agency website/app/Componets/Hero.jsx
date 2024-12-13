import Link from "next/link";
import Image from "next/image";
import { LuPlay } from "react-icons/lu";
function Hero() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-[100px] max-sm:mt-[70px]">
        <h1 className="text-[70px]  text-center font-extrabold  capitalize  leading-[90px] max-sm:leading-[40px] max-sm:text-[40px] ">
          Fueling Your Growth Potential
        </h1>
        <p className="mt-6 text-gray-400 text-center max-w-[40rem] text-base sm:text-lg md:text-xl">
          Strategic Marketing for Unstoppable Business Success – Driving
          Innovation, Accelerating Growth, and Unlocking New Opportunities.
        </p>
        <div className="flex justify-center gap-2 mt-10 w-full max-sm:flex-wrap">
          <a href="#pricing" className="max-sm:w-full">
            <button className="border-2  max-sm:w-full font border-black p-4 px-6 font-bold rounded-md">
              View Services
            </button>
          </a>
          <Link className=" max-sm:w-full" href="/contact">
            <button className="bg-black flex items-center max-sm:w-full font-bold  max-sm:justify-center p-4 px-6 text-white rounded-md">
              <LuPlay size={20} className="mr-1" />
              Get Started
            </button>
          </Link>
        </div>

        <Image
          className="w-full md:w-full/2 mt-8 rounded-lg"
          width={100}
          height={100}
          src="/Image/hero-1.jpg"
          alt="Digital Transformation"
          loading="lazy"
        />
      </div>
    </>
  );
}

export default Hero;
