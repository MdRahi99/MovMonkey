"use client";

import ApiKit from "@/common/ApiKit";
import Container from "@/components/shared/Container";
import Loading from "@/components/shared/Loading";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import userPlaceHolder from "@/public/image/user-placeholder-green.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function CustomerProfilePage() {
  const [activeTab, setActiveTab] = useState("actives");
  const { data, isLoading } = useQuery({
    queryKey: ["me.getProfile"],
    queryFn: () => ApiKit.me.getProfile().then(({ data }) => data),
  });

  const { data: activeJobs, isLoading: activeJobsLoading } = useQuery({
    queryKey: ["/me/jobs/actives"],
    queryFn: () => ApiKit.me.job.active.getJobs().then(({ data }) => data),
  });

  const { data: completedJobs, isLoading: completedJobsLoading } = useQuery({
    queryKey: ["/me/jobs/completed"],
    queryFn: () => ApiKit.me.job.completed.getJobs().then(({ data }) => data),
  });

  if (isLoading || activeJobsLoading || completedJobsLoading) {
    return <Loading className="min-h-[calc(100vh-8rem)]" />;
  }

  return (
    <div className="min-h-[calc(100vh-80px)]">
      <Container>
        <h4 className="text-2xl font-bold lg:text-4xl">User Profile</h4>

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
              <p className="text-base text-[#0588d1] lg:text-xl">
                {data?.job_count} {data?.count > 1 ? "Jobs" : "Job"} posted
              </p>
            </div>
          </div>
          <div className="max-xs:w-full">
            <Link href={"/profile/edit"} className="block">
              <Button variant="secondary" className="gap-2 max-xs:w-full">
                <div>
                  <Pencil className="size-5" />
                </div>
                Edit Profile
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-5">
          <Tabs
            defaultValue={activeTab}
            onValueChange={() => {
              setActiveTab(activeTab);
            }}
            value={activeTab}
          >
            <TabsList>
              <TabsTrigger
                onClick={() => setActiveTab("actives")}
                value="actives"
              >
                Active Jobs
              </TabsTrigger>
              <TabsTrigger
                onClick={() => setActiveTab("completed")}
                value="completed"
              >
                Completed Jobs
              </TabsTrigger>
            </TabsList>
            <TabsContent value="actives" className="ml-2">
              <p className="mb-2 text-base font-medium text-[#0588d1]">
                {activeJobs?.count} Active{" "}
                {activeJobs?.count > 1 ? "Jobs" : "Job"}
              </p>
              {activeJobs?.results?.length
                ? activeJobs?.results?.map((job) => (
                    <Link
                      href={`/profile`}
                      key={job?.uid}
                      className="mb-3 block w-fit cursor-pointer rounded-lg bg-primary px-2 font-semibold max-lg:py-2 lg:rounded-full lg:px-4 lg:py-1"
                    >
                      • {job?.title}
                    </Link>
                  ))
                : "No active jobs found."}
            </TabsContent>
            <TabsContent value="completed" className="ml-2">
              <p className="mb-2 text-base font-medium text-[#0588d1]">
                {completedJobs?.count} Completed{" "}
                {completedJobs?.count > 1 ? "Jobs" : "Job"}
              </p>
              {completedJobs?.results?.length
                ? completedJobs?.results?.map((job) => (
                    <Link
                      href={`/profile`}
                      key={job?.uid}
                      className="mb-3 block w-fit cursor-pointer rounded-lg bg-primary px-2 font-semibold max-lg:py-2 lg:rounded-full lg:px-4 lg:py-1"
                    >
                      • {job?.title}
                    </Link>
                  ))
                : "No completed jobs found."}
            </TabsContent>
          </Tabs>
        </div>
      </Container>
    </div>
  );
}
