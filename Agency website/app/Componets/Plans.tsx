"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";

function Plans() {
  return (
    <>
      <div className="mt-[100px]" id="plan">
        <div className="flex  flex-col justify-center items-center mt-[50px] mb-[50px] ">
          <h1 className="text-[50px]  font-extrabold  capitalize  leading-[60px] max-sm:leading-[30px] max-sm:text-[30px]">
            Growth factors
          </h1>
          <p className="mt-6 text-gray-400 text-center max-w-[40rem] text-base sm:text-lg md:text-xl">
            Our approach to growth marketing is built on three core strategies
            that ensure your business scales efficiently and sustainably
          </p>
        </div>
        <div className="grid  grid-cols-1 lg:grid-cols-3 gap-4  max-w-7xl mx-auto w-full">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-white border-2 border-b-4 border-black  min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] ">
                Data-Driven Strategies for Smarter Decisions
              </h2>
              <p className="mt-4 text-left  text-base/6 ">
                We use in-depth market research and customer insights to develop
                personalized plans that fuel growth and maximize your potential.
              </p>
            </div>
            <Image
              src="/Image/3.gif"
              width={300}
              height={500}
              alt="linear demo image"
              loading="lazy"
              className="absolute -right-4 grayscale filter -bottom-10 object-contain rounded-2xl"
            />
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-white border-2 border-b-4 border-black">
            <h2 className="max-w-80  text-left text-balance  text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em]">
              Integrated Multi-Channel Marketing for Maximum Reach
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 ">
              By unifying all your marketing channels—social media, email,
              ads,and more—we ensure your brand delivers a consistent, powerful
              message that reaches your target audience everywhere they are
            </p>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-white border-2 border-b-4 border-black min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em]">
                Scalable Solutions for Long-Term Success
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 ">
                Our marketing strategies are designed to grow alongside your
                business, giving you the flexibility and support to succeed now
                and in the future.
              </p>
            </div>
            <Image
              src="/Image/2.gif"
              width={300}
              height={500}
              loading="lazy"
              alt="linear demo image"
              className="absolute -right-10  -bottom-10 object-contain rounded-2xl"
            />
          </WobbleCard>
        </div>
      </div>
    </>
  );
}

export default Plans;
