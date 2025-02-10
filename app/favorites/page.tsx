import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/product/ProductsGrid";
import { fetchUserFavorites } from "@/utils/actions";

async function FavoritePage() {
  const favorites = await fetchUserFavorites();
  if (favorites.length === 0)
    return <SectionTitle text="You have no favorites yet." />;
  return (
    <div>
      <SectionTitle text="Favorites" />
      <ProductsGrid products={favorites.map((favorite) => favorite.product)} />
    </div>
  );
}

export default FavoritePage;
