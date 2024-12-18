import { ChangeEvent, useState } from "react";
import { ContactInfo, UserInfo } from "../../hooks/useUserData";
import Input from "./Input";
import { Icon } from "@iconify/react/dist/iconify.js";
import { PLATFORMS } from "../../constant";
import Dropdown from "./DropDown";
type Props = {
  contact: ContactInfo;
  setUserData: React.Dispatch<React.SetStateAction<UserInfo>>;
  linkID: string;
};

// items inside dropdown
function PlatformItem({
  name,
  icon,
  onClick,
}: {
  name: string;
  icon: string;
  onClick?: () => void;
}) {
  return (
    <div
      key={name}
      onClick={onClick}
      className="flex items-center gap-3 font-medium cursor-pointer"
    >
      <Icon icon={icon} className="text-3xl" />
      <span className="text-md text-gray-100">{name}</span>
    </div>
  );
}

export default function ContactLink({ contact, setUserData, linkID }: Props) {
  const [selectedPlatfom, setSelectedPlatform] = useState({
    name: "",
    icon: "",
  });

  function handleLinkChange(e: ChangeEvent<HTMLInputElement>) {
    setUserData((prevUserData) => {
      prevUserData.contacts = prevUserData.contacts.map((ctc) =>
        linkID === ctc.id ? { ...ctc, link: e.target.value } : ctc
      );

      return {
        ...prevUserData,
      };
    });
  }

  // function to update the closed dropdown display
  function updatePlatform(platformName: string) {
    setUserData((prevUserData) => {
      const updatedContacts = prevUserData.contacts.map((ctc) =>
        linkID === ctc.id ? { ...ctc, platform: platformName } : ctc
      );
      return {
        ...prevUserData,
        contacts: updatedContacts,
      };
    });
  }

  return (
    <div className="flex flex-col gap-2">
      <Dropdown
        items={PLATFORMS.map((pfm) => {
          return (
            <PlatformItem
              key={pfm.name}
              icon={pfm.icon!}
              name={pfm.name}
              onClick={() => {
                setSelectedPlatform({ ...pfm });
                updatePlatform(pfm.name);
              }}
            />
          );
        })}
        type="list"
        header={
          selectedPlatfom.name === "" ? (
            "Select Platform"
          ) : (
            <PlatformItem
              icon={selectedPlatfom.icon}
              name={selectedPlatfom.name}
            />
          )
        }
      />

      <Input
        type="text"
        defaultValue={contact.link}
        label="Profile Link"
        onChange={handleLinkChange}
      />
    </div>
  );
}
