type Props = {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
};

export default function Input({
  name,
  label = "label",
  type = "text",
  placeholder,
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-gradient">
        {label}
      </label>
      <div className="border-gradient py-2 px-3.5 grid">
        <input
          name={name}
          type={type}
          className="border-none outline-none rounded-lg bg-dark-primary text-sm"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
