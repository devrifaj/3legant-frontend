"use client";

import { Button, FormErrorMessage, Input } from "@/components";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const ForgotPasswordView = () => {
  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
  };

  return (
    <div>
      <h4 className="mb-3">Forgot Password</h4>
      <p className="text-neutral-4">
        Forgot your password? No problem. Just let us know which email you used to sign up and
        we&apos;ll send you a reset link.
      </p>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, errors, handleBlur, touched, isValid }) => {
          return (
            <Form className="mt-8 space-y-6">
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && <FormErrorMessage message={errors.email} />}
              </div>
              <Button disabled={!isValid} type="submit">
                Send Reset Link
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ForgotPasswordView;
