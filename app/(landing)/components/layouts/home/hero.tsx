"use client";
import Image from "next/image";
import Button from "../ui/button";
import { FiFastForward } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section id="hero-section" className="container mx-auto min-h-screen flex items-center">
    <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-8">
                  <Image
            src="/images/img-basketball.svg"
            alt="bulutangkis, sepatu dan bola kasti"
            width={432}
            height={423}
            className="grayscale absolute left-20 top-55"
          />
        <div className="w-full md:w-1/2 pr-6 md:pr-12">
          <div className="text-primary italic text-[16px]">Friday Sale, 50%</div>
          <h1 className="font-extrabold text-dark-alternate text-[48px] md:text-[95px] italic leading-tight bg-gradient-to-b from-black to-[#CBCBCB] bg-clip-text text-transparent">
            WEAR YOUR <br />TOP-QUALITY <br />SPORTSWEAR
          </h1>
          <p className="mt-4 leading-loose text-dark-alternate text-[16px]">
            Engineered for endurance and designed for speed. Experience gear <br />
            that moves as fast as you do. Premium fabrics. Unmatched comfort. <br />
            Limitless motion.
          </p>
          <div className="flex gap-5 mt-6">
            <Button>Explore More <FiFastForward className="w-5 h-5" /></Button>
            <Button variant="ghost">
              Watch Video
              <img src="/images/icon-play-video.svg" alt="play" className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-end items-center">
          <Image
            src="/images/img-hero.svg"
            alt="bulutangkis, sepatu dan bola kasti"
            width={623}
            height={688}
            className=" transform md:-translate-x-80"
            priority
          />
        </div>
    </div>
              <Image
            src="/images/Ellipse 3.svg"
            alt="bulutangkis, sepatu dan bola kasti"
            width={213}
            height={213}
            className="absolute -right-[5px] top-1/2 -translate-y-1/2"
          />
        </section>
  );
};

export default HeroSection;