"use client";

import { Button, FormErrorMessage, Input } from "@/components";
import { Form, Formik } from "formik";
import * as yup from "yup";

const initialValues = {
  otp: "",
};

const validationSchema = yup.object({
  otp: yup.string().required("OTP is required").min(6, "OTP must be 6 digits"),
});

const VerificationPage = () => {
  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
  };
  return (
    <div>
      <h4 className="mb-3">Email Verification</h4>
      <p className="text-neutral-4">Verify your email address to continue.</p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, errors, handleBlur, touched }) => {
          return (
            <Form className="mt-8 space-y-6">
              {/* otp */}
              <div>
                <Input
                  name="otp"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={6}
                  placeholder="Enter 6-digit OTP"
                  value={values.otp}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "");
                    handleChange({
                      target: {
                        name: "otp",
                        value: val,
                      },
                    });
                  }}
                  onBlur={handleBlur}
                />

                {errors.otp && touched.otp && <FormErrorMessage message={errors.otp} />}
              </div>
              {/* submit button */}
              <Button
                disabled={Boolean(errors.otp) && Boolean(touched.otp)}
                type="submit"
                loadingText="Verifying..."
              >
                Verify
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default VerificationPage;
