import React from "react";
import Container from "./Container";
import HomeIcon from "../icon/Home";
import Phone from "../icon/Phone";
import Mail from "../icon/Mail";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import footer_logo from "@/public/logo/footer-logo.png";
import Image from "next/image";
import Link from "next/link";

export default function BaseFooter() {
  return (
    <div className="bg-secondary text-white">
      <Container>
        <div className="flex flex-col space-y-6 md:flex-row lg:gap-20 lg:space-y-0">
          <div className="md:w-1/3">
            <Image src={footer_logo} alt="footer logo" quality={100} />
            <div className="mt-4 space-y-1 sm:mt-0">
              <Link href="/about-us" className="block w-fit hover:underline">
                About us
              </Link>
              <Link href="/contact" className="block w-fit hover:underline">
                Contact us
              </Link>
              <Link href="/faq" className="block w-fit hover:underline">
                FAQ (Frequently Asked Questions)
              </Link>
              <Link
                href="/privacy-policy"
                className="block w-fit hover:underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-condition"
                className="block w-fit hover:underline"
              >
                Terms & Condition (Customers)
              </Link>
              <Link
                href="/drivers-cleaners-terms"
                className="block w-fit hover:underline"
              >
                Terms & Condition (Drivers/Cleaners)
              </Link>
            </div>
          </div>

          <div className="mt-8 sm:mt-0 md:w-1/3">
            <h1 className="text-lg font-semibold">Contacts :</h1>
            <div className="mt-2 space-y-2 lg:mt-8 lg:space-y-5">
              <div className="flex items-start gap-3">
                <HomeIcon />
                <p className="w-44">
                  366 Wheatley Cres PE28 4XN Cambridgeshire - UK
                </p>
              </div>
              <Link
                href="tel:+01-48039349"
                className="flex w-fit items-center gap-3"
              >
                <Phone />
                <p>+01-48039349</p>
              </Link>
              <Link
                href="mailto:support@movmonkey.com"
                className="flex w-fit items-center gap-3"
              >
                <Mail />
                <p>support@movmonkey.com</p>
              </Link>
            </div>
          </div>

          <div className="md:w-1/3">
            <h1 className="text-lg font-semibold">Subscribe to us:</h1>
            <div className="flex-col">
              <Input
                type="text"
                placeholder="Please enter your email to subscribe"
                className="mt-2 h-12 max-w-80 bg-[#CBCBCB] text-black placeholder:line-clamp-1 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 lg:mt-8"
              />
              <div className="flex max-w-80 lg:justify-center">
                <Button className="mt-5 text-black">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
