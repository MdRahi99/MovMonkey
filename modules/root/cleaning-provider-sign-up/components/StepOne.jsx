import FormikErrorBox from "@/components/form/FormikErrorBox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Password } from "@/components/ui/password";
import { useEffect } from "react";

const desiredFields = [
  "first_name",
  "last_name",
  "username",
  "address",
  "vehicle_registration_number",
  "email",
  "password",
  "driver_count",
];

export default function StepOne({
  setCurrentStep,
  formik,
  currentValidationSchema,
}) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const filteredObject = {};

  for (const key in formik.values) {
    if (desiredFields.includes(key)) {
      filteredObject[key] = formik.values[key];
    }
  }

  const handleNext = async () => {
    Object.keys(filteredObject).forEach((field) => {
      formik.setFieldTouched(field, true);
    });

    try {
      await currentValidationSchema.validate(formik.values, {
        abortEarly: false,
      });
      setCurrentStep((prevStep) => prevStep + 1);
    } catch (validationErrors) {
      const errors = {};
      validationErrors.inner.forEach((error) => {
        errors[error.path] = error.message;
      });
      formik.setErrors(errors);
    }
  };

  return (
    <div>
      <div>
        <div className="mb-6 space-y-1 lg:w-1/2">
          <Label className="sm:text-base lg:text-lg" htmlFor="first_name">
            First Name
          </Label>
          <Input
            id="first_name"
            name="first_name"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="E.g. John"
          />
          <FormikErrorBox formik={formik} field="first_name" />
        </div>

        <div className="mb-6 space-y-1 lg:w-1/2">
          <Label className="sm:text-base lg:text-lg" htmlFor="last_name">
            Last Name
          </Label>
          <Input
            id="last_name"
            name="last_name"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="E.g. Doe"
          />
          <FormikErrorBox formik={formik} field="last_name" />
        </div>

        <div className="mb-6 space-y-1 lg:w-1/2">
          <Label className="sm:text-base lg:text-lg" htmlFor="username">
            Username
          </Label>
          <Input
            id="username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="E.g. johndoe123"
          />
          <FormikErrorBox formik={formik} field="username" />
        </div>

        <div className="mb-6 space-y-1 lg:w-1/2">
          <Label className="sm:text-base lg:text-lg" htmlFor="address">
            Address
          </Label>
          <Input
            id="address"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="E.g. 1234 Main St, City, Country"
          />
          <FormikErrorBox formik={formik} field="address" />
        </div>

        <div className="mb-6 space-y-1 lg:w-1/2">
          <Label
            className="sm:text-base lg:text-lg"
            htmlFor="vehicle_registration_number"
          >
            Vehicle Registration Number
          </Label>
          <Input
            id="vehicle_registration_number"
            name="vehicle_registration_number"
            value={formik.values.vehicle_registration_number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your vehicle registration number"
          />
          <FormikErrorBox formik={formik} field="vehicle_registration_number" />
        </div>

        <div className="mb-6 space-y-1 lg:w-1/2">
          <Label className="sm:text-base lg:text-lg" htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="E.g. johndoe@gmail.com"
          />
          <FormikErrorBox formik={formik} field="email" />
        </div>

        <div className="mb-6 space-y-1 lg:w-1/2">
          <Label className="sm:text-base lg:text-lg" htmlFor="password">
            Password
          </Label>
          <Password
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your password"
          />
          <FormikErrorBox formik={formik} field="password" />
        </div>

        <div className="mb-6 space-y-5 lg:w-1/2">
          <Label className="sm:text-base lg:text-lg" htmlFor="driver_count">
            How many peoples Driving this Van/Truck
          </Label>

          <div className="mt-6 flex flex-wrap items-center gap-2 lg:gap-8">
            <div
              onClick={() => formik.setFieldValue("driver_count", 1)}
              className={`flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-4 text-lg font-bold ${formik.values.driver_count === 1 ? "border-secondary bg-secondary/10 hover:bg-secondary/10" : "hover:hover:bg-slate-50"}`}
            >
              1
            </div>
            <div
              onClick={() => formik.setFieldValue("driver_count", 2)}
              className={`flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-4 text-lg font-bold ${formik.values.driver_count === 2 ? "border-secondary bg-secondary/10 hover:bg-secondary/10" : "hover:hover:bg-slate-50"}`}
            >
              2
            </div>
            <div
              onClick={() => formik.setFieldValue("driver_count", 3)}
              className={`flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-4 text-lg font-bold ${formik.values.driver_count === 3 ? "border-secondary bg-secondary/10 hover:bg-secondary/10" : "hover:hover:bg-slate-50"}`}
            >
              3
            </div>
            <div
              onClick={() => formik.setFieldValue("driver_count", 4)}
              className={`flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-4 text-lg font-bold ${formik.values.driver_count === 4 ? "border-secondary bg-secondary/10 hover:bg-secondary/10" : "hover:hover:bg-slate-50"}`}
            >
              4
            </div>
            <div
              onClick={() => formik.setFieldValue("driver_count", 5)}
              className={`flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-4 text-lg font-bold ${formik.values.driver_count === 5 ? "border-secondary bg-secondary/10 hover:bg-secondary/10" : "hover:hover:bg-slate-50"}`}
            >
              5+
            </div>
          </div>
          <FormikErrorBox formik={formik} field="driver_count" />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-5">
        <Button
          onClick={handleNext}
          type="button"
          className="w-full sm:w-fit  sm:px-20"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
