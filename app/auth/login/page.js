"use client";
import React from "react";
import { Label } from "./label";
import { Input } from "./inputs";
import { cn } from "@/utils/cn";
import { useState } from 'react';
import axios from '@/utils/axios';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth', { email, password }); // Correctly target the login endpoint

      const token = response.data.token; // Extract the token from response data

      // Set token in cookies
      Cookies.set('token', token, { secure: true, httpOnly: false });
      console.log(response.data);

      router.push('/auth/protected');
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      setError('Invalid credentials');
    }
  };


  return (
    (<div className="flex justify-center items-center min-h-screen">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Welcome to EDU Track
        </h2>
        <p>
          Login to EDU Track if you already have an account
        </p>
        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="Email Address" type="email" onChange={(e) => setEmail(e.target.value)} required />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} required />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit">
            Log in &rarr;
            <BottomGradient />
          </button>

          <div
            className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>)
  );
}

const BottomGradient = () => {
  return (<>
    <span
      className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span
      className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>);
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    (<div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>)
  );
};