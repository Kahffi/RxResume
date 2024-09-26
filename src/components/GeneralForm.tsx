import { UserInfo } from "../hooks/useUserData";
import { Icon } from "@iconify/react/dist/iconify.js";
import Input from "./Input";
import ContactLink from "./ContactLink";

type Props = {
  userData: UserInfo;
  setUserData: React.Dispatch<React.SetStateAction<UserInfo>>;
};

type OnChange = React.ChangeEvent<HTMLInputElement>;

export default function GeneralForm({ userData, setUserData }: Props) {
  const { name, phone, contacts } = userData;

  function handleNameChange(e: OnChange) {
    setUserData((udt) => {
      return { ...udt, name: e.target.value };
    });
  }

  function handlePhoneChange(e: OnChange) {
    if (e.target.value.match(/^\d+$/) || e.target.value === "") {
      setUserData((udt) => {
        return { ...udt, phone: e.target.value };
      });
    }
  }

  function addContact() {
    setUserData((prev) => {
      return { ...prev, contacts: [...contacts, { link: "", platform: "" }] };
    });
  }

  return (
    <div className="">
      <h3 className="font-semibold text-2xl">General Info</h3>
      <div className="flex flex-col gap-5">
        <Input
          type="text"
          placeholder="Name"
          defaultValue={name}
          onChange={handleNameChange}
        />
        {/* contacts */}
        <Input
          type="number"
          placeholder="Phone Number"
          defaultValue={phone}
          onChange={handlePhoneChange}
        />
        <h4 className="font-medium">Contact Links</h4>
        <ul>
          {contacts.map((ctc, idx) => {
            return (
              <ContactLink
                index={idx}
                setUserData={setUserData}
                contact={ctc}
                key={"contact" + idx.toString()}
              />
            );
          })}
          <li>
            <button
              onClick={addContact}
              type="button"
              className="w-full flex items-center justify-center text-lg gap-2 p-3 bg-slate-600 hover:opacity-80"
            >
              Add Contact Link
              <Icon icon={"mdi:plus-circle"} className="text-xl"></Icon>
            </button>
          </li>
        </ul>
      </div>
      {/* name */}
    </div>
  );
}
