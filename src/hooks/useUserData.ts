import { useState } from "react";

export type ContactInfo = {
  id: string;
  platform: string;
  link: string;
};

export type EducationInfo = {
  id: string;
  school: string;
  startYear: number;
  endYear: number;
  schoolLoc: string;
  faculty: string;
  major: string;
};

export interface UserInfo {
  name: string;
  phone: string;
  contacts: ContactInfo[];
  educations: EducationInfo[];
  location: string;
}

export default function useUserData() {
  const [userData, setUserData] = useState<UserInfo>({
    name: "Muhammad Daffa Al Kahffi",
    phone: "0877364734",
    contacts: [],
    educations: [],
    location: "",
  });

  return { userData, setUserData };
}
