import Input from "./components/Input";
import useUserData from "./hooks/useUserData";
import GeneralForm from "./components/GeneralForm";
import { Icon } from "@iconify/react";

function App() {
  const { userData, setUserData } = useUserData();

  return (
    <div className="flex flex-row bg-slate-800 min-h-svh max-h-svh">
      {/* sidebar */}
      <header className="basis-96 bg-inherit">
        <div>
          <img src="" alt="Logo" />
          <h1>MyCv</h1>
        </div>
        <aside className="text-white">
          <div>
            <GeneralForm userData={userData} setUserData={setUserData} />
          </div>
        </aside>
      </header>
      {/*  */}
      {/*  */}
      <main className="flex justify-center bg-gray-100 flex-1 rounded-lg my-[.7rem] mr-2 overflow-auto py-5">
        <article
          id="myResume"
          className="w-[768px] h-[1366px] max-h[1366px] py-5 bg-white drop-shadow-2xl"
        >
          {/* Header */}
          <section className="w-full text-center px-5">
            {/* Name */}
            <h1 className="text-slate-950 font-medium text-3xl">
              {userData.name}
            </h1>
            {/* contacts */}
            <ul className="flex flex-row items-center justify-center list-none gap-5 *:flex *:flex-row *:items-center *:gap-1">
              {/* phone number */}
              <li>
                <span>
                  <Icon icon={"mdi:phone"} style={{ color: "black" }} />
                </span>
                {userData.phone}
              </li>
              {userData.contacts.map((ctc, idx) => {
                return (
                  <li key={"contact" + idx.toString()}>
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
