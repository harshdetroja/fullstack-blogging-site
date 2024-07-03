interface InputType {
  id: string;
  name: string;
  type: string;
  autoComplete: string;
  placeholder: string;
  className: string;
  onChange: (x: any) => void;
}
export function Input({
  id,
  name,
  type,
  autoComplete,
  placeholder,
  className,
  onChange,
}: InputType) {
  return (
    <>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
      />
    </>
  );
}
