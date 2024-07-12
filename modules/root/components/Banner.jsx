"use client";

import Image from "next/image";
import banner from "@/public/image/hero-banner.png";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CleaningIcon from "@/components/icon/CleaningIcon";
import DeliveryIcon from "@/components/icon/DeliveryIcon";
import RemovalIcon from "@/components/icon/RemovalIcon";
import { useState } from "react";
import Link from "next/link";

export default function Banner() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative ">
      <Image src={banner} alt="" className="h-48 xs:h-auto" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="space-y-5">
          <h1 className="h-auto max-w-2xl px-5 text-left text-lg font-medium !leading-tight text-white xs:max-w-3xl xs:text-center xs:text-xl xs:font-semibold sm:max-w-4xl sm:text-2xl md:max-w-5xl md:text-3xl lg:max-w-6xl lg:text-4xl xl:max-w-7xl xl:text-5xl">
            We links users with removal, delivery, and cleaning services, making
            it easier without providing these services directly.
          </h1>
          <div className="flex items-center px-5 xs:justify-center">
            <Dialog open={open} onOpenChange={setOpen} close={false}>
              <DialogTrigger asChild>
                <Button size="lg" className="hidden text-black xs:block">
                  Get a Quote
                </Button>
              </DialogTrigger>
              <DialogTrigger asChild>
                <Button
                  size="sm"
                  className="block text-xs text-black xs:hidden"
                >
                  Get a Quote
                </Button>
              </DialogTrigger>

              <DialogContent className="w-fit max-w-none">
                <h3 className="text-center text-xl font-semibold sm:text-3xl">
                  Get Quote For
                </h3>

                <div className="flex items-center justify-between gap-1 sm:mt-3 sm:gap-5">
                  <Link
                    href="/create-job/delivery-driver"
                    className="group flex cursor-pointer flex-col items-center rounded-md p-4 hover:bg-secondary sm:rounded-3xl sm:p-6"
                  >
                    <DeliveryIcon className="size-16 rounded-full bg-secondary fill-white p-4 group-hover:bg-white group-hover:fill-secondary xs:size-20 sm:size-32" />
                    <p className="mt-3 text-center text-sm font-medium group-hover:text-white xs:text-base sm:mt-6 sm:text-xl">
                      Delivery <br />
                      Service
                    </p>
                  </Link>

                  <Link
                    href="/create-job/cleaning-service"
                    className="group flex cursor-pointer flex-col items-center rounded-md p-4 hover:bg-secondary sm:rounded-3xl sm:p-6"
                  >
                    <CleaningIcon className="size-16 rounded-full bg-secondary fill-white p-4 group-hover:bg-white group-hover:fill-secondary xs:size-20 sm:size-32" />
                    <p className="mt-3 text-center text-sm font-medium group-hover:text-white xs:text-base sm:mt-6 sm:text-xl">
                      Cleaning <br />
                      Service
                    </p>
                  </Link>

                  <Link
                    href="/create-job/removal-driver"
                    className="group flex cursor-pointer flex-col items-center rounded-md p-4 hover:bg-secondary sm:rounded-3xl sm:p-6"
                  >
                    <RemovalIcon className="size-16 rounded-full bg-secondary fill-white p-4 group-hover:bg-white group-hover:fill-secondary xs:size-20 sm:size-32" />
                    <p className="mt-3 text-center text-sm font-medium group-hover:text-white xs:text-base sm:mt-6 sm:text-xl">
                      Removal <br />
                      Service
                    </p>
                  </Link>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}
