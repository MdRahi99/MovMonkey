/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import ApiKit from "@/common/ApiKit";

import Container from "@/components/shared/Container";
import JobList from "./components/JobList";
import JobFilters from "./components/JobFilters";
import { Input } from "@/components/ui/input";
import { sanitizeParams } from "@/lib/utils";
import Loading from "@/components/shared/Loading";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Pagination from "@/components/shared/Pagination";

const kindOptions = [
  { label: "All", value: "" },
  { label: "Delivery", value: "DELIVERY" },
  { label: "Removal", value: "REMOVAL" },
  { label: "Cleaning", value: "CLEANING" },
];

const fetchJobs = (kind, params) => {
  let callToAPI;

  switch (kind) {
    case "":
      callToAPI = ApiKit.me.job.jobList.getJobList(params);
      break;
    case "DELIVERY":
      callToAPI = ApiKit.me.job.delivery.getJobs(params);
      break;
    case "CLEANING":
      callToAPI = ApiKit.me.job.cleaning.getJobs(params);
      break;
    case "REMOVAL":
      callToAPI = ApiKit.me.job.removal.getJobs(params);
      break;
    default:
      callToAPI = ApiKit.me.job.jobList.getJobList(params);
  }

  return callToAPI;
};

export default function CreatedJobs() {
  const [jobKind, setJobKind] = useState("");
  const [params, setParams] = useState({ search: "", page: 1 });

  const {
    data: jobs,
    isLoading: isJobsLoading,
    refetch: refetchJobs,
  } = useQuery({
    queryKey: ["me/jobs"],
    queryFn: () =>
      fetchJobs(jobKind, sanitizeParams(params)).then(({ data }) => data),
  });

  useEffect(() => {
    refetchJobs();
  }, [jobKind, params]);

  useEffect(() => {
    setParams({
      page: 1,
      search: "",
    });
  }, [jobKind]);

  if (isJobsLoading) {
    return <Loading className="h-screen" />;
  }

  return (
    <div className="min-h-[calc(100vh-60px)] bg-black/10 lg:min-h-[calc(100vh-80px)]">
      <div className=" bg-primary text-2xl font-semibold text-black md:text-2xl lg:mt-10">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-4 md:h-20">
          <h3>View Quotation</h3>
          {/* <button className="flex items-center gap-1 text-base font-semibold">
            <Filter />
            <span>View All Jobs</span>
          </button> */}
        </div>
      </div>

      <Container className="mt-10">
        <JobFilters
          kindOptions={kindOptions}
          jobKind={jobKind}
          setJobKind={setJobKind}
        />
        <div className="mb-8">
          <Label htmlFor="search_job" />
          <Input
            type="text"
            placeholder="Search jobs by title..."
            id="search-jobs"
            name="search-jobs"
            onChange={(event) => {
              setParams((prevParams) => ({
                ...prevParams,
                page: 1,
                search: event.target.value,
              }));
            }}
            value={params.search}
          />
        </div>

        {jobs?.count > 0 ? (
          <>
            <JobList jobs={jobs?.results} />
            <Pagination
              params={params}
              setParams={setParams}
              totalCount={jobs?.count}
            />
          </>
        ) : (
          <p>No available jobs...</p>
        )}
      </Container>
    </div>
  );
}
