import { v7 } from "uuid";

type InputProps = {
  label: string;
  type: string;
  //   inputData: InputDataGeneral;
  defaultValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// type InputDataGeneral = "name" | "phone";

export default function Input({
  label,
  type,
  defaultValue,
  onChange,
}: InputProps) {
  const inputID = v7();

  return (
    <div className="text-inherit flex flex-col gap-1">
      <label htmlFor={inputID}>{label}</label>
      <input
        id={inputID}
        type={type}
        className="px-2 py-1 w-full outline-none bg-transparent border border-slate-400 text-slate-200 rounded-sm"
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </div>
  );
}
