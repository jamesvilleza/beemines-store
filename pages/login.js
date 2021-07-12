import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { withSession } from "../middlewares/session";
import Link from "next/link";

const login = ({ user }) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({
          username: data.username,
          password: data.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white shadow-lg rounded-2xl px-12 py-16 pt-10 mt-20 mb-2"
          >
            <img
              className="w-24 flex mx-auto mb-4"
              src="beemines-logo.png"
              alt="logo"
            />
            <div className="text-gray-800 text-2xl font-semibold flex justify-center py-2 mb-10">
              Sign in
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-500 text-sm font-normal mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none w-full"
                name="username"
                type="text"
                {...register("username", { required: true })}
              />
              {errors.username && (
                <span className="text-red-300">Username is required</span>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-500 text-sm font-normal mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="appearance-none border border-gray-300 rounded-lg py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline w-full"
                type="password"
                name="password"
                {...register("password", {
                  required: true,
                })}
              />

              {errors.password?.type === "required" && (
                <span className="text-red-300">Password is required</span>
              )}
            </div>
            <div className="flex-col items-center justify-between">
              <button
                className="px-4 py-2 rounded-xl text-white inline-block shadow-lg bg-yellow-500 focus:bg-yellow-600 w-full"
                type="submit"
              >
                Sign In
              </button>

              <p className="text-sm mt-8 text-center text-gray-500">
                <span>Don't have an account yet? </span>
                <Link href="/register">
                  <a className="cursor-pointer hover:underline">Sign up</a>
                </Link>
              </p>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2020 Ecommerce. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = withSession((context) => {
  const { req } = context;

  if (req.session.get("user") && req.session.get("user").token) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: {},
    };
  }

  return {
    props: {
      user: req.session.get("user") || null,
    },
  };
});

export default login;
