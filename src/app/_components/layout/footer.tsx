import Image from "next/image";
import React from "react";
const Footer: React.FC = () => {
  return (
    <footer className="bg-layout-primary lg:px-20 lg:pt-10 ">
      <div className="flex items-center justify-between w-full">
        <Image
          src="/icons/artix.svg"
          alt="Logo"
          width={1000}
          height={1000}
          className="lg:h-50 lg:w-50 h-20 w-20"
        />
        <div className="space-y-4">
          <h1 className="text-2xl text-neutral-100">ARTIX TEAM</h1>
          <dl className="text-base text-gray-400 space-y-2">
            <div className="flex items-center lg:gap-2 gap-1">
              <dt>Hotline:</dt>
              <dd className="hover:underline">
                <a href="tel:0837119797">0837119797</a>
              </dd>
            </div>
            <div className="flex items-center lg:gap-2 gap-1">
              <dt>Address:</dt>
              <dd>KCNC Hoa Lac, Thach That, Ha Noi</dd>
            </div>
          </dl>
          <div className="flex items-center lg:gap-4">
            <Image
              src="/icons/ic_baseline-facebook.svg"
              alt="Logo"
              width={1000}
              height={1000}
              loading="lazy"
              className="lg:h-14 lg:w-14 h-10 w-10"
            />
            <Image
              loading="lazy"
              src="/icons/simple-icons_gmail.svg"
              alt="Logo"
              width={1000}
              height={1000}
              className="lg:h-14 lg:w-14 h-10 w-10"
            />
          </div>
        </div>
      </div>
      <p className="text-sm text-center text-gray-400 lg:py-6">
        ©{new Date().getFullYear()} Artix Team. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
