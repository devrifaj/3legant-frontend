import { ResetPasswordView } from "@/view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password | 3legant",
  description: "Reset Password | 3legant",
};

const ResetPasswordPage = () => {
  return <ResetPasswordView />;
};

export default ResetPasswordPage;
