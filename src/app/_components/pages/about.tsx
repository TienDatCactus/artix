import Image from "next/image";
import React from "react";
const About: React.FC = () => {
  return (
    <section className="max-w-[125rem] lg:h-screen mx-auto relative z-50 lg:px-20 lg:py-20">
      <Image
        src="/images/gradients/orange-halo-4.png"
        alt="Gradient Background"
        width={500}
        height={300}
        className="absolute top-0 left-0 z-10"
      />
      <div className="grid grid-cols-1 lg:grid-cols-3  items-center">
        <h1 className="text-4xl lg:text-8xl font-bold lg:col-span-1 text-white z-20">
          About <br /> <span className="text-true-primary">Artix</span>
        </h1>
        <div className="lg:col-span-2  text-white z-20">
          <p className="text-center lg:text-2xl lg:w-3/4 mx-auto leading-relaxed">
            Tên gọi Artix là sự kết hợp giữa "Art" (nghệ thuật, sáng tạo) và
            "ix" (hiện đại, linh hoạt). Tên gợi lên sự kết hợp hoàn hảo giữa
            thẩm mỹ và công nghệ, biểu thị khả năng sáng tạo không giới hạn và
            tính linh hoạt trong thiết kế. Ngắn gọn, dễ nhớ, mang tầm quốc tế,
            Artix khẳng định đẳng cấp thương hiệu tiên phong.
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
        </div>
      </div>
    </section>
  );
};

export default About;
