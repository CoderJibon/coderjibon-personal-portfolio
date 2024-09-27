import Blog from "@/components/Blog/Blog";

function BlogPage() {
  return (
    <div className="bg-darkLight p-4 rounded-md dark:bg-white dark:border dark:shadow-sm">
      <h2 className="text-2xl sm:text-3xl mb-7 text-color dark:dark-text-color font-semibold ">
        Blog
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  );
}

export default BlogPage;
