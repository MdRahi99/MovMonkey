"use client";

import * as Yup from "yup";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Password } from "@/components/ui/password";
import { Button } from "@/components/ui/button";
import GoogleColorful from "@/components/icon/GoogleColorful";
import Container from "@/components/shared/Container";
import Link from "next/link";
import { useFormik } from "formik";
import { useState } from "react";
import FormikErrorBox from "@/components/form/FormikErrorBox";
import ApiKit from "@/common/ApiKit";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export default function SignUpPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      phone: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setLoading(true);

      const payload = {
        ...values,
        phone: values.phone.startsWith("+") ? values.phone : `+${values.phone}`,
      };

      const promise = ApiKit.auth
        .customerRegister(payload)
        .then(() => {
          formik.resetForm();
          router.push("/sign-in");
        })
        .catch((error) => {
          throw error;
        })
        .finally(() => setLoading(false));

      toast.promise(promise, {
        loading: "Registering...",
        success: "Registration successful",
        error: (error) => {
          const errorKeys = Object.keys(error?.response?.data);
          return (
            error.response?.data[errorKeys[0]][0] ||
            error.response.data?.detail ||
            "Registration failed"
          );
        },
      });
    },
  });

  return (
    <div className="bg-secondary-bg">
      <Container>
        <div>
          <div className="mx-auto w-full max-w-lg select-none rounded-md bg-white px-5 py-10 md:w-6/12 lg:px-10 xl:w-7/12">
            <h3 className="my-1 text-2xl font-semibold md:mt-4 lg:text-4xl">
              User Sign Up
            </h3>
            <p className="text-[#8C8C8C] max-sm:text-sm">
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="cursor-pointer font-semibold text-black underline"
              >
                Login
              </Link>
            </p>

            <div className="mt-2 lg:mt-6">
              <form
                className="space-y-1 lg:space-y-3"
                onSubmit={formik.handleSubmit}
              >
                <div className="flex flex-col items-center justify-between gap-1 xs:flex-row sm:gap-3">
                  <div className="w-full space-y-1">
                    <Label htmlFor="first_name">First Name</Label>
                    <Input
                      type="text"
                      id="first_name"
                      placeholder="E.g. John"
                      values={formik.values.first_name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <FormikErrorBox formik={formik} field={"first_name"} />
                  </div>

                  <div className="w-full space-y-1">
                    <Label htmlFor="last_name">Last Name</Label>
                    <Input
                      type="text"
                      id="last_name"
                      placeholder="E.g. Doe"
                      values={formik.values.first_name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <FormikErrorBox formik={formik} field="last_name" />
                  </div>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    type="text"
                    id="username"
                    placeholder="Enter your username"
                    values={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <FormikErrorBox formik={formik} field="username" />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="text"
                    id="email"
                    placeholder="Enter your email"
                    values={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <FormikErrorBox formik={formik} field="email" />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="phone">Phone</Label>
                  <PhoneInput
                    country={"gb"}
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone"
                    onChange={(formattedValue) => {
                      formik.setFieldValue("phone", formattedValue);
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                  />
                  <FormikErrorBox formik={formik} field="phone" />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Password
                    id="password"
                    placeholder="Enter your password"
                    values={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <FormikErrorBox formik={formik} field="password" />
                </div>

                <div className="flex justify-center">
                  <Button
                    type="submit"
                    className="mt-5 px-16 lg:mt-2"
                    disabled={loading}
                  >
                    Register Now
                  </Button>
                </div>
              </form>

              <div className="relative py-3 lg:py-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-[#8C8C8C]">
                    Or continue with
                  </span>
                </div>
              </div>

              <Button className="w-full bg-[#F5F5F5] text-[#6F6F6F] hover:bg-[#F5F5F5]/90">
                <div>
                  <GoogleColorful className="mr-2 flex h-5 w-5 items-center" />
                </div>
                Sign in With Google
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
