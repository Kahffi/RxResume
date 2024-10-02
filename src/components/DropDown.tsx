import { ReactElement, ReactNode, useState } from "react";
import double_arrow from "../assets/icons/double_arrow.svg";

type DropdownProps = {
  header: ReactNode;
  type: "single" | "list";
  items: ReactNode;
};

export default function Dropdown({ items, header, type }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${isOpen ? "bg-slate-700" : ""} rounded-md`}>
      <div className="w-full bg-slate-700 hover:opacity-80 text-lg  rounded-md shadow-md shadow-slate-900/30 cursor-pointer">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full px-4 py-2"
        >
          {header}
          <span>
            <img
              src={double_arrow}
              alt="double_arrow_icon"
              className="rotate-90 w-6"
            />
          </span>
        </button>
      </div>
      {/* dropdown content */}
      {isOpen && (
        <div className="flex flex-col px-2 py-3 gap-1">
          {type === "single"
            ? items
            : (items as ReactElement<HTMLElement>[]).map((itm) => {
                return (
                  <div
                    key={itm.key!}
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="p-2 bg-slate-700 hover:bg-slate-600 hover:drop-shadow-lg transition-all hover:rounded-md overflow-hidden"
                  >
                    {itm}
                  </div>
                );
              })}
        </div>
      )}
    </div>
  );
}
