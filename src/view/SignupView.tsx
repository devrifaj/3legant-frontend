"use client";

import Link from "next/link";
import { Form, Formik, FormikHelpers } from "formik";
import { Button, FormErrorMessage, Input } from "@/components";
import * as Yup from "yup";
import { cn } from "@/utils";
import { Check } from "lucide-react";
import { useRegisterUserMutation } from "@/redux/features/user/user.api";
import { toast } from "sonner";
import { IQueryMutationErrorResponse } from "@/types";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/hooks";
import { updateUser } from "@/redux/features/user/user.slice";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  terms: false,
};

const passwordRules = {
  length: (val: string) => val.length >= 8,
  capital: (val: string) => /[A-Z]/.test(val),
  number: (val: string) => /\d/.test(val),
  special: (val: string) => /[!@#$%^&*(),.?":{}|<>]/.test(val),
};

const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(passwordRegex, "Password must meet all rules"),
  confirmPassword: Yup.string()
    .required("Password confirmation is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
  terms: Yup.boolean()
    .oneOf([true], "You must accept the terms")
    .required("Terms and conditions are required"),
});

const SignupView = () => {
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = async (
    values: typeof initialValues,
    { resetForm }: FormikHelpers<typeof initialValues>
  ) => {
    const payload = {
      fullName: values.fullName,
      email: values.email,
      password: values.password,
      isVerified: false,
    };

    const res = await registerUser(payload);
    const error = res.error as IQueryMutationErrorResponse;
    if (error) {
      if (error.data?.message) toast.error(error.data.message || "Something went wrong");
      return;
    }
    const email = res.data?.data?.email;
    if (email) {
      dispatch(updateUser({ email, isVerified: false }));
    }
    router.push("/verification");
    toast.success("Account created successfully!", {
      description: "Please check your email for verification",
    });
    resetForm();
  };

  return (
    <div>
      <h4 className="mb-3">Sign Up</h4>
      <p className="text-neutral-4">
        Already have an account?{" "}
        <Link className="text-secondary-green" href="/sign-in">
          Sign In
        </Link>
      </p>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, errors, setFieldValue, touched, handleBlur, isValid, dirty }) => {
          const allRulesOk =
            passwordRules.length(values.password) &&
            passwordRules.capital(values.password) &&
            passwordRules.number(values.password) &&
            passwordRules.special(values.password);

          const canSubmit = allRulesOk && isValid && dirty && values.terms;

          const ruleStatus = (ok: boolean) =>
            !touched.password ? "neutral" : ok ? "valid" : "invalid";

          return (
            <Form className="mt-8 space-y-6">
              {/* full name */}
              <div>
                <Input
                  name="fullName"
                  placeholder="Your name"
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.fullName && touched.fullName && (
                  <FormErrorMessage message={errors.fullName} />
                )}
              </div>

              {/* email */}
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

                {/* Password Rules */}
                <div className="mt-2 flex flex-wrap gap-1 text-sm">
                  <RuleItem
                    status={ruleStatus(passwordRules.length(values.password))}
                    text="8 characters"
                  />
                  <RuleItem
                    status={ruleStatus(passwordRules.capital(values.password))}
                    text="1 capital letter"
                  />
                  <RuleItem
                    status={ruleStatus(passwordRules.number(values.password))}
                    text="1 number"
                  />
                  <RuleItem
                    status={ruleStatus(passwordRules.special(values.password))}
                    text="1 special character"
                  />
                </div>
              </div>

              {/* confirm password */}
              <div>
                <Input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <FormErrorMessage message={errors.confirmPassword} />
                )}
              </div>

              {/* terms and conditions */}
              <div>
                <div className="flex items-center gap-2">
                  <input
                    id="terms"
                    type="checkbox"
                    className="h-5 w-5 accent-primary-black"
                    name="terms"
                    checked={values.terms}
                    onChange={(e) => setFieldValue("terms", e.target.checked)}
                    onBlur={() => setFieldValue("terms", values.terms)}
                  />
                  <label htmlFor="terms" className="text-sm text-neutral-4">
                    I agree with{" "}
                    <Link className="font-semibold text-neutral-7" href="/privacy-policy">
                      Privacy Policy{" "}
                    </Link>
                    and{" "}
                    <Link className="font-semibold text-neutral-7" href="/terms-and-conditions">
                      Terms of Use
                    </Link>
                  </label>
                </div>
                {touched.terms && errors.terms && <FormErrorMessage message={errors.terms} />}
              </div>
              {/* submit button */}
              <Button
                fullWidth
                type="submit"
                disabled={!canSubmit || isLoading}
                loading={isLoading}
                loadingText="Creating account..."
              >
                Sign Up
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

const RuleItem = ({ status, text }: { status: "neutral" | "valid" | "invalid"; text: string }) => {
  const stylesByStatus = {
    neutral: "border-neutral-4/20 bg-neutral-4/5 text-neutral-4",
    valid: "border-green-500 bg-green-500/10 text-green-600",
    invalid: "border-red-500 bg-red-500/10 text-red-500",
  };

  return (
    <span
      className={cn(
        "flex items-center gap-1 rounded-full border px-2 py-[2px] text-xs transition-colors",
        stylesByStatus[status]
      )}
    >
      {status === "valid" ? <Check className="h-4 w-4" /> : null} {text}
    </span>
  );
};

export default SignupView;
