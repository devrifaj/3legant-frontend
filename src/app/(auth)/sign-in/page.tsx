"use client";

import Link from "next/link";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Button, FormErrorMessage, Input } from "@/components";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignInPage = () => {
  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
  };

  return (
    <div>
      <h4 className="mb-3">Sign In</h4>
      <p className="text-neutral-4">
        Don&apos;t have an account yet?{" "}
        <Link className="text-secondary-green" href="/sign-up">
          Sign Up
        </Link>
      </p>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, errors, handleBlur, touched }) => {
          return (
            <Form className="mt-8 space-y-6">
              {/* email */}
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && <FormErrorMessage message={errors.email} />}
              </div>

              {/* password */}
              <div>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password && (
                  <FormErrorMessage message={errors.password} />
                )}
              </div>

              <div className="flex justify-end">
                <Link
                  className="font-medium text-neutral-7 underline hover:text-neutral-7/80"
                  href="/forgot-password"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* submit button */}
              <Button
                className="w-full"
                type="submit"
                disabled={Boolean(
                  errors.email && touched.email && errors.password && touched.password
                )}
              >
                Sign In
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignInPage;
