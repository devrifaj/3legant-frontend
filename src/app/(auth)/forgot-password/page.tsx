import { ForgotPasswordView } from "@/view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password | 3legant",
  description: "Forgot Password | 3legant",
};

const ForgotPasswordPage = () => {
  return <ForgotPasswordView />;
};

export default ForgotPasswordPage;
