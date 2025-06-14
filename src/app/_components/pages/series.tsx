"use client";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
const Series: React.FC = () => {
  return (
    <section
      id="series"
      className="lg:px-20 max-w-[125rem] mx-auto lg:py-40 relative z-20"
    >
      <Image
        src="/images/gradients/orange-halo-3.png"
        alt="Sol Figure"
        width={1000}
        height={1000}
        quality={100}
        className="object-cover h-full w-full absolute top-0 left-0 -z-10"
      />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10 text-center text-white lg:space-y-10 lg:pb-20"
      >
        <h1 className="lg:text-9xl font-bold">ARTIX&apos;S SERIES</h1>
        <h3 className="lg:text-5xl font-light">HALFWING - OPENING WING</h3>
      </motion.div>
      <div className="items-center grid lg:grid-cols-2 grid-cols-1 lg:gap-20 z-10 ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/figures/sol.png"
            alt="Sol Figure"
            width={1000}
            quality={100}
            height={1000}
            className="object-cover h-auto lg:w-150 "
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white lg:space-y-10"
        >
          <h1 className="lg:text-8xl font-medium text-center">Sol</h1>
          <h2 className="lg:text-3xl lg:w-2/3 mx-auto text-center">
            <i>“Thiên thần không mang dáng vẻ thiên thần”</i>
          </h2>
          <h3 className="lg:leading-loose lg:text-xl ">
            Tinh nghịch, liều lĩnh và đầy sức sống, Sol luôn mang theo nụ cười
            ngạo nghễ cùng ánh mắt như đang chuẩn bị cho một trò quậy phá mới.
            Cô không bay theo bất kỳ quy tắc nào, chỉ bay theo bản năng của mình
            – và rực rỡ theo cách không ai bắt kịp.
            <br />
            <br /> Nhưng đừng để vẻ sôi nổi ấy đánh lừa – Sol cất giấu rất nhiều
            điều trong lặng thinh. Cô còn có nửa cánh bị thiếu, một bản thể chưa
            trọn vẹn.
          </h3>
        </motion.div>
      </div>
      <div className="lg:py-40 grid lg:grid-cols-2 grid-cols-1 lg:gap-20 items-center z-10 ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white lg:space-y-10"
        >
          <h1 className="lg:text-8xl font-medium text-center">Nox</h1>
          <h2 className="lg:text-3xl lg:w-2/3 mx-auto text-center">
            <i>“Một nửa còn thiếu của thiên thần”</i>
          </h2>
          <h3 className="lg:leading-loose lg:text-xl ">
            Nox là ai? Đó là người như thế nào? Kẻ bí ấn đang lẩn trốn chờ ngày
            xuất hiện.
          </h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <p className="absolute lg:top-1/2 lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white lg:text-8xl">
            ?
          </p>
          <Image
            src="/images/figures/sol1.png"
            alt="Sol Figure"
            width={1000}
            quality={100}
            height={1000}
            className="object-cover h-auto lg:w-full "
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center lg:pb-30 z-10 "
      >
        <Button
          variant={"default"}
          className=" text-4xl text-white bg-true-primary hover:text-white hover:bg-transparent border-2 border-true-primary rounded-full cursor-pointer lg:p-10"
        >
          ORDER NGAY
        </Button>
      </motion.div>
      <div className="w-3/4 border-2 border-white mx-auto z-10" />
    </section>
  );
};

export default Series;
