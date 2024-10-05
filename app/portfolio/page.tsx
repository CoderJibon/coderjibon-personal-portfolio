import ProjectCard from "@/components/ProjectCard/ProjectCard";
import MainLayout from "../MainLayout";
import { AppData } from "@/data/AppData";
function PortfolioPage() {
  return (
    <>
      <MainLayout>
        <h2 className="text-2xl sm:text-3xl mb-7 text-color dark:dark-text-color font-semibold ">
          Check Out My Latest Projects
        </h2>
        <div
          id="project"
          className="grid  grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4 md:gap-5"
        >
          {AppData.map((item, i) => (
            <ProjectCard key={i} project={item} />
          ))}
        </div>
      </MainLayout>
    </>
  );
}

export default PortfolioPage;
