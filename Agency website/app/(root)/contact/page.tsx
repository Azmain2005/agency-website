"use client";
import { useState } from "react";

function Page() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log("Form Data Submitted:", formData);
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <>
      <div className="mt-[30px]">
        <div className="flex  flex-col justify-center items-center mb-4">
          <h1 className="text-[50px]  font-extrabold  capitalize  leading-[60px] max-sm:leading-[30px] max-sm:text-[30px]">
            Contact our team
          </h1>
          <p className="mt-6 text-gray-600 text-center max-w-[40rem] text-base sm:text-lg md:text-xl">
            Got any questions about the product or scaling on our platform?
            We're here to help. Chat to our friendly team 24/7 and get onboard
            in less than 5 minutes.
          </p>
        </div>
        <hr className="mb-10" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <h4 className="text-2xl text-black font-bold">Email us </h4>
                <p className=" text-gray-500">for support email us anytime</p>
              </div>

              {success && (
                <p className="text-green-600 text-center bg-green-200 rounded-md p-4 font-bold mt-4 mb-4">
                  Your message has been sent successfully!
                </p>
              )}
              <label className="font-bold">Email:</label>
              <input
                className="border-2 mb-4 p-2 border-black rounded-md border-b-4 w-full"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Type your email.."
                required
              />
              <label className="font-bold">Subject:</label>
              <input
                className="border-2 mb-4 p-2 border-black rounded-md border-b-4 w-full"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Type your subject"
                required
              />
              <label className="font-bold">Message:</label>
              <textarea
                className="border-2 mb-2 p-2 border-black rounded-md border-b-4 w-full"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-black text-white p-2 rounded-md font-bold flex justify-center items-center"
              >
                {loading ? "Loading..." : "Submit"}
              </button>
            </form>
          </div>

          <div className="overflow-hidden rounded-md">
            <div className="mb-4">
              <p className="font-bold text-xl">Call us</p>
              <p className="text-sm text-gray-500">
                Call our team Mon-Fri 8am to 5pm
              </p>
              <p className="font-bold underline">+447878928746</p>
            </div>

            <div className="mb-4">
              <p className="font-bold  text-xl">Visit us</p>
              <p className="text-sm text-gray-500">
                Chat to us in person at our office
              </p>
              <p className="font-bold underline">
                71-75 Shelton Street, Covent Garden, London, United Kingdom,
                WC2H 9JQ
              </p>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9114287046523!2d-0.1260947370370292!3d51.5148409216974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876053aa6e389e3%3A0x1ed55edd887442d!2s71-75!5e0!3m2!1sen!2sbd!4v1728208187226!5m2!1sen!2sbd"
              width="100%"
              height="200"
              loading="lazy"
              className="mt-8"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
