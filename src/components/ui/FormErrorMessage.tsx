"use client";

import { Info } from "lucide-react";
type FormErrorMessageProps = {
  message: string;
  icon?: React.ReactNode;
};

export default function FormErrorMessage({
  message,
  icon = <Info className="inline-block h-3.5 w-3.5 text-red-500" />,
}: FormErrorMessageProps) {
  return (
    <p className="form-validation-error flex items-center gap-1">
      {icon && message && icon}
      {message}
    </p>
  );
}
