"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";
import { CardContent } from "./ui/card";
import SignupProgress from "./SignupProgress";
import Step1 from "./signup/Step1";
import Step2 from "./signup/Step2";
import Step3 from "./signup/Step3";
import Step4 from "./signup/Step4";
import Signin from "./signin/page";
import CorpManLogo from "../components/assets/img/Corpman-logo.png";

interface FormState {
  email: string;
  cName: string;
  address: string;
  password: string;
  confirmPassword: string;
}

const SIgnupForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formState, setFormState] = useState<FormState>({
    email: "",
    cName: "",
    address: "",
    password: "",
    confirmPassword: "",
  });
  const [flip, setFlip] = useState<boolean>(false);

  const nextStep = useCallback(() => {
    setCurrentStep((prevS) => Math.min(prevS + 1, 4));
  }, []);

  const prevStep = useCallback(() => {
    setCurrentStep((prevS) => Math.max(prevS - 1, 1));
  }, []);

  const handleFlipSignIn = () => setFlip(true);

  const handleChange = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setFormState((prevS) => ({
      ...prevS,
      [key]: value,
    }));
  };

  return (
    <div>
      <div className="bg-transarent overflow-hidden border border-none outline-none">
        <div className="flex items-center justify-center">
          <Image src={CorpManLogo} alt="Logo-Image" className="rounded-full" width="50" height="50" />
        </div>
        {flip ? (
          <Signin flipBack={setFlip} />
        ) : (
          <>
            <CardContent className="p-6">
              <SignupProgress currentStep={currentStep} totalSteps={4} />

              {currentStep === 1 && <Step1 onNext={nextStep} email={formState.email} setEmail={(val) => handleChange("email", val)} />}
              {currentStep === 2 && (
                <Step2
                  onNext={nextStep}
                  onBack={prevStep}
                  password={formState.password}
                  setPassword={(val) => handleChange("password", val)}
                  confirmPassword={formState.confirmPassword}
                  setConfirmPassword={(val) => handleChange("confirmPassword", val)}
                />
              )}
              {currentStep === 3 && (
                <Step3
                  onNext={nextStep}
                  onBack={prevStep}
                  cName={formState.cName}
                  setCName={(val) => handleChange("cName", val)}
                  address={formState.address}
                  setAddress={(val) => handleChange("address", val)}
                />
              )}
              {currentStep === 4 && <Step4 onBack={prevStep} email={formState.email} 
              cName={formState.cName} address={formState.address} />}
            </CardContent>
            {currentStep <= 1 && (
              <div className="px-6 flex items-center gap-x-10">
                <p className="text-sm">
                  Already have an account?{" "}
                  <span className="text-green-500 cursor-pointer hover:underline" onClick={handleFlipSignIn}>
                    Signin
                  </span>
                </p>
                <p className="text-sm">
                  Looking for cooperatives?{" "}
                  <span className="text-green-500 cursor-pointer hover:underline">Find here</span>
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SIgnupForm;
