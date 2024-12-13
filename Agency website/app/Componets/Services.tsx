import { FaSquareWebAwesome } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { MdBrandingWatermark } from "react-icons/md";
import Link from "next/link";
function Services() {
  return (
    <>
      <div
        id="pricing"
        className="flex  flex-col justify-center items-center mt-[100px]  "
      >
        <h1 className="text-[50px]  font-extrabold  capitalize  leading-[60px] max-sm:leading-[30px] max-sm:text-[30px]">
          Our Services
        </h1>
        <p className="mt-4 text-gray-400  text-center max-w-[40rem]">
          Explore our range of tailored marketing solutions designed to elevate
          your brand, engage your audience, and drive sustainable growth.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <div className="p-4 border-2 border-b-4 rounded-md border-black ">
          <div className="w-[50px] flex  items-center justify-center h-[50px] bg-black rounded-md">
            <IoPersonCircle size={30} color="white" />
          </div>
          <h2 className="mt-4 font-bold text-2xl">Personal Branding</h2>
          <p>
            Craft a unique identity that sets you apart and showcases your
            expertise.
          </p>
          <hr className="mt-4 mb-4" />
          <ul>
            <li className="flex items-center mb-2">
              <FaCheckCircle className="mr-2" />
              Personalized branding strategy
            </li>
            <li className="flex items-center mb-2 ">
              <FaCheckCircle className="mr-2" />
              Professional profile optimization
            </li>
            <li className="flex items-center  mb-2">
              <FaCheckCircle className="mr-2" />
              Social media presence enhancement
            </li>
            <li className="flex items-center  mb-2  ">
              <FaCheckCircle className="mr-2" />
              Content creation for personal brand
            </li>
            <li className="flex items-center  mb-2">
              <FaCheckCircle className="mr-2" />
              Monthly performance reports
            </li>
          </ul>
          <Link href="/contact">
            <button className="p-4 text-white font-bold bg-black w-full mt-4 rounded-md">
              Get started
            </button>
          </Link>
        </div>

        <div className="p-4 border-2 border-b-4 rounded-md border-black ">
          <div className="w-[50px] flex  items-center justify-center h-[50px] bg-black rounded-md">
            <MdBrandingWatermark size={30} color="white" />
          </div>
          <h2 className="mt-4 font-bold text-2xl">Brand Building</h2>
          <p>
            Establish a strong, recognizable brand that resonates with your
            target audience.
          </p>
          <hr className="mt-4 mb-4" />
          <ul>
            <li className="flex items-center mb-2">
              <FaCheckCircle className="mr-2" />
              Comprehensive market research
            </li>
            <li className="flex items-center mb-2 ">
              <FaCheckCircle className="mr-2" />
              Logo and visual identity design
            </li>
            <li className="flex items-center  mb-2">
              <FaCheckCircle className="mr-2" />
              Brand messaging and positioning
            </li>
            <li className="flex items-center  mb-2  ">
              <FaCheckCircle className="mr-2" />
              Website design and optimization
            </li>
            <li className="flex items-center  mb-2">
              <FaCheckCircle className="mr-2" />
              Ongoing brand strategy consultations
            </li>
          </ul>
          <Link href="/contact">
            <button className="p-4 text-white font-bold bg-black w-full mt-4 rounded-md">
              Get started
            </button>
          </Link>
        </div>

        <div className="p-4 border-2 border-b-4 rounded-md border-black ">
          <div className="w-[50px] flex  items-center justify-center h-[50px] bg-black rounded-md">
            <FaSquareWebAwesome size={30} color="white" />
          </div>
          <h2 className="mt-4 font-bold text-2xl">Growth Accelerator</h2>
          <p>
            Supercharge your marketing efforts for rapid growth and scalability.
          </p>
          <hr className="mt-4 mb-4" />
          <ul>
            <li className="flex items-center mb-2">
              <FaCheckCircle className="mr-2" />
              Multi-channel marketing strategy
            </li>
            <li className="flex items-center mb-2 ">
              <FaCheckCircle className="mr-2" />
              SEO and content marketing integration
            </li>
            <li className="flex items-center  mb-2">
              <FaCheckCircle className="mr-2" />
              Paid advertising management
            </li>
            <li className="flex items-center  mb-2  ">
              <FaCheckCircle className="mr-2" />
              Analytics and performance tracking
            </li>
            <li className="flex items-center  mb-2">
              <FaCheckCircle className="mr-2" />
              Account manager for ongoing support
            </li>
          </ul>

          <Link href="/contact">
            <button className="p-4 text-white font-bold bg-black w-full mt-4 rounded-md">
              Contect us
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Services;
