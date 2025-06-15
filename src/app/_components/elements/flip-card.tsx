// components/FlipCard.tsx
"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export const FlipCard = ({
  title = "Flip Card",
  subtitle = "Click to flip",
  imageSrc = "/images/gradients/orange-halo-1.png",
  description = <p></p>,
  sol = false,
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="w-full h-110 hover:scale-105 transition-all duration-300 cursor-pointer perspective"
    >
      <motion.div
        className="relative w-full h-full transition-transform duration-600"
        animate={{ rotateY: flipped ? 180 : 0 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div className="backface-hidden w-full h-full absolute">
          <div className="w-full h-full relative">
            {sol && (
              <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl">
                ?
              </p>
            )}
            <Image
              src={imageSrc}
              alt={title}
              width={1000}
              height={1000}
              className="rounded-2xl w-full h-full "
            />
          </div>
        </div>

        {/* Back */}
        <ScrollArea
          className="absolute p-4 w-full h-full backface-hidden bg-main-primary/50 text-white rounded-xl shadow-md space-y-4"
          style={{ transform: "rotateY(180deg)" }}
        >
          <h1 className="text-center font-bold text-3xl">{title}</h1>
          <h2 className="text-center whitespace-pre-line">
            <i>{subtitle}</i>
          </h2>
          {description}
        </ScrollArea>
      </motion.div>
    </div>
  );
};
