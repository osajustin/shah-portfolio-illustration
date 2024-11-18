"use client";
import React from "react";
import Button from "../button";
import { IconDownload } from "@tabler/icons-react";
import Image from "next/image";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="md:py-15 scroll-mt-navbar-height bg-primary-white px-4 py-10 pt-navbar-height md:px-20"
    >
      <div className="m-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
        {/* Text Content */}
        <div className="mr-auto place-self-center text-left lg:col-span-7">
          <h1 className="text-display-medium  font-light text-primary-black">
            Hello I’m <span className="font-extrabold">Justin Osagie.</span>
          </h1>
          <h2 className="text-display-medium font-extrabold text-primary-black">
            <span className="underline decoration-zinc-800 decoration-8">
              A Fullstack
            </span>{" "}
            <mark className="rounded bg-primary-black px-2 text-primary-white">
              Developer
            </mark>
          </h2>
          <h3 className="text-display-medium font-light text-primary-black">
            Based In <span className="font-extrabold">Florida.</span>
          </h3>

          <p className="mt-4 max-w-2xl text-paragraph-p2 font-light text-zinc-500 lg:mb-8">
            I’m Justin Osagie, a full-stack developer passionate about crafting
            scalable web applications and robust backend systems. With expertise
            in React, .NET, and Cloud technologies, I transform complex
            challenges into elegant solutions. Beyond coding, I enjoy fitness,
            including weightlifting and running, while often diving into
            audiobooks or perfecting my cooking skills. Let’s create something
            extraordinary together!
          </p>

          <div className="mt-6 flex space-x-4">
            {/* Buttons */}
            <Button
              size={"medium"}
              variant={"default"}
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </Button>

            <a
              href="/resume/resume_Justin_Osagie.pdf"
              download="Justin-Osagie-Resume.pdf"
            >
              <Button size={"medium"} variant={"outline"}>
                <span className="mr-2">Resume</span>
                <IconDownload stroke={2} />
              </Button>
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div className="order-first flex justify-center pt-12 lg:order-last lg:col-span-5 lg:mt-0">
          <Image
            src="/heroSection/heroImageLarge.svg"
            alt="Evren Shah illustration"
            width={500}
            height={500}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="size-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
