import Link from "next/link";
import Image from "next/image";

function About() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-[70px]">
        <div>
          <h1 className="text-[50px]  max-sm:text-center font-extrabold  capitalize  leading-[60px] max-sm:leading-[30px] max-sm:text-[30px]">
            Igniting Your Brand's Success
          </h1>
          <p className="mt-4 w-full  max-sm:text-center">
            we are a passionate team of growth marketing experts dedicated to
            helping businesses reach their full potential. With a blend of
            creativity and data-driven strategies, we empower brands to connect
            with their audiences, enhance their online presence, and achieve
            sustainable growth. Our commitment to excellence and innovation
            drives us to deliver customized solutions tailored to your unique
            needs.
          </p>
          <Link href="/#feedback">
            <button className="bg-black max-sm:w-full font-bold p-4 mt-4 text-white rounded-md">
              Read Feedbacks
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-end  max-sm:items-center">
          <Image
            src="/Image/1.gif"
            width="350"
            height="300"
            alt="Description of the image"
            className="mt-4"
          />
        </div>
      </div>
    </>
  );
}

export default About;
