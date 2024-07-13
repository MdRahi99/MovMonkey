"use client";
import React, { useState } from "react";
import Image from "next/image";
import img1 from "../../../public/image/banner-card-1.jpeg";
import img2 from "../../../public/image/banner-card-2.jpeg";
import QuoteDialog from "@/components/shared/QuoteDialog";

const bannerData = {
  hero: {
    backgroundImage: "/image/banner.jpg",
    title: "Connect with Removal, Cleaning, and Delivery Service",
    buttonText: "Apply for a quote",
  },
  bannerCardImages: [{ image: img1 }, { image: img2 }, { image: img1 }],
};

const NewBanner = () => {
  const { hero, bannerCardImages } = bannerData;
  const [open, setOpen] = useState(false);

  return (
    <div className="h-[60vh] sm:h-[60vh] md:h-[60vh] lg:min-h-[100vh] relative">
      <div className="relative h-[50vh] md:h-[40vh] sm:h-[40vh] lg:h-[80vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${hero.backgroundImage})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative flex h-full lg:bottom-20 md:bottom-6 flex-col items-center justify-center gap-8 px-4">
          <h1 className="text-lg sm:text-2xl lg:text-4xl text-white text-center">
            {hero.title}
          </h1>
          <QuoteDialog open={open} setOpen={setOpen} />
        </div>
      </div>

      {/* Banner Cards */}
      <div className="hidden sm:block absolute sm:bottom-20 -bottom-24 md:bottom-24 lg:bottom-8 w-full border-b-[10px] border-[#89b77c] pb-1">
        <div className="px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 items-center justify-between gap-4">
            {bannerCardImages.map((imageData, index) => (
              <Image
                key={index}
                src={imageData.image}
                alt="image"
                width={900}
                height={400}
                className="h-40 sm:h-48 lg:h-60 w-full object-cover"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -bottom-0 sm:bottom-0 md:bottom-4 lg:-bottom-4 flex w-full items-center justify-center px-1 lg:px-4">
        <h1 className="text-center text-sm sm:text-base lg:text-lg font-semibold">
          Get access to safe transactions, transparent pricing and trustworthy
          supplier
        </h1>
      </div>
    </div>
  );
};

export default NewBanner;