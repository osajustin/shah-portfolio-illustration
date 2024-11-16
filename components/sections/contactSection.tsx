import React from "react";
import Input from "../input"; // Assuming Input component is in the same directory

const ContactSection: React.FC = () => {
  return (
    <section className="bg-primary-white px-4 py-16 md:px-20 md:py-24">
      <div className="mx-auto grid max-w-screen-lg gap-8 md:grid-cols-2">
        {/* Left Section: Form */}
        <form className="text-subheading-h6 space-y-6 text-zinc-500">
          <Input type="text" placeholder="Your name" required />
          <Input type="email" placeholder="Your email" required />
          <Input type="text" placeholder="Your website (If exists)" />
          <Input type="textarea" placeholder="How can I help?*" />

          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            {/* Get In Touch Button */}
            <button
              type="button"
              className="w-full rounded-md bg-primary-black px-5 py-3 text-sm font-medium text-primary-white transition hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-black md:w-auto"
            >
              Get In Touch
            </button>

            {/* Social Buttons */}
            {/* <div className="flex w-full justify-center space-x-4 md:w-auto md:justify-start">
              <a
                href="#"
                className="flex size-12 items-center justify-center rounded-md border border-primary-black text-primary-black transition hover:bg-primary-black hover:text-primary-white"
              >
                <img src="/path/to/facebook-icon.svg" alt="Facebook" />
              </a>
              <a
                href="#"
                className="flex size-12 items-center justify-center rounded-md border border-primary-black text-primary-black transition hover:bg-primary-black hover:text-primary-white"
              >
                <img src="/path/to/twitter-icon.svg" alt="Twitter" />
              </a>
              <a
                href="#"
                className="flex size-12 items-center justify-center rounded-md border border-primary-black text-primary-black transition hover:bg-primary-black hover:text-primary-white"
              >
                <img src="/path/to/discord-icon.svg" alt="Discord" />
              </a>
            </div> */}
          </div>
        </form>

        {/* Right Section: Text */}
        <div className="my-10 space-y-4">
          <h2 className="text-display-medium font-extrabold text-primary-black">
            Let&apos;s{" "}
            <mark className="rounded bg-primary-black px-2 text-primary-white">
              talk
            </mark>{" "}
            for <br />
            Something <span className="text-primary-black">special</span>
          </h2>
          <p className="text-paragraph-p2 font-light text-zinc-500">
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </p>
          <div className="text-h3 font-semibold text-primary-black">
            <p>Yourmail@gmail.com</p>
            <p>1234567890</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;