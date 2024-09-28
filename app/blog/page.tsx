import Blog from "@/components/Blog/Blog";
import ComingSoon from "@/components/ComingSoon/ComingSoon";
import MainLayout from "../MainLayout";

function BlogPage() {
  return (
    <>
      <MainLayout>
        <h2 className="hidden text-2xl sm:text-3xl mb-7 text-color dark:dark-text-color font-semibold ">
          Blog
        </h2>
        <div className=" hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
        </div>
        {/* coming soon  */}
        <ComingSoon />
      </MainLayout>
    </>
  );
}

export default BlogPage;
