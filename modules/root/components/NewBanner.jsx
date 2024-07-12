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
    <div className="h-96 lg:min-h-screen relative">
      <div className="relative h-80 lg:h-[490px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${hero.backgroundImage})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative top-28 flex h-full flex-col items-center gap-8">
          <h1 className="text-xl text-center lg:text-4xl text-white">{hero.title}</h1>
          <QuoteDialog open={open} setOpen={setOpen} />
        </div>
      </div>
      {/* Banner Cards */}
      <div className="hidden lg:block absolute bottom-32 w-full border-b-[10px] border-[#89b77c] pb-1">
        <div className="px-4">
          <div className="grid grid-cols-3 items-center justify-between gap-4">
            {bannerCardImages.map((imageData, index) => (
              <Image
                key={index}
                src={imageData.image}
                alt="image"
                width={900}
                height={400}
                className="h-60"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-4 lg:bottom-8 flex w-full items-center justify-center">
        <h1 className="text-center lg:text-lg font-semibold">
          Get access to safe transactions, transparent pricing and trustworthy
          supplier
        </h1>
      </div>
    </div>
  );
};

export default NewBanner;
