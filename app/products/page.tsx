import ProductsContainer from "@/components/product/ProductsContainer";
export default async function ProductPages({
  searchParams,
}: {
  searchParams: { layout?: string; search?: string };
}) {
  const params = await searchParams;
  const layout = params?.layout || "grid";
  const search = params?.search || "";

  return <ProductsContainer layout={layout} search={search} />;
}
