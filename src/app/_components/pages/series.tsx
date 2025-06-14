import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
const Series: React.FC = () => {
  return (
    <section className="lg:h-160 relative z-10">
      <Image
        src="/images/gradients/rectangle.png"
        alt="Series Banner"
        width={1000}
        height={1000}
        className="object-cover h-full w-auto absolute top-0 left-0"
        loading="lazy"
      />
      <Image
        src="/images/gradients/orange-halo-1.png"
        alt="Series Gradient"
        width={1000}
        height={1000}
        className="object-cover h-auto lg:w-100 absolute lg:-top-20 lg:right-0 z-0"
        loading="lazy"
      />
      <Image
        src="/images/gradients/orange-halo-2.png"
        alt="Series Gradient"
        width={1000}
        height={1000}
        className="object-cover h-auto lg:w-140 absolute lg:top-20 lg:right-30 -z-10"
        loading="lazy"
      />
      <div className="z-30 absolute lg:top-30 lg:left-20 text-start text-white lg:w-180 space-y-4">
        <h1 className="lg:text-3xl font-extralight">Tại Artix</h1>
        <h2 className="lg:text-6xl lg:leading-snug">
          MỖI NHÂN VẬT LÀ MỘT CÂU CHUYỆN ĐANG CHỜ BẠN HOÀN THIỆN
        </h2>
        <Button
          variant={"outline"}
          className="bg-transparent text-true-primary hover:bg-true-primary hover:text-white border-2 border-true-primary rounded-full text-base cursor-pointer p-6"
        >
          ORDER NGAY
        </Button>
      </div>
      <div className="relative">
        <Image
          src="/images/figures/fig-1.png"
          alt="Series Figure"
          width={1000}
          height={1000}
          className="object-cover h-auto lg:w-150 absolute lg:top-28  lg:right-40 z-10"
          loading="lazy"
        />
        <Image
          src="/images/figures/fig-2.png"
          alt="Series Figure"
          width={1000}
          height={1000}
          className="object-cover h-auto lg:w-150 absolute lg:top-0 lg:right-10 z-0"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Series;
