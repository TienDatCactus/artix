import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
const Services: React.FC = () => {
  return (
    <section className="lg:px-20 max-w-[125rem] mx-auto lg:pb-20 lg:pt-10 relative">
      <Image
        src="/images/gradients/pink.png"
        alt="Pink Gradient"
        width={1000}
        quality={100}
        height={1000}
        className="w-full h-auto  object-cover absolute top-0 left-0 -z-10 lg:rounded-b-[100px] lg:rounded-tl-[100px] lg:rounded-tr-[100px] lg:rounded-br-[100px] lg:h-96 lg:w-full"
        loading="lazy"
      />
      <div className="text-center text-white mx-auto py-10 lg:space-y-10">
        <h1 className="font-bold lg:text-8xl">DỊCH VỤ THIẾT KẾ VÀ IN 3D</h1>
        <p className="lg:w-4/7 font-light mx-auto lg:text-2xl">
          Artix chuyên dịch vụ trọn gói Thiết kế - In - Sơn 3D. Bằng công nghệ
          hiện đại và kỹ thuật sơn nghệ thuật, chúng tôi biến ý tưởng của bạn
          thành tác phẩm 3D sắc nét và sống động.
        </p>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 lg:gap-10 ">
        <div className="row-span-3  lg:space-y-10">
          <Image
            src="/images/figures/zombie-hand.png"
            alt="Zombie Hand"
            width={1000}
            quality={100}
            height={1000}
            className="lg:w-full lg:h-auto object-cover rounded-2xl"
          />

          <Image
            src="/images/figures/hello-kitty.png"
            alt="Hello Kitty"
            width={1000}
            quality={100}
            height={1000}
            className="lg:w-full lg:h-auto object-cover rounded-2xl"
          />
        </div>
        <div className="row-span-3 lg:space-y-10 lg:pt-20">
          <Image
            src="/images/figures/bomb.png"
            alt="Bomb Character"
            width={1000}
            quality={100}
            height={1000}
            className="lg:w-full lg:h-auto object-cover rounded-2xl"
          />
          <Image
            src="/images/figures/monster.png"
            alt="Green Monster"
            width={1000}
            quality={100}
            height={1000}
            className="lg:w-full lg:h-auto object-cover rounded-2xl"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center lg:space-y-10 lg:py-20">
        <p className="text-center text-white mx-auto py-10 lg:text-2xl lg:w-4/7">
          Quy trình đơn giản – Chất lượng vượt trội – Sản phẩm độc bản. Hãy bắt
          đầu dự án của bạn với Artix ngay hôm nay.
        </p>
        <Button
          variant={"default"}
          className=" text-4xl text-white bg-true-primary hover:text-white hover:bg-transparent border-2 border-true-primary rounded-full cursor-pointer lg:p-10"
        >
          ORDER NGAY
        </Button>
      </div>
      <div className="w-3/4 border-2 border-white mx-auto z-10" />
    </section>
  );
};

export default Services;
