import { UserInfo } from "../../hooks/useUserData";
import { Icon } from "@iconify/react/dist/iconify.js";
import Input from "./Input";
import ContactLink from "./ContactLink";
import { v7 as uuid } from "uuid";

type Props = {
  userData: UserInfo;
  setUserData: React.Dispatch<React.SetStateAction<UserInfo>>;
};

type OnChange = React.ChangeEvent<HTMLInputElement>;

export default function GeneralForm({ userData, setUserData }: Props) {
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
    } else {
      e.target.value = userData.phone;
    }
  }

  function addContact() {
    setUserData((prev) => {
      return {
        ...prev,
        contacts: [
          ...userData.contacts,
          { id: uuid(), link: "", platform: "" },
        ],
      };
    });
  }

  function deleteLink(linkID: string) {
    setUserData((prevUserData) => {
      const updatedContacts = prevUserData.contacts.filter((ctc) => {
        return ctc.id !== linkID;
      });

      return {
        ...prevUserData,
        contacts: updatedContacts,
      };
    });
  }

  return (
    <div className="w-full">
      <div className="flex flex-col gap-5 w-full">
        <Input
          type="text"
          label="Name"
          defaultValue={userData.name}
          onChange={handleNameChange}
        />

        {/* Phone number */}
        <Input
          type="number"
          label="Phone Number"
          defaultValue={userData.phone}
          onChange={handlePhoneChange}
        />

        {/* Contact Links */}
        <div className="flex flex-col gap-1">
          <h4 className="text-lg">Contact Links</h4>
          <ul className="flex flex-col gap-7 px-2 ">
            {userData.contacts.map((ctc, idx) => {
              return (
                <li key={ctc.id}>
                  <div className="flex justify-between items-end">
                    <span>Contact {idx + 1}</span>

                    {/* delete button */}
                    <button
                      type="button"
                      onClick={() => deleteLink(ctc.id)}
                      className="text-2xl hover:text-red-600 transition-colors"
                    >
                      <Icon icon="mdi:delete-circle" className="mb-1" />
                    </button>
                  </div>
                  <hr className="border-slate-500" />

                  {/* spacing */}
                  <div className="mt-3"></div>
                  <ContactLink
                    linkID={ctc.id}
                    setUserData={setUserData}
                    contact={ctc}
                  />
                </li>
              );
            })}

            {/* add contact button */}
            <li className="">
              <button
                onClick={addContact}
                type="button"
                className="w-full flex rounded-md items-center justify-center gap-2 p-2 bg-slate-600 hover:opacity-80"
              >
                Add Contact Link
                <Icon icon={"mdi:plus-circle"} className="text-xl"></Icon>
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* name */}
    </div>
  );
}
