"use client";

import ApiKit from "@/common/ApiKit";
import Container from "@/components/shared/Container";
import Loading from "@/components/shared/Loading";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { CircleChevronLeft } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const fetchJob = (kind, slug) => {
  let callToApi;
  if (kind === "delivery") {
    callToApi = ApiKit.public.job.delivery.getJob(slug);
  } else {
    callToApi = ApiKit.public.job.removal.getJob(slug);
  }
  return callToApi;
};

export default function DriverOpenJobDetailsPage({ params }) {
  const { slug } = params;
  const searchParams = useSearchParams();
  const kind = searchParams.get("kind");

  const { data: job, isLoading } = useQuery({
    queryKey: ["job", kind],
    queryFn: () => fetchJob(kind, slug).then(({ data }) => data),
  });

  if (isLoading) {
    return <Loading className="h-screen" />;
  }

  console.log(job);

  return (
    <div className="min-h-[calc(100vh-60px)] lg:min-h-[calc(100vh-80px)]">
      <div className="bg-primary text-2xl font-semibold text-black md:text-2xl lg:mt-10">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center gap-2 px-4 md:h-20">
          <Link href="/driver/open-jobs">
            <Button size="icon" variant="ghost">
              <CircleChevronLeft size={24} />
            </Button>
          </Link>
          <h3>{job?.title}</h3>
        </div>
      </div>

      <Container>
        <div className="space-y-3">
          <h2 className="text-2xl font-bold">JOB ID: {job?.slug}</h2>
          <h2 className="w-fit bg-primary p-2 text-2xl font-bold">
            Required Miles: {job?.distance?.total_distance} Miles
          </h2>
          <h2 className="w-fit bg-primary p-2 text-2xl font-bold">
            Job Execution Date: {format(job?.moving_date, "PPP")}
          </h2>
        </div>
      </Container>
    </div>
  );
}
