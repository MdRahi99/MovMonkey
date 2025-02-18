import Image from "next/image";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import ApiKit from "@/common/ApiKit";
import { cn, handleGoToNextStep } from "@/lib/utils";
import useScrollToTop from "@/lib/hooks/useScrollToTop";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Container from "@/components/shared/Container";
import FormikErrorBox from "@/components/form/FormikErrorBox";
import Loading from "@/components/shared/Loading";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const checkboxItems = [
  {
    label: "Cleaning all internal windows and glass",
    field: "internal_windows_and_glass_cleaning",
  },
  {
    label: "Dusting & removing cobwebs",
    field: "dusting_and_cobweb_removal",
  },
  {
    label: "Dusting & cleaning all shades, switches, and sockets",
    field: "shades_switches_sockets_cleaning",
  },
  {
    label:
      "Washing down all the paint work (doors, windows sills, skirting boards)",
    field: "paintwork_washing",
  },
  {
    label: "Deep cleaning of kitchen. including the oven, hob, and cooker hood",
    field: "kitchen_deep_cleaning",
  },
  {
    label:
      "Any white goods. If possible, pull out the white goods and clean behind",
    field: "white_goods_cleaning",
  },
  {
    label:
      "Cleaning the kitchen cupboards inside and out. Cleaning all the surfaces",
    field: "kitchen_cupboards_cleaning",
  },
  {
    label: "Deep cleaning and removing the line scale from the bathrooms",
    field: "bathroom_deep_cleaning",
  },
  {
    label: "All hard floors are vacuumed and then washed",
    field: "hard_floor_cleaning",
  },
  {
    label: "All carpeted floors are vacuumed",
    field: "carpeted_floor_cleaning",
  },
];

const labels = ["category_slug", "room_count", "bathroom_count", "level_count"];

export default function TenancyInfoOne({ formik, setCurrentStep, setSubStep }) {
  useScrollToTop();

  useEffect(() => {
    formik.setFieldValue("category_slug", null);
  }, []);

  const { data: cleaningCategories, isLoading } = useQuery({
    queryKey: ["cleaning"],
    queryFn: () =>
      ApiKit.public.category.getCleaningServices().then(({ data }) => data),
  });

  if (isLoading) {
    return <Loading />;
  }

  const tenancySubCategories = cleaningCategories?.results[2].options;

  return (
    <>
      <div className="flex min-h-16 items-center bg-primary text-2xl font-semibold text-black md:h-20 md:text-2xl lg:mt-10">
        <p className="mx-auto w-full max-w-7xl px-5 py-2">End Of Tenancy</p>
      </div>

      <Container extraClassName="flex flex-col gap-6">
        <div>
          <p className="mb-5 mt-10 text-xl font-semibold">
            Please tell us about your place*
          </p>

          <div>
            <div className="mt-6 flex flex-wrap items-start gap-2 lg:gap-8">
              {tenancySubCategories?.map((category) => (
                <div
                  key={category.slug}
                  onClick={() =>
                    formik.setFieldValue("category_slug", category.slug)
                  }
                  className={`flex cursor-pointer flex-col items-center justify-start`}
                >
                  <Image
                    src={category.image}
                    width={100}
                    height={100}
                    alt={category.title}
                    quality={100}
                    className={cn(
                      "size-24 rounded-full object-cover",
                      formik.values.category_slug === category.slug
                        ? "border-4 border-secondary"
                        : "border-4 border-transparent",
                    )}
                  />
                  <p className={`mt-2 text-center font-semibold`}>
                    {category.title}
                  </p>
                </div>
              ))}
            </div>
            <FormikErrorBox
              formik={formik}
              field="category_slug"
              className={"w-full md:w-2/5"}
            />
          </div>
        </div>

        <div>
          <p className="mb-5 text-xl font-semibold">This include all below</p>

          <div className="space-y-4">
            {checkboxItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 pt-2 lg:pt-0"
              >
                <Checkbox
                  id={item.field}
                  className="size-6 rounded-sm border-2 border-secondary data-[state=checked]:bg-secondary data-[state=checked]:text-white"
                  onClick={() => {
                    formik.setFieldValue(
                      item.field,
                      !formik.values[item.field],
                    );
                  }}
                />
                <label htmlFor={item.field} className="cursor-pointer text-lg">
                  {item.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full space-y-1">
          <Label htmlFor="room_count">NUMBER OF BEDROOMS</Label>
          <Input
            type="number"
            id="room_count"
            name="room_count"
            placeholder="Number of bedrooms"
            className="w-full md:w-2/5"
            value={formik.values.room_count}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FormikErrorBox
            formik={formik}
            field="room_count"
            className={"w-full md:w-2/5"}
          />
        </div>
        <div className="w-full space-y-1">
          <Label htmlFor="bathroom_count">NUMBER OF BATHROOMS?</Label>
          <Input
            type="number"
            id="bathroom_count"
            name="bathroom_count"
            placeholder="Number of bathrooms"
            className="w-full md:w-2/5"
            value={formik.values.bathroom_count}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FormikErrorBox
            formik={formik}
            field="bathroom_count"
            className={"w-full md:w-2/5"}
          />
        </div>

        <div className="w-full space-y-1">
          <Label htmlFor="level_count">HOW MANY LEVELS?</Label>
          <Input
            type="number"
            id="level_count"
            name="level_count"
            placeholder="Number of bathrooms"
            className="w-full md:w-2/5"
            value={formik.values.level_count}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FormikErrorBox
            formik={formik}
            field="level_count"
            className={"w-full md:w-2/5"}
          />
        </div>

        <div className="mt-8 flex items-center justify-between gap-5">
          <Button
            onClick={() => setCurrentStep(3)}
            type="button"
            variant="accent"
            className="w-full sm:w-fit  sm:px-20"
          >
            Back
          </Button>
          <Button
            onClick={() => {
              handleGoToNextStep(labels, formik, () => {
                setSubStep(1);
              });
            }}
            type="button"
            className="w-full sm:w-fit  sm:px-20"
          >
            Next
          </Button>
        </div>
      </Container>
    </>
  );
}
