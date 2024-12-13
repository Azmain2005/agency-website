import Marquee from "./ui/marquee";
import { cn } from "@/lib/utils";
import Image from "next/image";

const reviews = [
  {
    name: "Liora Duvall",
    username: "@liorad22",
    body: "Agacy has completely revolutionized our marketing approach! Their unique strategies helped us reach new customers and significantly increase our sales. Highly recommend!",
    img: "/Image/avater/1.jpg",
  },
  {
    name: "Tobias Fenwick",
    username: "@tobiasf88",
    body: "The Agacy team is outstanding! They understood our goals and crafted a personalized marketing plan that truly made a difference. Our online presence has never been stronger.",
    img: "/Image/avater/2.jpg",
  },
  {
    name: "Zara Kline",
    username: "@zarak_23",
    body: "I appreciate how Agacy seamlessly integrates various marketing channels. Their consistent messaging has greatly enhanced our brand visibility!",
    img: "/Image/avater/3.jpg",
  },
  {
    name: "Orion McCallister",
    username: "@orionm_art",
    body: "Agacy’s growth strategies are exceptional! We saw a remarkable increase in customer engagement and retention thanks to their dedicated support!",
    img: "/Image/avater/4.jpg",
  },
  {
    name: "Saskia Voss",
    username: "@saskia_lee22",
    body: "Partnering with Agacy has been transformative for our small business. Their insights have helped us maximize our marketing budget effectively!",
    img: "/Image/avater/5.jpg",
  },
  {
    name: "Leander Quade",
    username: "@leanderq2023",
    body: "Thanks to Agacy, our sales have soared! Their team is knowledgeable, responsive, and genuinely committed to our success. I couldn't be happier!",
    img: "/Image/avater/6.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

function Testimonial() {
  return (
    <>
      <div
        className="flex  flex-col justify-center items-center mt-[50px]  "
        id="feedback"
      >
        <h1 className="text-[50px]  font-extrabold  capitalize  leading-[60px] max-sm:leading-[30px] max-sm:text-[30px]">
          Feedback{" "}
        </h1>
        <p className="mt-4 text-gray-400  text-center max-w-[40rem]">
          See how our clients have transformed their businesses with our growth
          marketing strategies.
        </p>
      </div>
      <div className="relative flex mt-10 mb-[50px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background ">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </>
  );
}

export default Testimonial;
