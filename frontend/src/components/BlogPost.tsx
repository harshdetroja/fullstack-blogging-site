export function BlogPost({ blogs }: any) {
  return (
    <div>
      {blogs.map((blog: any, index: any) => {
        return (
          <div key={index}>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
          </div>
        );
      })}
    </div>
  );
}
