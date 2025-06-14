"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
const About: React.FC = () => {
  return (
    <section
      id="about"
      className="max-w-[125rem] lg:h-screen mx-auto relative z-20 lg:px-30 lg:py-20"
    >
      <Image
        src="/images/gradients/orange-halo-4.png"
        alt="Gradient Background"
        width={500}
        height={300}
        className="absolute top-0 left-0 z-10"
      />
      <div className="grid grid-cols-1 w-full lg:grid-cols-2  items-center">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl lg:text-8xl font-bold text-white z-20"
        >
          About <br /> <span className="text-true-primary">Artix</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="  text-white z-20"
        >
          <p className="text-center lg:text-2xl  leading-relaxed">
            Tên gọi Artix là sự kết hợp giữa &quot;Art&quot; (nghệ thuật, sáng
            tạo) và &quot;ix&quot; (hiện đại, linh hoạt). Tên gợi lên sự kết hợp
            hoàn hảo giữa thẩm mỹ và công nghệ, biểu thị khả năng sáng tạo không
            giới hạn và tính linh hoạt trong thiết kế. Ngắn gọn, dễ nhớ, mang
            tầm quốc tế, Artix khẳng định đẳng cấp thương hiệu tiên phong.
          </p>
          <div className="flex flex-col items-center lg:mt-6">
            <Image
              src="/icons/artix-white-logo.png"
              alt="Artix Logo"
              quality={100}
              width={1000}
              height={1000}
              className="lg:w-60 lg:h-auto "
            />
            <p className="text-white text-xl">“ART IS LIFE”</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
