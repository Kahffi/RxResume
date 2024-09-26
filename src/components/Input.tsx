type InputProps = {
  placeholder?: string;
  type: string;
  //   inputData: InputDataGeneral;
  defaultValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// type InputDataGeneral = "name" | "phone";

export default function Input({
  placeholder,
  type,
  defaultValue,
  onChange,
}: InputProps) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className="px-2 py-1 w-full outline-none bg-transparent border-b-2 text-slate-200"
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </div>
  );
}
