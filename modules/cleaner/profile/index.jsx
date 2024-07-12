"use client";

import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

import { Pencil } from "lucide-react";

import ApiKit from "@/common/ApiKit";

import { Button } from "@/components/ui/button";
import Container from "@/components/shared/Container";
import Loading from "@/components/shared/Loading";
import userPlaceHolder from "@/public/image/user-placeholder-green.png";

export default function CleanerProfilePage() {
  const { data, isLoading } = useQuery({
    queryKey: ["me.getProfile"],
    queryFn: () => ApiKit.me.getProfile().then(({ data }) => data),
  });

  if (isLoading) {
    return <Loading className="min-h-[calc(100vh-8rem)]" />;
  }

  return (
    <div className="min-h-[calc(100vh-80px)]">
      <Container>
        <h4 className="text-2xl font-bold lg:text-4xl">Cleaner Profile</h4>

        <div className="mt-5 flex gap-5 max-xs:flex-col xs:items-center xs:justify-between">
          <div className="flex items-center gap-5">
            <div className="size-16 lg:size-24">
              <Image
                src={
                  Object?.keys(data?.avatar)?.length
                    ? data?.avatar["at350x350"]
                    : userPlaceHolder
                }
                width={350}
                height={350}
                className="size-16 rounded-full border-2 border-secondary lg:size-24"
                alt="user avatar"
              />
            </div>
            <div>
              <h4 className="text-lg font-semibold lg:text-2xl">
                {data?.full_name}
              </h4>
              <p className="text-base lg:text-xl">{data?.email}</p>
              {/* <p className="text-base text-[#0588d1] lg:text-xl">
                {data?.job_count} {data?.count > 1 ? "Jobs" : "Job"} posted
              </p> */}
            </div>
          </div>
          <div className="max-xs:w-full">
            <Link href={"/cleaner/profile/edit"} className="block">
              <Button variant="secondary" className="gap-2 max-xs:w-full">
                <div>
                  <Pencil className="size-5" />
                </div>
                Edit Profile
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
