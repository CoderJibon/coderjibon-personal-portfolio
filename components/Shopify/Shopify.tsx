import { ShopifyProject } from "@/data/ShopifyProject";
import ShopifyProjectCard from "../ShopifyProjectCard/ShopifyProjectCard";

function Shopify() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {ShopifyProject.slice(0, 6).map((project, i) => (
        <ShopifyProjectCard key={i} project={project} />
      ))}
    </div>
  );
}

export default Shopify;
