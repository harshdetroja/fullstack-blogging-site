interface Label {
  title: string;
  htmlFor: string;
}

export function Label({ title, htmlFor }: Label) {
  return (
    <>
      <label htmlFor={htmlFor}>{title}</label>
    </>
  );
}
