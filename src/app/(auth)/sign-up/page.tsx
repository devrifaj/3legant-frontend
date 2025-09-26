import { SignupView } from "@/view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | 3legant",
  description: "Signup to 3legant",
};

const SignupPage = () => {
  return <SignupView />;
};

export default SignupPage;
