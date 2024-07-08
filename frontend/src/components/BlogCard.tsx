import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export function BlogCard({ title, content, id }: any) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${id}`);
  };

  return (
    <>
      <div className="space-y-2 ring-1 p-4 ring-black rounded-md max-w-[1024px]">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-lg  truncate">{content}</p>
        <div className="flex justify-end items-center">
          <Button
            type="submit"
            title="Read More"
            className="bg-black text-white p-2 rounded-md"
            onClick={handleClick}
          />
        </div>
      </div>
    </>
  );
}
