import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { withSession } from "../middlewares/session";
import Link from "next/link";

const register = ({ user }) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await fetch(
        `${process.env.wpURL}/wp-json/wp/v2/users/register`,
        {
          method: "POST",
          body: JSON.stringify({
            username: data.username,
            email: data.email,
            password: data.password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert("successful registration");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center">
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
            <div className="text-gray-800 font-semibold text-2xl flex justify-center py-2 mb-10">
              Sign up
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-500 text-sm font-normal mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="appearance-none border border-gray-300 rounded-lg py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline w-full"
                name="username"
                type="text"
                {...register("username", { required: true })}
              />
              {errors.username && (
                <span className="text-red-300">Username is required</span>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-500 text-sm font-normal mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none border border-gray-300 rounded-lg py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline w-full"
                name="email"
                type="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-300">email is required</span>
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
                className="px-4 py-2 rounded-xl text-white inline-block shadow-lg bg-yellow-500 hover:bg-yellow-500 focus:bg-yellow-600 w-full"
                type="submit"
              >
                Sign up
              </button>
              <p className="text-sm mt-8 text-center text-gray-500">
                <span>Have an account already? </span>
                <Link href="/login">
                  <a className="cursor-pointer hover:underline">Sign in</a>
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

export default register;
