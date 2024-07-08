import { BlogCard } from "./BlogCard";

export function BlogPost({ blogs }: any) {
  return (
    <div className="space-y-4">
      {blogs.map((blog: any, index: any) => {
        return (
          <BlogCard
            title={blog.title}
            content={blog.content}
            id={blog.id}
            key={index}
          />
        );
      })}
    </div>
  );
}
