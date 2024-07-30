"use client";
import Link from "next/link";
import { FC } from "react";

import clsx from "clsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useIsOpen } from "@/hooks/useIsOpen";
import { Button } from "./Button";
import { IconNameEnum, SVG_Controller } from "./SVG_Controller";

const registerSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});
const loginSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

type AuthFormProps = {
  type: "login" | "register";
};

type FormData = {
  name?: string;
  email: string;
  password: string;
};

export const AuthForm: FC<AuthFormProps> = ({ type }) => {
  const schema = type === "register" ? registerSchema : loginSchema;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const { isOpen, toggleIsOpen } = useIsOpen();

  const isRegisterForm = type === "register";

  return (
    <div
      className={clsx(
        "onlyMobile:flex-[1] py-8 px-4  bg-olive/10 rounded-t-[25px]",
        "tablet:rounded-[25px] tablet:py-12 tablet:px-16",
        " desktop:w-[628px] desktop:h-fit"
      )}
    >
      <h3
        className={clsx(
          "mb-4 tablet:mb-5",
          "text-[30px]/[32px] desktop:text-[40px]/[48px]"
        )}
      >
        {isRegisterForm ? "Register" : "Login"}
      </h3>
      <p
        className={clsx(
          "mb-4  tablet:mb-8",
          "text-black/80 text-[16px]/[24px] desktop:text-[20xp]/[30px]"
        )}
      >
        {isRegisterForm
          ? "To start using our services, please fill out the registration form below. All fields are mandatory:"
          : "Please enter your login details to continue using our service:"}
      </p>
      <form
        className="flex flex-col gap-3 tablet:gap-[18px]"
        onSubmit={handleSubmit((data) => {
          console.log(data);
          reset();
        })}
      >
        {isRegisterForm && (
          <label>
            <input
              type="text"
              {...register("name")}
              placeholder="Name"
              className={clsx("input", errors?.name && "border-red-500")}
            />
            {errors?.name && (
              <span className="text-red-500">{errors.name?.message}</span>
            )}
          </label>
        )}
        <label>
          <input
            type="email"
            {...register("email")}
            placeholder="Email"
            className={clsx("input", errors.email && "border-red-500")}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email?.message}</span>
          )}
        </label>
        <label className="relative">
          <input
            type={isOpen ? "text" : "password"}
            {...register("password")}
            placeholder="Password"
            className={clsx("input", errors.password && "border-red-500")}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password?.message}</span>
          )}
          <button
            type="button"
            className="absolute top-4 right-4"
            onClick={toggleIsOpen}
          >
            {isOpen ? (
              <SVG_Controller
                name={IconNameEnum.eyeOn}
                className="w-5 h-5 fill-transparent stroke-black"
              />
            ) : (
              <SVG_Controller
                name={IconNameEnum.eyeOff}
                className="w-5 h-5 fill-transparent stroke-black"
              />
            )}
          </button>
        </label>
        <Button
          text={isRegisterForm ? "Register" : "Login"}
          type="submit"
          className={clsx(
            "mb-4 tablet:mt-[14px]",
            "bg-olive text-white-second"
          )}
        />
      </form>
      <Link
        className="flex justify-center text-black/50 underline underline-offset-2"
        href={`/${isRegisterForm ? "login" : "register"}`}
      >
        {isRegisterForm ? "Login" : "Register"}
      </Link>
    </div>
  );
};

export default AuthForm;
