import ShopifyProjectCard from "../ShopifyProjectCard/ShopifyProjectCard";

function Shopify() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <ShopifyProjectCard />
      <ShopifyProjectCard />
      <ShopifyProjectCard />
    </div>
  );
}

export default Shopify;
