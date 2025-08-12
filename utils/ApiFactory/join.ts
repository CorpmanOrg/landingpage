import Axios from "../axios";

interface joinCoop {
  organizationId: string;
  surname: string;
  firstName: string;
  middleName: string;
  email: string;
  password: string;
  address: string;
  dateOfBirth: string;
  stateOfOrigin: string;
  LGA: string;
  maritalStatus: string;
  residentialAddress: string;
  mobileNumber: string;
  employer: string;
  annualIncome: number;
  monthlyContribution: number;
  nextOfKin: string;
  nextOfKinRelationship: string;
  nextOfKinAddress: string;
}

export const getAllCooperativesFn = async (page = 1, limit = 5) => {
  const res = await fetch(`/api/fetchCooperative?page=${page}&limit=${limit}`);
  const data = await res.json();

  if (!res.ok) {
    const msg = Array.isArray(data.errors) ? data.errors.join(", ") : data.message || "An unknown error occured";

    throw new Error(msg);
  }
  return data;
};

export const joinCoopFn = async (payload: joinCoop) => {
  const res = await fetch("/api/joinCooperative", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    const msg = Array.isArray(data.errors) ? data.errors.join(", ") : data.message || "An unknown error occurred";
    // Throw an actual Error object with a useful message
    throw new Error(msg);
  }
  return data;
};
