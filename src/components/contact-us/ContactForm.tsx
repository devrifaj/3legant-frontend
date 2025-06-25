"use client";
import { contactFormSchema } from "@/libs/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof contactFormSchema>> = (data) => {
    console.log(data);
  };

  return (
    <form className="md:w-1/2 w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col lg:gap-6 gap-4 lg:mb-6 mb-4">
        {/* full name */}
        <div>
          <span className="text-xs font-bold text-neutral-4 uppercase inline-block mb-3">
            Full Name
          </span>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-black-300 rounded-md py-[7px] px-4 w-full text-[#6C7275]"
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="form-validation-error">{errors.fullName.message}</p>
          )}
        </div>

        {/* email */}
        <div>
          <span className="text-xs font-bold text-neutral-4 uppercase inline-block mb-3">
            Email address
          </span>
          <input
            type="email"
            placeholder="Your Email"
            className="border border-black-300 rounded-md py-[7px] px-4 w-full text-[#6C7275]"
            {...register("email")}
          />
          {errors.email && (
            <p className="form-validation-error">{errors.email.message}</p>
          )}
        </div>

        {/* message */}
        <div>
          <span className="text-xs font-bold text-neutral-4 uppercase inline-block mb-3">
            message
          </span>
          <textarea
            placeholder="Your message"
            className="border border-black-300 rounded-md py-[7px] px-4 w-full text-[#6C7275] h-[140px]"
            {...register("message")}
          />
          {errors.message && (
            <p className="form-validation-error">{errors.message.message}</p>
          )}
        </div>
      </div>
      <div className="flex justify-center md:justify-start">
        {/* submit button */}
        <button
          disabled={isSubmitting}
          type="submit"
          className="text-white bg-neutral-7 rounded-lg py-2 px-10 w-auto "
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
