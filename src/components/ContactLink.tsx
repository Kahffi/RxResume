import { ChangeEvent } from "react";
import { ContactInfo, UserInfo } from "../hooks/useUserData";
import Input from "./Input";

type Props = {
  contact: ContactInfo;
  setUserData: React.Dispatch<React.SetStateAction<UserInfo>>;
  index: number;
};

export default function ContactLink({ contact, setUserData, index }: Props) {
  function handleLinkChange(e: ChangeEvent<HTMLInputElement>) {
    setUserData((udt) => {
      return {
        ...udt,
        contacts: udt.contacts.map((ctc, idx) =>
          index === idx ? { ...ctc, link: e.target.value } : ctc
        ),
      };
    });
  }
  return (
    <Input
      type="text"
      defaultValue={contact.link}
      placeholder="Links"
      onChange={handleLinkChange}
    />
  );
}
