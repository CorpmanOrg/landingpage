"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SigninProps {
  email: string;
  password: string;
}

interface BackProps {
  flipBack: (val: boolean) => void;
}

const Signin = ({ flipBack }: BackProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleBack = () => {
    flipBack(false);
  };

  console.log("", { email, password });

  return (
    <>
      <div className="p-6">
        <h1 className="text-xl font-semibold mb-4">Sign In</h1>
        <p className="text-sm text-gray-500 mb-2">Login with your correct credentials</p>

        <form>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full"
            />
          </div>

          <div className="mt-4">
            {/* <Button type="button" variant="outline" onClick={onBack} className="w-1/2">
              Back
            </Button> */}
            <Button type="submit" className="w-full bg-green-500 hover:bg-green-600" disabled={!email || !password}>
              Continue
            </Button>
            <p className="text-gray-500 font-thin text-sm mt-2 cursor-pointer hover:text-green-500 hover:underline" onClick={handleBack}>back</p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signin;
