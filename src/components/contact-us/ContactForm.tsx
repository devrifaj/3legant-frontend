"use client";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { FormErrorMessage } from "@/components";

const initialValues = {
  fullName: "",
  email: "",
  message: "",
};

export const contactFormSchema = Yup.object({
  fullName: Yup.string()
    .required("Full name is required")
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name cannot exceed 50 characters")
    .trim()
    .matches(/^[a-zA-Z\s]+$/, "Full name can only contain letters and spaces"),

  email: Yup.string()
    .required("Email address is required")
    .email("Please enter a valid email address")
    .max(100, "Email address cannot exceed 100 characters")
    .trim()
    .lowercase(),

  message: Yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message cannot exceed 1000 characters")
    .trim(),
});

const ContactForm = () => {
  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactFormSchema}
    >
      {({ errors, isSubmitting, touched, handleBlur }) => {
        return (
          <Form className="w-full md:w-1/2">
            <div className="mb-4 flex flex-col gap-4 lg:mb-6 lg:gap-6">
              {/* full name */}
              <div>
                <span className="mb-3 inline-block text-xs font-bold text-neutral-4 uppercase">
                  Full Name
                </span>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Your Name"
                  className="input-secondary"
                  onBlur={handleBlur}
                />
                {touched.fullName && errors.fullName && (
                  <FormErrorMessage message={errors.fullName} />
                )}
              </div>

              {/* email */}
              <div>
                <span className="mb-3 inline-block text-xs font-bold text-neutral-4 uppercase">
                  Email address
                </span>
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="input-secondary"
                  onBlur={handleBlur}
                />
                {touched.email && errors.email && <FormErrorMessage message={errors.email} />}
              </div>

              {/* message */}
              <div>
                <span className="mb-3 inline-block text-xs font-bold text-neutral-4 uppercase">
                  message
                </span>
                <textarea
                  placeholder="Your message"
                  className="input-secondary"
                  name="message"
                  onBlur={handleBlur}
                />
                {touched.message && errors.message && <FormErrorMessage message={errors.message} />}
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              {/* submit button */}
              <button
                disabled={isSubmitting}
                type="submit"
                className="w-auto rounded-lg bg-neutral-7 px-10 py-2 text-white"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
