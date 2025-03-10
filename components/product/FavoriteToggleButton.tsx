" user server";
import { fetchFavoriteId } from "@/utils/actions";
import { auth } from "@clerk/nextjs/server";
import { CardSignInButton } from "../form/Buttons";
import FavoriteToggleForm from "./FavoriteToggleForm";
async function FavoriteToggleButton({ productId }: { productId: string }) {
  const { userId } = await auth();
  if (!userId) return <CardSignInButton></CardSignInButton>;

  const favoriteId = await fetchFavoriteId({ productId });

  return (
    <FavoriteToggleForm
      favoriteId={favoriteId}
      productId={productId}
    ></FavoriteToggleForm>
  );
}

export default FavoriteToggleButton;
