import { featchFeaturedProducts } from "@/utils/actions";
import EmptyList from "../global/EmptyList";
import SectionTitle from "../global/SectionTitle";
import ProductsGrid from "../product/ProductsGrid";

async function FeaturedProducts() {
  const products = await featchFeaturedProducts();
  if (products.length === 0) {
    return <EmptyList />;
  }
  return (
    <section className="pt-24">
      <SectionTitle text="Featured Products" />
      <ProductsGrid products={products} />
    </section>
  );
}

export default FeaturedProducts;
