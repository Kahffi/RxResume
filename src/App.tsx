import useUserData from "./hooks/useUserData";
import GeneralForm from "./components/GeneralForm";
import { Icon } from "@iconify/react";

function App() {
  const { userData, setUserData } = useUserData();

  return (
    <div className="flex flex-row bg-slate-800 min-h-svh max-h-svh">
      {/* sidebar */}
      <header className="basis-96 bg-inherit max-h-screen overflow-auto">
        <div>
          <img src="" alt="Logo" />
          <h1>MyCv</h1>
        </div>
        <aside className="text-white p-4">
          <GeneralForm userData={userData} setUserData={setUserData} />
          {/* <Dropdown
            header="General Info"
            type="single"
            items={
            }
          /> */}
        </aside>
      </header>
      {/*  */}
      {/*  */}
      <main className="flex justify-center bg-gray-100 flex-1 rounded-lg my-[.7rem] mr-2 overflow-auto py-5">
        <article
          id="myResume"
          className="w-[768px] h-[1366px] max-h[1366px] py-5 bg-white drop-shadow-2xl text-black"
        >
          {/* Header */}
          <section className="w-full text-center px-5">
            {/* Name */}
            <h1 className="text-slate-900 font-medium text-3xl">
              {userData.name}
            </h1>
            {/* contacts */}
            <ul className="flex flex-row flex-wrap items-center justify-center list-none gap-3 *:flex *:flex-row  *:items-center *:gap-1 *:break-all">
              {/* phone number */}
              <li>
                <span>
                  <Icon icon={"mdi:phone"} style={{ color: "black" }} />
                </span>
                {userData.phone}
              </li>
              {userData.contacts.map((ctc) => {
                return (
                  <li key={ctc.id} className="flex gap-2">
                    {/* TODO CHANGE THIS INTO FIND */}
                    <Icon
                      icon={`mdi:${ctc.platform.toLowerCase()}`}
                      color="black"
                    />
                    <a href={ctc.link}>{ctc.link}</a>
                  </li>
                );
              })}
              {/* the rest */}
            </ul>
          </section>
          <hr className="font-bold" />
        </article>
      </main>
      {/*  */}
      {/*  */}
    </div>
  );
}

export default App;
