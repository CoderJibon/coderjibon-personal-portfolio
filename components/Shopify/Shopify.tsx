import ShopifyProjectCard from "../ShopifyProjectCard/ShopifyProjectCard";

function Shopify() {
  return (
    <div className="md:flex gap-4">
      <ShopifyProjectCard />
      <ShopifyProjectCard />
      <ShopifyProjectCard />
    </div>
  );
}

export default Shopify;
