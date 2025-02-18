import Image from "next/image";

import { cn, handleGoToNextStep } from "@/lib/utils";
import useScrollToTop from "@/lib/hooks/useScrollToTop";

import buildingImg from "@/public/image/building-icon.png";
import homeImg from "@/public/image/house-icon.png";
import windowImg from "@/public/image/window-icon.png";

import { Button } from "@/components/ui/button";
import Container from "@/components/shared/Container";
import DayAndTimePreference from "./DayAndTimePreference";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FormikErrorBox from "@/components/form/FormikErrorBox";

const cleaningTypes = [
  { title: "Home Clean", value: "HOME_CLEAN", img: homeImg },
  { title: "Windows Clean", value: "WINDOWS_CLEAN", img: windowImg },
  {
    title: "New Building Clean",
    value: "NEW_BUILDING_CLEAN",
    img: buildingImg,
  },
];

const labels = [
  "cleaning_type",
  "room_count",
  "bathroom_count",
  "kitchen_count",
  "kitchen_cleaning_preference",
  "have_lift",
];

export default function OfficeCleaningInfoOne({ formik, setCurrentStep }) {
  useScrollToTop();

  const handleKitchenCleaningPreference = (value) => {
    formik.setFieldValue(
      "kitchen_cleaning_preference",
      value.toUpperCase().split(" ").join("_"),
    );
  };

  return (
    <>
      <div className="flex min-h-16 items-center bg-primary text-2xl font-semibold text-black md:h-20 md:text-2xl lg:mt-10">
        <p className="mx-auto w-full max-w-7xl px-5 py-2">Office Cleaning</p>
      </div>

      <Container extraClassName="flex flex-col gap-6">
        <div>
          <p className="mb-5 mt-5 text-xl font-semibold ">
            What type of cleaning you want?
          </p>

          <div className="mt-6 flex flex-wrap items-start gap-2 lg:gap-8">
            {cleaningTypes.map((type) => (
              <div
                key={type.title}
                onClick={() =>
                  formik.setFieldValue("cleaning_type", type.value)
                }
                className={`flex cursor-pointer flex-col items-center justify-center`}
              >
                <Image
                  src={type.img}
                  width={100}
                  height={100}
                  alt={type.title}
                  quality={100}
                  className={cn(
                    formik.values.cleaning_type === type.value
                      ? "border-4 border-secondary"
                      : "border-4 border-transparent",
                  )}
                />
                <p className={`mt-2 text-center font-semibold`}>{type.title}</p>
              </div>
            ))}
          </div>
          <FormikErrorBox
            formik={formik}
            field="cleaning_type"
            className={"w-full md:w-2/5"}
          />
        </div>
        <div className="w-full space-y-1">
          <Label htmlFor="room_count">Number of Bedrooms</Label>
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
          <Label htmlFor="bathroom_count">Number of Bathrooms</Label>
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
          <Label htmlFor="kitchen_count">Number of Kitchens</Label>
          <Input
            type="number"
            id="kitchen_count"
            name="kitchen_count"
            placeholder="Number of kitchens"
            className="w-full md:w-2/5"
            value={formik.values.kitchen_count}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FormikErrorBox
            formik={formik}
            field="kitchen_count"
            className={"w-full md:w-2/5"}
          />
        </div>

        <div>
          <h3 className="mb-4 text-xl font-bold">
            How would you like your kitchen cupboards and appliances to be
            cleaned?
          </h3>
          <DayAndTimePreference
            data={["Outside only", "Inside and outside", "Customize"]}
            handleClick={handleKitchenCleaningPreference}
            selected={formik.values.kitchen_cleaning_preference}
          />
          <FormikErrorBox
            formik={formik}
            field="kitchen_cleaning_preference"
            className={"w-full md:w-2/5"}
          />
        </div>

        <div>
          <p className="mb-5 text-xl font-semibold ">
            Is there a lift in your apartment/flat block?
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2 lg:gap-8">
            <div
              onClick={() => formik.setFieldValue("have_lift", true)}
              className={`w-fit cursor-pointer border-4 ${formik.values.have_lift === true && "border-secondary"}
                
                `}
            >
              <Image src="/icon/Lift.svg" width={80} height={80} alt="lift" />
            </div>
            <div
              onClick={() => formik.setFieldValue("have_lift", false)}
              className={`w-fit cursor-pointer border-4 ${formik.values.have_lift === false && "border-secondary"}`}
            >
              <Image src="/icon/Stairs.svg" width={80} height={80} alt="lift" />
            </div>
          </div>
          <FormikErrorBox
            formik={formik}
            field="have_lift"
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
            // onClick={() => setCurrentStep(5)}
            onClick={() => {
              handleGoToNextStep(labels, formik, () => {
                setCurrentStep(5);
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
