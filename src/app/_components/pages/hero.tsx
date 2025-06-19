"use client";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="lg:h-160 h-120 max-w-[125rem] mx-auto relative z-30"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent z-20" />

      <Image
        src="/images/gradients/rectangle.png"
        alt="Series Banner"
        width={1000}
        height={1000}
        quality={100}
        className="object-cover h-full w-auto absolute top-0 left-0"
        loading="lazy"
      />
      <Image
        src="/images/gradients/orange-halo-1.png"
        alt="Series Gradient"
        width={1000}
        height={1000}
        quality={100}
        className="object-cover h-auto lg:w-100 w-60 absolute lg:-top-20 right-0  "
        loading="lazy"
      />
      <Image
        src="/images/gradients/orange-halo-2.png"
        alt="Series Gradient"
        width={1000}
        quality={100}
        height={1000}
        className="object-cover h-auto lg:w-140 w-100  absolute lg:top-20 lg:right-30 right-20 -z-10"
        loading="lazy"
      />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="z-30 absolute lg:top-30 top-20 lg:left-20 lg:text-start text-center text-white lg:w-180 w-4/5 transform -translate-x-1/2 left-1/2 lg:translate-x-0 space-y-4"
      >
        <h1 className="lg:text-3xl text-2xl font-extralight">Tại Artix</h1>
        <h2 className="lg:text-6xl text-3xl lg:leading-snug">
          MỖI NHÂN VẬT LÀ MỘT CÂU CHUYỆN ĐANG CHỜ BẠN HOÀN THIỆN
        </h2>
        <a href="#contact">
          <Button
            variant={"outline"}
            className="backdrop-blur-md bg-white/20 hover:text-true-primary text-white hover:border-true-primary hover:bg-true-primary/20 border border-white/30 rounded-full text-base cursor-pointer p-6 font-bold shadow-lg transition-all duration-300 hover:shadow-white/20"
          >
            ORDER NGAY
          </Button>
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <Image
          src="/images/figures/fig-1.png"
          alt="Series Figure"
          width={1000}
          height={1000}
          quality={100}
          className="object-cover h-auto lg:w-150 w-120 absolute lg:top-28 lg:right-40 top-40 right-20 z-10"
          loading="lazy"
        />
        <Image
          src="/images/figures/fig-2.png"
          alt="Series Figure"
          width={1000}
          height={1000}
          quality={100}
          className="object-cover h-auto lg:w-150 w-110 absolute lg:top-0 lg:right-10 top-22 right-0 z-0"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
