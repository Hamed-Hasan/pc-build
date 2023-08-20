import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <div className="">
      <h2 className="text-5xl font-bold mb-10">Create Account</h2>
      <div
        onClick={() =>
          signIn("google", {
            callbackUrl: "https://pc-cloud.vercel.app/",
          })
        }
        className="flex justify-center items-center gap-4 bg-slate-800 hover:bg-slate-900 p-3 rounded-lg text-white mb-4 cursor-pointer"
      >
        <FcGoogle className="text-3xl" />
        <h2>Sign in with Google</h2>
      </div>
      <div
        onClick={() =>
          signIn("github", {
            callbackUrl: "https://pc-cloud.vercel.app/",
          })
        }
        className="flex justify-center items-center gap-4 bg-slate-800 hover:bg-slate-900 p-3 rounded-lg text-white cursor-pointer"
      >
        <BsGithub className="text-3xl" />
        <h2>Sign in with Github</h2>
      </div>
    </div>
  );
};

export default LoginPage;
