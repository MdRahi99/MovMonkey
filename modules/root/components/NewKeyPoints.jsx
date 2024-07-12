import Image from "next/image";
import React from "react";
import img1 from "../../../public/image/banner-card-1.jpeg";

const cardData = [
  {
    title: "Customer privacy and safety",
    image: img1,
    description: "Tired of waking up to unwanted emails from every Tom, Dick, and Harry you didn't sign up for? MovMonkey respects your privacy more than your ex ever did. We promise not to share your private details with just anyone. Your details are shared only with the service provider you handpick—and not a soul more."
  },
  {
    title: "Secure Payment System",
    image: img1,
    description: "Imagine if your money had its own personal bodyguard. That's MovMonkey for you! We keep your payment on our secure payment platform, only letting it out once you and the service provider agree on a job well done."
  },
  {
    title: "Mileage Estimation",
    image: img1,
    description: "Say goodbye to surprise fees! With our transparent mileage calculation, the only shock you'll get is how fair our prices are. Our tech makes sure your bill reflects the actual mileage of your goods."
  },
  {
    title: "Real-Time Van Tracking",
    image: img1,
    description: "Our real-time tracking feature is so good; you'll feel like you're on the road with your goods. Minus the tight seats, of course. All you have to do is sit back and watch your items move from point A to point B, all from the comfort of your chair."
  },
  {
    title: "Ratings for Drivers & Service Providers",
    image: img1,
    description: "Giving your stuff to someone you don't trust or know can be challenging. We get it. That's why we make our drivers' and service providers' ratings available to you. So, choose wisely and rest easy, knowing you're in capable hands."
  },
  {
    title: "Instant Quotes",
    image: img1,
    description: "Need a quote? Just send your quote request and watch as up to 4 offers from our vetted, top-notch service providers flood in quotes as soon as possible."
  },
  {
    title: "Upload Images and/or Videos",
    image: img1,
    description: "Got special items that need extra care? Use our videos and images upload feature to share pictures, or short videos of your precious goods and attract the perfect service provider who knows exactly what you need. Safe to say, our secure payment system is the ultimate peacekeeper, making sure you and the service provider are on the same page before any funds make their grand exit."
  }
];

const NewKeyPoints = () => {
  return (
    <div className="bg-[#F9A12E] py-4">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="font-semibold text-lg">Why MovMonkey?</h1>
        <p className="font-medium">Here is what makes us different</p>
      </div>

      <div className="grid grid-cols-3 gap-4 px-4 py-6 max-w-5xl mx-auto">
        {cardData.map((data, index) => (
          <div 
            key={index} 
            className={`flex flex-col justify-center gap-8 items-center bg-[#fdf8f0] p-4 rounded-lg shadow-md 
            ${index === cardData.length - 1 ? "col-span-3" : ""}`}
          >
            <h2 className="font-semibold">{data.title}</h2>
            <Image src={data.image} alt={data.title} width={180} height={180} className="" />
            <p className="text-center text-sm h-40">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewKeyPoints;
