"use client";

import Image, { StaticImageData } from "next/image";
import { use, useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useMutation } from "@tanstack/react-query";
import { joinCoopFn } from "@/utils/ApiFactory/join";
import { Formik, Form } from "formik";
import CorpLogo from "../../components/assets/img/Logo-3.jpeg";
import Logo1 from "../../components/assets/img/logo-1.png";
import Logo2 from "../../components/assets/img/Logo-2.png";
import Logo3 from "../../components/assets/img/Logo-3.jpeg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { joinInitialValues } from "@/components/assets/data";
import { joinSchema } from "@/utils/Yup/schema";
import Toastbar from "@/components/Toastbar";

interface Props {
  params: Promise<{ cooperatives: string }>;
}

interface People {
  id: string;
  alt: string;
  icon: string | StaticImageData;
}

const people: People[] = [
  {
    id: "1",
    alt: "logo-1",
    icon: Logo1,
  },
  {
    id: "2",
    alt: "logo-2",
    icon: Logo2,
  },
  {
    id: "3",
    alt: "logo-3",
    icon: Logo3,
  },
];

const packages = [
  {
    title: "BASIC",
    price: "$25",
    features: ["Minimum investment: $100", "Low risk portfolio", "Weekly report access", "Customer support"],
    colorFrom: "from-orange-400",
    colorTo: "to-yellow-400",
    buttonColor: "bg-orange-500",
  },
  {
    title: "STANDARD",
    price: "$35",
    features: ["Minimum investment: $1,000", "Moderate risk portfolio", "Bi-weekly report access", "Priority support"],
    colorFrom: "from-cyan-400",
    colorTo: "to-teal-400",
    buttonColor: "bg-cyan-600",
  },
  {
    title: "PREMIUM",
    price: "$35",
    features: ["Minimum investment: $10,000", "Custom portfolio", "Daily report access", "Dedicated support manager"],
    colorFrom: "from-purple-500",
    colorTo: "to-indigo-500",
    buttonColor: "bg-purple-600",
  },
];

type ToastSeverity = "success" | "error" | "warning" | "info";

interface ToastState {
  open: boolean;
  severity: ToastSeverity;
  message: string;
}

const AllCoperatives = ({ params }: Props) => {
  const { cooperatives } = use(params);
  const initialValues =
    cooperatives !== ""
      ? {
          ...joinInitialValues,
          organizationId: cooperatives,
        }
      : { ...joinInitialValues, organizationId: "" };

  const [toast, setToast] = useState<ToastState>({
    open: false,
    severity: "success",
    message: "",
  });

  const showToast = (severity: ToastSeverity, message: string) => {
    setToast({
      open: true,
      severity,
      message,
    });
  };

  const handleCloseToast = () => {
    setToast((prevS) => ({
      ...prevS,
      open: false,
    }));
  };

  const { mutate: joinCoop, isPending } = useMutation({
    mutationFn: joinCoopFn,
    onSuccess: (data) => {
      console.log("From Success: ", data);
      showToast("success", "Succesfully sent your request");
    },
    onError: (error: unknown) => {
      // Safely extract the message from the error object
      let errMsg = "Something went wrong. Please try again.";
      if (error instanceof Error) {
        errMsg = error.message;
      }

      showToast("error", errMsg);
    },
  });

  const handleSubmit = (values: typeof joinInitialValues) => {
    const payload = {
      ...values,
      annualIncome: Number(values.annualIncome),
      monthlyContribution: Number(values.monthlyContribution),
    };

    joinCoop(payload);
  };

  return (
    <main className="min-h-screen bg-[#F3FFF460] relative">
      <div className=""></div>
      <Toastbar open={toast.open} message={toast.message} severity={toast.severity} onClose={handleCloseToast} />
      <Navbar />
      <section className="mx-auto w-4/5">
        {/* Background */}
        <div
          className="mt-8 relative h-[250px] sm:h-[225px] md:h-[250px] bg-cover bg-center rounded-t-[2rem] overflow-hidden"
          style={{ backgroundImage: `url('/img/auth-bkdImg.png')` }}
        >
          <div className="absolute inset-0 bg-green-300 bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-4 py-6">
            <div className="text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Acme Investment Group</h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-100 mt-2">123 Financial Street, Capital City</p>
            </div>
          </div>
        </div>

        {/* Overlapping Logo */}
        <div className="relative w-4/5 mx-auto lg:mb-8">
          <div
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-16 h-16
             md:w-20 md:h-20 md:left-10 md:transform-none md:-top-18
             lg:w-32 lg:h-32 lg:-top-16
             rounded-full overflow-hidden border-4 border-white bg-white z-10"
          >
            <Image className="object-cover" src={CorpLogo} alt="Company Logo" fill />
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="mx-auto w-4/5">
        <div className="py-8 flex mt-[50px]">
          <div className="flex-[0.5]">
            <p className="text-gray-700 leading-relaxed text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vivamus ullamcorper Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vivamus ullamcorpe Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper...
            </p>
          </div>
          <div className="flex-[0.25]">{""}</div>
          <div className="flex-[0.25]">
            <div className="flex items-center">
              {/* {people.map((pep) => (
                 <span key={pep.id}>
                <Image className="rounded-full w-10 h-10 object-cover" src={pep.icon} alt={pep.alt} />
              </span>
              ))} */}
              <span>
                <Image className="rounded-full w-10 h-10 object-cover" src={Logo1} alt="logo-1" />
              </span>
              <span>
                <Image className="-ml-[10px] rounded-full w-10 h-10 object-cover z-10" src={Logo1} alt="logo-2" />
              </span>
              <span>
                <Image className="-ml-[12px] rounded-full w-10 h-10 object-cover z-10" src={Logo1} alt="logo-3" />
              </span>
              <span className="">3000+ members</span>
            </div>
            <div className="mt-4">
              <a href="#join-form">
                <button className="px-10 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors">
                  Join a Cooperative
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="mx-auto w-4/5">
        <div className="container mx-auto mt-8 py-8 md:py-16">
          {/* Investment Packages */}
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold mb-10">Investment Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-32 justify-center items-stretch">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className="relative bg-gray-900 text-white rounded-xl shadow-lg overflow-hidden p-[6rem_3rem] flex flex-col items-center"
                >
                  <div
                    className={`absolute -top-10 w-24 h-24 rounded-full bg-gradient-to-r ${pkg.colorFrom} ${pkg.colorTo} flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                  >
                    <div className="text-center">
                      <div>{pkg.title}</div>
                      <div className="text-xl font-extrabold">{pkg.price}</div>
                    </div>
                  </div>

                  <div className="mt-16 space-y-4 text-sm text-left w-full mb-12">
                    {pkg.features.map((feature, i) => (
                      <p key={i} className="flex items-center gap-2">
                        ✅ {feature}
                      </p>
                    ))}
                  </div>

                  <button
                    className={`${pkg.buttonColor} mt-6 text-white font-semibold py-2 px-4 rounded-full hover:opacity-90 transition`}
                  >
                    BUY NOW
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Join Form */}
          <div id="join-form" className="bg-[#F3FFF460] p-6 rounded-lg shadow-[0px_4px_17px_4px_rgba(0,0,0,0.10)]">
            <h3 className="text-xl font-semibold mb-4">Join Our Cooperative</h3>
            <Formik initialValues={initialValues} validationSchema={joinSchema} onSubmit={handleSubmit}>
              {(formik) => {
                return (
                  <Form className="space-y-8" onSubmit={formik.handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      <div className="">
                        <Label htmlFor="Surname">Surname</Label>
                        <Input
                          name="surname"
                          type="text"
                          value={formik.values.surname}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          touched={formik.touched.surname}
                          error={formik.errors.surname}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <Label htmlFor="Firstname">Firstname</Label>
                        <Input
                          name="firstName"
                          type="text"
                          value={formik.values.firstName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          touched={formik.touched.firstName}
                          error={formik.errors.firstName}
                          className="w-full"
                        />
                      </div>
                      <div className="">
                        <Label htmlFor="Middlename">Middlename</Label>
                        <Input
                          name="middleName"
                          type="text"
                          value={formik.values.middleName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          touched={formik.touched.middleName}
                          error={formik.errors.middleName}
                          className="w-full"
                        />
                      </div>
                      <div className="">
                        <Label htmlFor="Email">Email</Label>
                        <Input
                          name="email"
                          type="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          touched={formik.touched.email}
                          error={formik.errors.email}
                          className="w-full"
                        />
                      </div>
                      <div className="">
                        <Label htmlFor="Password">Password</Label>
                        <Input
                          name="password"
                          type="text"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          touched={formik.touched.password}
                          error={formik.errors.password}
                          className="w-full"
                        />
                      </div>
                      <div className="">
                        <Label htmlFor="address">Residential Address</Label>
                        <Input
                          name="address"
                          type="text"
                          value={formik.values.address}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          touched={formik.touched.address}
                          error={formik.errors.address}
                          className="w-full"
                        />
                      </div>
                      <div className="">
                        <Label htmlFor="DateOfBirth">Date of Birth</Label>
                        <Input
                          name="dateOfBirth"
                          type="date"
                          value={formik.values.dateOfBirth}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          touched={formik.touched.dateOfBirth}
                          error={formik.errors.dateOfBirth}
                          className="w-full"
                        />
                      </div>
                      <div className="">
                        <Label htmlFor="StateOfOrigin">State Of Origin</Label>
                        <Input
                          name="stateOfOrigin"
                          type="text"
                          value={formik.values.stateOfOrigin}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          touched={formik.touched.stateOfOrigin}
                          error={formik.errors.stateOfOrigin}
                          className="w-full"
                        />
                      </div>
                      <div className="">
                        <Label htmlFor="lga">LGA</Label>
                        <Input
                          name="LGA"
                          type="text"
                          value={formik.values.LGA}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          touched={formik.touched.LGA}
                          error={formik.errors.LGA}
                          className="w-full"
                        />
                      </div>
                      <div className="">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          name="mobileNumber"
                          type="text"
                          value={formik.values.mobileNumber}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          touched={formik.touched.mobileNumber}
                          error={formik.errors.mobileNumber}
                          className="w-full"
                        />
                      </div>
                      <div className="">
                        <Label htmlFor="employer">Employer</Label>
                        <Input
                          name="employer"
                          type="text"
                          value={formik.values.employer}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          touched={formik.touched.employer}
                          error={formik.errors.employer}
                          className="w-full"
                        />
                      </div>
                      <div className="">
                        <Label htmlFor="Employer Address">Employer Address</Label>
                        <Input
                          name="residentialAddress"
                          type="text"
                          value={formik.values.residentialAddress}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          touched={formik.touched.residentialAddress}
                          error={formik.errors.residentialAddress}
                          className="w-full"
                        />
                      </div>
                      <div className="">
                        <Label htmlFor="Contribution">Monthly Contribution</Label>
                        <Input
                          name="monthlyContribution"
                          type="number"
                          value={formik.values.monthlyContribution}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          touched={formik.touched.monthlyContribution}
                          error={formik.errors.monthlyContribution}
                          className="w-full"
                        />
                      </div>
                      <div className="">
                        <Label htmlFor="MaritalStatus">Marital Status</Label>
                        <Input
                          name="maritalStatus"
                          type="text"
                          value={formik.values.maritalStatus}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          touched={formik.touched.maritalStatus}
                          error={formik.errors.maritalStatus}
                          className="w-full"
                        />
                      </div>
                      <div className="">
                        <Label htmlFor="AnualIncome">Anual Income</Label>
                        <Input
                          name="annualIncome"
                          type="number"
                          value={formik.values.annualIncome}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          touched={formik.touched.annualIncome}
                          error={formik.errors.annualIncome}
                          className="w-full"
                        />
                      </div>
                      <div className="">
                        <Label htmlFor="Nextofkin">Next of Kin</Label>
                        <Input
                          name="nextOfKin"
                          type="text"
                          value={formik.values.nextOfKin}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          touched={formik.touched.nextOfKin}
                          error={formik.errors.nextOfKin}
                          className="w-full"
                        />
                      </div>
                      <div className="">
                        <Label htmlFor="Nextofkin">Relatioship with Next of Kin</Label>
                        <Input
                          name="nextOfKinRelationship"
                          type="text"
                          value={formik.values.nextOfKinRelationship}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          touched={formik.touched.nextOfKinRelationship}
                          error={formik.errors.nextOfKinRelationship}
                          className="w-full"
                        />
                      </div>
                      <div className="">
                        <Label htmlFor="NextofkinPhone">Next of Kin Address</Label>
                        <Input
                          name="nextOfKinAddress"
                          type="text"
                          value={formik.values.nextOfKinAddress}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          touched={formik.touched.nextOfKinAddress}
                          error={formik.errors.nextOfKinAddress}
                          className="w-full"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                    >
                      Click to Join
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AllCoperatives;
