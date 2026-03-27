import React from "react";
import Image from "next/image";
import { Mail, Lock, ArrowRight } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#e9eff8] flex items-center justify-center px-4">
      <div className="w-full max-w-[420px] rounded-3xl bg-white shadow-[0_20px_50px_rgba(15,23,42,0.12)] border border-gray-200 px-8 py-10">
        <div className="flex flex-col items-center">
          {/* Replace with your actual logo path */}
          <div className="mb-6">
            <Image
              src="/assets/logo.png"
              alt="Mailbakes Logo"
              width={90}
              height={90}
              className="object-contain"
              priority
            />
          </div>

          <h1 className="text-[38px] font-bold text-[#0f172a] leading-tight text-center">
            Welcome To Mailbakes
          </h1>
          <p className="mt-2 text-[16px] text-gray-500 text-center">
            Please enter your details to sign in.
          </p>
        </div>

        <form className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-[#0f172a]"
            >
              Email Address
            </label>
            <div className="flex h-14 items-center rounded-xl bg-[#eef3fb] border border-transparent px-4 focus-within:border-blue-500 transition">
              <Mail className="mr-3 h-5 w-5 text-gray-400" />
              <input
                id="email"
                type="email"
                placeholder="hello@mailbakes.com"
                className="w-full bg-transparent text-[15px] text-[#0f172a] outline-none placeholder:text-gray-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold text-[#0f172a]"
            >
              Password
            </label>
            <div className="flex h-14 items-center rounded-xl bg-[#eef3fb] border border-transparent px-4 focus-within:border-blue-500 transition">
              <Lock className="mr-3 h-5 w-5 text-gray-400" />
              <input
                id="password"
                type="password"
                placeholder="••••••••••••"
                className="w-full bg-transparent text-[15px] text-[#0f172a] outline-none placeholder:text-gray-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#3b82f6] text-white font-semibold text-lg shadow-[0_8px_20px_rgba(59,130,246,0.35)] transition hover:bg-[#2563eb]"
          >
            Sign In
            <ArrowRight className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;