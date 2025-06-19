import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tooltip } from "@radix-ui/react-tooltip";
import { Mouse } from "lucide-react";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Footer from "./_components/layout/footer";
import Header from "./_components/layout/header";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "vietnamese"],
  adjustFontFallback: true,
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

// app/page.js
// app/layout.tsx hoặc app/page.tsx

export const metadata: Metadata = {
  title: "Artix Studio | Thiết kế & In 3D Mô Hình – Figure Nghệ Thuật",
  description:
    "Dịch vụ thiết kế, in và sơn mô hình 3D theo yêu cầu. Khám phá bộ figure độc quyền mang câu chuyện riêng từ Artix Studio – sáng tạo, tinh xảo, đầy cảm xúc.",
  openGraph: {
    type: "website",
    url: "artixstudio.art",
    title: "Artix Studio | Thiết kế & In 3D Mô Hình – Figure Nghệ Thuật",
    description:
      "Dịch vụ thiết kế, in và sơn mô hình 3D theo yêu cầu. Khám phá bộ figure độc quyền mang câu chuyện riêng từ Artix Studio – sáng tạo, tinh xảo, đầy cảm xúc.",
    images: [
      {
        url: "/images/artix_bg.jpg",
        width: 1200,
        height: 630,
        alt: "Artix Studio Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artix Studio | Thiết kế & In 3D Mô Hình – Figure Nghệ Thuật",
    description:
      "Dịch vụ thiết kế, in và sơn mô hình 3D theo yêu cầu. Khám phá bộ figure độc quyền mang câu chuyện riêng từ Artix Studio – sáng tạo, tinh xảo, đầy cảm xúc.",
    images: ["/images/artix_bg.jpg", "/images/artix_ic.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TooltipProvider>
      <html lang="en">
        <body className={`${spaceGrotesk.variable} antialiased relative`}>
          <Header />
          <main className="bg-main-primary ">{children}</main>
          <Footer />
          <Tooltip>
            <TooltipTrigger className="fixed flex items-center justify-center bottom-6 right-6 z-20 hover:bg-true-primary/80 text-white rounded-full cursor-pointer size-14 group">
              <a href="#hero" className="block">
                <Mouse className="text-true-primary group-hover:text-white size-8 " />
              </a>
            </TooltipTrigger>
            <TooltipContent>Cuộn lên đầu</TooltipContent>
          </Tooltip>
        </body>
      </html>
    </TooltipProvider>
  );
}
