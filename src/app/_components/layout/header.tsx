"use client";
import { Button } from "@/components/ui/button";
import { Breakpoint, useBreakpoint } from "@/lib/hooks/useBreakpoint";
import { Menu } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: "#series", label: "ARTIX'S SERIES" },
    { href: "#services", label: "DỊCH VỤ 3D" },
    { href: "#about", label: "VỀ CHÚNG TÔI" },
  ];

  const breakpoint = useBreakpoint();

  // Handle smooth scrolling

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <header className="flex relative items-center justify-between p-4 bg-layout-primary w-full lg:h-28 lg:px-20 z-50">
      <div>
        <Image
          src="/icons/artix.svg"
          alt="Logo"
          width={1000}
          height={1000}
          className="lg:h-20 lg:w-20 h-12 w-12"
        />
      </div>

      <nav className="text-white text-lg hidden items-center [&>a]:hover:underline gap-6 lg:gap-10 z-20 md:flex">
        {navLinks.map((link) => (
          <a key={link.href} className="lg:text-base text-sm" href={link.href}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className="block">
          <Button
            variant={"outline"}
            className="bg-transparent text-true-primary hover:bg-true-primary hover:text-white border-2 border-true-primary rounded-full text-base cursor-pointer z-20"
          >
            ORDER NGAY
          </Button>
        </a>
      </nav>

      {breakpoint === ("sm" as Breakpoint) ? (
        <>
          <Button
            className="cursor-pointer bg-transparent hover:bg-transparent z-30 "
            onClick={() => setOpen(!open)}
          >
            <Menu className="text-white size-8" />
          </Button>

          <AnimatePresence>
            {open && (
              <motion.div
                ref={menuRef}
                className="fixed top-0 left-0 right-0 bg-layout-primary py-4 z-30 px-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-white text-2xl mb-8 flex items-center justify-between">
                  <Image
                    src="/icons/artix.svg"
                    alt="Logo"
                    width={1000}
                    height={1000}
                    className="h-14 w-14"
                  />
                  <a href="#contact" className="block text-center">
                    <Button
                      variant={"outline"}
                      className="bg-transparent text-true-primary hover:bg-true-primary hover:text-white border-2 border-true-primary rounded-full text-base cursor-pointer"
                    >
                      ORDER NGAY
                    </Button>
                  </a>
                </div>

                <div className="text-white mb-4">
                  <div className="text-white flex flex-col items-center gap-6 text-xl">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        className="hover:text-true-primary transition-colors"
                        href={link.href}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : null}
    </header>
  );
};

export default Header;
