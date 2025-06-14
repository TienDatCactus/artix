import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
const Header: React.FC = () => {
  const navLinks = [
    { href: "/", label: "ARTIX’S SERIES" },
    { href: "/about", label: "DỊCH VỤ 3D" },
    { href: "/contact", label: "VỀ CHÚNG TÔI" },
  ];
  return (
    <header className="flex items-center justify-between p-4 bg-layout-primary w-full lg:h-28 lg:px-20 z-100">
      <div>
        <Image
          src="/icons/artix.svg"
          alt="Logo"
          width={1000}
          height={1000}
          className="lg:h-20 lg:w-20 h-20 w-20"
        />
      </div>
      <nav className="text-white text-lg flex items-center [&>a]:hover:underline lg:gap-10 ">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
        <Button
          variant={"outline"}
          className="bg-transparent text-true-primary hover:bg-true-primary hover:text-white border-2 border-true-primary rounded-full text-base cursor-pointer"
        >
          ORDER NGAY
        </Button>
      </nav>
    </header>
  );
};

export default Header;
