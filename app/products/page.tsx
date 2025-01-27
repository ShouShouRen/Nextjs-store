import ProductsContainer from "@/components/product/ProductsContainer";

function ProductPages({
  searchParams,
}: {
  searchParams: { layout?: string; search?: string };
}) {
  const layout = searchParams.layout || "grid";
  const search = searchParams.search || "";
  return <ProductsContainer layout={layout} search={search} />;
}

export default ProductPages;
