type btn = "submit" | "reset" | "button" | undefined;

interface ButtonType {
  title: string;
  type: btn;
  className: string;
  onClick: () => void;
}

export function Button({ title, type, className, onClick }: ButtonType) {
  return (
    <>
      <button type={type} className={className} onClick={onClick}>
        {title}
      </button>
    </>
  );
}
