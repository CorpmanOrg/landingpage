import * as Yup from "yup";

export const joinSchema = Yup.object({
  organizationId: Yup.string().required("Organization id does not exist for this cooperative"),
  surname: Yup.string().required("Surname is required"),
  firstName: Yup.string().required("Firstname is required"),
  middleName: Yup.string().required("Middlename is required"),
  email: Yup.string()
    .required("Email is required")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Please enter a valid email address"),
  password: Yup.string().required("Password is required"),
  address: Yup.string().required("Current house address is required"),
  dateOfBirth: Yup.string().required("Date of birth is required"),
  stateOfOrigin: Yup.string().required("State of origin is required"),
  LGA: Yup.string().required("LGA is required"),
  maritalStatus: Yup.string().required("Marital status is required"),
  residentialAddress: Yup.string().required("Employers address is required"),
  mobileNumber: Yup.string().required("Mobile number is required"),
  employer: Yup.string().required("Employer name is required"),
  annualIncome: Yup.number().required("Anual income is required"),
  monthlyContribution: Yup.string().required("Monthly contribution is required"),
  nextOfKin: Yup.string().required("Name of next of kin is required"),
  nextOfKinRelationship: Yup.string().required("Please state relationship"),
  nextOfKinAddress: Yup.string().required("House address of next of in is required"),
});
