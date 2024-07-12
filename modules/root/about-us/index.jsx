import Container from "@/components/shared/Container";
import Image from "next/image";
import userFriendly from "@/public/image/user-friendly.png";

import card1 from "@/public/image/about-card-1.jpg";
import card2 from "@/public/image/about-card-2.jpg";
import card3 from "@/public/image/about-card-3.jpg";
import card4 from "@/public/image/about-card-4.jpg";
import card5 from "@/public/image/about-card-5.jpg";
import card6 from "@/public/image/about-card-6.jpg";

import Link from "next/link";
import DarkFacebook from "@/components/icon/DarkFacebook";
import DarkTwitter from "@/components/icon/DarkTwitter";
import DarkInstagram from "@/components/icon/DarkInstagram";
import DarkYoutube from "@/components/icon/DarkYoutube";

export default function AboutUsPage() {
  return (
    <div className="mt-5 lg:mt-20 ">
      <Container>
        <div className="relative rounded bg-primary text-black">
          <div className="mx-auto space-y-4 px-5 py-5 lg:py-20 2xl:max-w-5xl">
            <h3 className="text-2xl font-semibold lg:text-3xl">Who We Are</h3>
            <p className="text-xl md:text-2xl">
              {`Think of MovMonkey as a helpful neighbour. A caring neighbour who
              helps you move, delivers your stuff, or cleans up your lawn
              whenever you are away, all without any surprise costs. That's
              precisely what we do. We make moving, delivery, and cleaning
              easier, affordable, and worry-free. Tired of the “oops, we lost
              your stuff” stories, the “will they, won't they” arrive on time
              saga, and the surprise fee trap? MovMonkey ensures your things get
              where they're going safely and on time, just like a caring
              neighbour would.`}
            </p>

            <div className="flex items-center gap-2 pt-5 lg:pt-10">
              <Link href={""}>
                <DarkTwitter className="h-6 w-6 text-black" />
              </Link>
              <Link href={""}>
                <DarkFacebook className="h-6 w-6 text-black" />
              </Link>
              <Link href={""}>
                <DarkInstagram className="h-6 w-6 text-black" />
              </Link>
              <Link href={""}>
                <DarkYoutube className="h-6 w-6 text-black" />
              </Link>
            </div>
          </div>

          <div className="absolute -left-20 top-1/2 hidden h-40 w-40 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-secondary text-2xl font-semibold text-white lg:text-3xl 2xl:flex">
            About Us
          </div>
        </div>
      </Container>

      <div className="mb-2 mt-5 flex min-h-16 items-center justify-center bg-primary px-5 py-2 text-center text-2xl font-semibold text-black md:h-20 md:text-4xl lg:mt-20">
        Our Story
      </div>

      <Container>
        <p className="text-xl md:text-2xl">
          {`Imagine a world where about 65% of removal, delivery, and cleaning companies lost customers because they couldn’t get the cleaning or removal right. That was what MovMonkey's founder, Moses, saw in July 2024. As a result, he started MovMonkey with one big goal: to make sure cleaning, moving, and delivery are done the right way and at the right price. With MovMonkey, your only surprise would be how easy life just got. Watch yourself go from "Oh no" to "Oh wow" in minutes. Think we can't do that? Try us and watch us prove you wrong.`}
        </p>
      </Container>

      <div className="mb-2 mt-5 flex min-h-16 items-center justify-center bg-primary px-5 py-2 text-center text-2xl font-semibold text-black md:h-20 md:text-4xl lg:mt-20">
        Our Mission
      </div>

      <Container>
        <p className="text-xl md:text-2xl">
          {` MovMonkey’s mission is to match our customers with reliable, top-rated service providers. We are your personal service provider shopper, offering you a variety of quotes from pre-checked service providers. While we have done the heavy lifting, it's still your job to pick the one that fits your needs and wallet. Feeling stuck on choosing the right service provider for your specific needs? Oh, we know the feeling. But guess what? You are not alone.`}
        </p>
        <p className="pt-8 text-xl md:text-2xl">
          {`The good news is that MovMonkey is on a mission to change the game! Simply choose MovMonkey and enjoy a triple win:`}
        </p>

        <ul className=" list-disc pt-8 text-xl md:text-2xl">
          <li className="ml-9 block">&#8226; Quicker quote offers</li>
          <li className="ml-9 block">&#8226; Zero hidden fees</li>
          <li className="ml-9 block">
            &#8226; Access to top-rated service providers
          </li>
          <li className="ml-9 block">
            &#8226; Track your removal, delivery and cleaning job in one pot
          </li>
        </ul>
      </Container>

      <div className="mt-20 bg-primary pb-8 pt-5">
        <Container>
          <h3 className="text-center text-2xl font-semibold text-black md:text-2xl">
            Why MovMonkey?
          </h3>
          <p className="py-5 text-center text-xl md:text-2xl">
            Here is what makes us different:
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border-1 rounded-lg border bg-[#FFF2DE] px-5 py-5">
              <h1 className="line-clamp-1 text-center text-xl font-semibold">
                Customer privacy and safety
              </h1>
              <div className="flex justify-center py-8">
                <Image
                  quality={100}
                  className="aspect-auto"
                  src={card1}
                  alt="user friendly"
                />
              </div>
              <p className="text-center text-base lg:leading-7">
                {`Tired of waking up to unwanted emails from every Tom, Dick, and
                Harry you didn't sign up for MovMonkey respects your privacy
                more than your ex ever did. We promise not to share your private
                details with just anyone. Your details are shared only with the
                service provider you handpick—and not a soul more.`}
              </p>
            </div>
            <div className="border-1 rounded-lg border bg-[#FFF2DE] px-5 py-5">
              <h1 className="line-clamp-1 text-center text-xl font-semibold">
                Secure Payment System
              </h1>
              <div className="flex justify-center py-8">
                <Image
                  quality={100}
                  className="aspect-auto"
                  src={card2}
                  alt="user friendly"
                />
              </div>
              <p className="text-center text-base lg:leading-7">
                {` Imagine if your money had its own personal bodyguard. That's
                MovMonkey for you! We keep your payment on our secure payment
                platform, only letting it out once you and the service provider
                agree on a job well done.`}
              </p>
            </div>
            <div className="border-1 rounded-lg border bg-[#FFF2DE] px-5 py-5">
              <h1 className="line-clamp-1 text-center text-xl font-semibold">
                Mileage Estimation
              </h1>
              <div className="flex justify-center py-8">
                <Image
                  quality={100}
                  className="aspect-auto"
                  src={card3}
                  alt="user friendly"
                />
              </div>
              <p className="text-center text-base lg:leading-7">
                {`Say goodbye to surprise fees! With our transparent mileage calculation, the only shock you'll get is how fair our prices are. Our tech makes sure your bill reflects the actual mileage of your goods.`}
              </p>
            </div>
            <div className="border-1 rounded-lg border bg-[#FFF2DE] px-5 py-5">
              <h1 className="line-clamp-1 text-center text-xl font-semibold">
                Real-Time Van Tracking
              </h1>
              <div className="flex justify-center py-8">
                <Image
                  quality={100}
                  className="aspect-auto"
                  src={card4}
                  alt="user friendly"
                />
              </div>
              <p className="text-center text-base lg:leading-7">
                {`Our real-time tracking feature is so good; you'll feel like you're on the road with your goods. Minus the tight seats, of course. All you have to do is sit back and watch your items move from point A to point B, all from the comfort of your chair.`}
              </p>
            </div>
            <div className="border-1 rounded-lg border bg-[#FFF2DE] px-5 py-5">
              <h1 className="line-clamp-1 text-center text-xl font-semibold">
                Ratings for Drivers & Service Providers
              </h1>
              <div className="flex justify-center py-8">
                <Image
                  quality={100}
                  className="aspect-auto"
                  src={card5}
                  alt="user friendly"
                />
              </div>
              <p className="text-center text-base lg:leading-7">
                {`Giving your stuff to someone you don’t trust or know can be challenging. We get it. That's why we make our drivers’ and service providers’ ratings available to you. So, choose wisely and rest easy, knowing you're in capable hands.`}
              </p>
            </div>
            <div className="border-1 rounded-lg border bg-[#FFF2DE] px-5 py-5">
              <h1 className="line-clamp-1 text-center text-xl font-semibold">
                Instant Quotes
              </h1>
              <div className="flex justify-center py-8">
                <Image
                  quality={100}
                  className="aspect-auto"
                  src={card6}
                  alt="user friendly"
                />
              </div>
              <p className="text-center text-base lg:leading-7">
                {`Need a quote? Just send your quote request and watch as up to 4 offers from our vetted, top-notch service providers flood in quotes as soon as possible.`}
              </p>
            </div>
          </div>
          <div className="border-1 col-span-3 mt-5 rounded-lg border bg-[#FFF2DE] px-5 py-5">
            <h1 className="line-clamp-1 text-center text-xl font-semibold">
              Upload Images and/or Videos:
            </h1>
            <div className="flex justify-center py-4">
              <Image quality={100} src={userFriendly} alt="user friendly" />
            </div>
            <p className="text-center text-sm lg:px-5 lg:leading-7">
              {`Got special items that need extra care? Use our videos and images upload feature to share pictures. or short videos of your precious goods and attract the perfect service provider who knows exactly what you need. Safe to say, our secure payment system is the ultimate peacekeeper, making sure you and the service provider are on the same page before any funds make their grand exit.`}
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}
