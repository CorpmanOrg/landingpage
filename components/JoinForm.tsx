import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { User, MapPin, Briefcase, Users, CheckCircle } from "lucide-react";
import { Input } from "./ui/input";

interface FormValues {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  gender: string;

  // Address Information
  address: string;
  city: string;
  state: string;
  postalCode: string;

  // Employment Information
  employmentStatus: string;
  occupation: string;
  monthlyIncome: string;
  employer: string;

  // Next of Kin
  nextOfKinName: string;
  nextOfKinPhone: string;
  nextOfKinRelationship: string;
  nextOfKinAddress: string;
}

interface JoinFormProps {
  cooperativeId: string;
  selectedPackage?: any;
  onSubmit: (values: FormValues) => void;
  isSubmitting: boolean;
}

export const JoinForm: React.FC<JoinFormProps> = ({ cooperativeId, selectedPackage, onSubmit, isSubmitting }) => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    dateOfBirth: Yup.string().required("Date of birth is required"),
    gender: Yup.string().required("Gender is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    postalCode: Yup.string().required("Postal code is required"),
    employmentStatus: Yup.string().required("Employment status is required"),
    occupation: Yup.string().required("Occupation is required"),
    monthlyIncome: Yup.string().required("Monthly income is required"),
    employer: Yup.string().required("Employer is required"),
    nextOfKinName: Yup.string().required("Next of kin name is required"),
    nextOfKinPhone: Yup.string().required("Next of kin phone is required"),
    nextOfKinRelationship: Yup.string().required("Relationship is required"),
    nextOfKinAddress: Yup.string().required("Next of kin address is required"),
  });

  const initialValues: FormValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    employmentStatus: "",
    occupation: "",
    monthlyIncome: "",
    employer: "",
    nextOfKinName: "",
    nextOfKinPhone: "",
    nextOfKinRelationship: "",
    nextOfKinAddress: "",
  };

  return (
    <section id="join-form" className="mx-auto w-4/5">
      <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl border border-gray-100">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Join Our Cooperative</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Complete your application to become a member and start your financial journey with us.
          </p>
        </div>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {({ errors, touched }) => (
            <Form className="space-y-8">
              {/* Personal Information Section */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-6">
                  <User className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900">Personal Information</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <Field name="firstName">
                      {({ field }: any) => (
                        <Input
                          {...field}
                          label="First Name"
                          error={touched.firstName && errors.firstName}
                          placeholder="Enter your first name"
                        />
                      )}
                    </Field>
                  </div>
                  <div>
                    <Field name="lastName">
                      {({ field }: any) => (
                        <Input
                          {...field}
                          label="Last Name"
                          error={touched.lastName && errors.lastName}
                          placeholder="Enter your last name"
                        />
                      )}
                    </Field>
                  </div>
                  <div>
                    <Field name="email">
                      {({ field }: any) => (
                        <Input
                          {...field}
                          label="Email Address"
                          type="email"
                          error={touched.email && errors.email}
                          placeholder="Enter your email"
                        />
                      )}
                    </Field>
                  </div>
                  <div>
                    <Field name="phoneNumber">
                      {({ field }: any) => (
                        <Input
                          {...field}
                          label="Phone Number"
                          error={touched.phoneNumber && errors.phoneNumber}
                          placeholder="Enter your phone number"
                        />
                      )}
                    </Field>
                  </div>
                  <div>
                    <Field name="dateOfBirth">
                      {({ field }: any) => (
                        <Input
                          {...field}
                          label="Date of Birth"
                          type="date"
                          error={touched.dateOfBirth && errors.dateOfBirth}
                        />
                      )}
                    </Field>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
                    <Field
                      as="select"
                      name="gender"
                      className="w-full h-12 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </Field>
                    <ErrorMessage name="gender" component="div" className="text-red-600 text-sm mt-1" />
                  </div>
                </div>
              </div>

              {/* Address Information Section */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-6">
                  <MapPin className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900">Address Information</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <Field name="address">
                      {({ field }: any) => (
                        <Input
                          {...field}
                          label="Street Address"
                          error={touched.address && errors.address}
                          placeholder="Enter your full address"
                        />
                      )}
                    </Field>
                  </div>
                  <div>
                    <Field name="city">
                      {({ field }: any) => (
                        <Input
                          {...field}
                          label="City"
                          error={touched.city && errors.city}
                          placeholder="Enter your city"
                        />
                      )}
                    </Field>
                  </div>
                  <div>
                    <Field name="state">
                      {({ field }: any) => (
                        <Input
                          {...field}
                          label="State"
                          error={touched.state && errors.state}
                          placeholder="Enter your state"
                        />
                      )}
                    </Field>
                  </div>
                  <div>
                    <Field name="postalCode">
                      {({ field }: any) => (
                        <Input
                          {...field}
                          label="Postal Code"
                          error={touched.postalCode && errors.postalCode}
                          placeholder="Enter postal code"
                        />
                      )}
                    </Field>
                  </div>
                </div>
              </div>

              {/* Employment Information Section */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Briefcase className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900">Employment Information</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Employment Status</label>
                    <Field
                      as="select"
                      name="employmentStatus"
                      className="w-full h-12 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                    >
                      <option value="">Select status</option>
                      <option value="employed">Employed</option>
                      <option value="self-employed">Self-Employed</option>
                      <option value="unemployed">Unemployed</option>
                      <option value="student">Student</option>
                    </Field>
                    <ErrorMessage name="employmentStatus" component="div" className="text-red-600 text-sm mt-1" />
                  </div>
                  <div>
                    <Field name="occupation">
                      {({ field }: any) => (
                        <Input
                          {...field}
                          label="Occupation"
                          error={touched.occupation && errors.occupation}
                          placeholder="Enter your occupation"
                        />
                      )}
                    </Field>
                  </div>
                  <div>
                    <Field name="monthlyIncome">
                      {({ field }: any) => (
                        <Input
                          {...field}
                          label="Monthly Income"
                          error={touched.monthlyIncome && errors.monthlyIncome}
                          placeholder="Enter monthly income"
                        />
                      )}
                    </Field>
                  </div>
                  <div>
                    <Field name="employer">
                      {({ field }: any) => (
                        <Input
                          {...field}
                          label="Employer"
                          error={touched.employer && errors.employer}
                          placeholder="Enter employer name"
                        />
                      )}
                    </Field>
                  </div>
                </div>
              </div>

              {/* Next of Kin Section */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Users className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900">Next of Kin Information</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Field name="nextOfKinName">
                      {({ field }: any) => (
                        <Input
                          {...field}
                          label="Full Name"
                          error={touched.nextOfKinName && errors.nextOfKinName}
                          placeholder="Enter next of kin name"
                        />
                      )}
                    </Field>
                  </div>
                  <div>
                    <Field name="nextOfKinPhone">
                      {({ field }: any) => (
                        <Input
                          {...field}
                          label="Phone Number"
                          error={touched.nextOfKinPhone && errors.nextOfKinPhone}
                          placeholder="Enter phone number"
                        />
                      )}
                    </Field>
                  </div>
                  <div>
                    <Field name="nextOfKinRelationship">
                      {({ field }: any) => (
                        <Input
                          {...field}
                          label="Relationship"
                          error={touched.nextOfKinRelationship && errors.nextOfKinRelationship}
                          placeholder="e.g., Spouse, Parent, Sibling"
                        />
                      )}
                    </Field>
                  </div>
                  <div>
                    <Field name="nextOfKinAddress">
                      {({ field }: any) => (
                        <Input
                          {...field}
                          label="Address"
                          error={touched.nextOfKinAddress && errors.nextOfKinAddress}
                          placeholder="Enter next of kin address"
                        />
                      )}
                    </Field>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full md:w-auto px-12 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                    isSubmitting ? "animate-pulse" : ""
                  }`}
                >
                  {isSubmitting ? "Submitting Application..." : "Submit Application"}
                </button>

                <p className="text-sm text-gray-500 mt-4">
                  By submitting this form, you agree to our terms and conditions
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};
