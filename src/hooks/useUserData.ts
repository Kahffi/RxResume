import { useState } from "react";

export type ContactLink = {
  platform: string;
  link: string;
};

export type UserInfo = {
  name: string;
  phone: string;
  contacts: ContactLink[];
  educations: EducationInfo[];
};

export type EducationInfo = {
  school: string;
  startYear: number;
  endYear: number;
  schoolLoc: string;
  faculty: string;
  major: string;
};

export default function useUserData() {
  const [userData, setUserData] = useState<UserInfo>({
    name: "Muhammad Daffa Al Kahffi",
    phone: "0877364734",
    contacts: [],
    educations: [],
  });

  return { userData, setUserData };
}
