import FavoriteToggleButton from "@/components/product/FavoriteToggleButton";
import ProductReviews from "@/components/reviews/ProductReviews";
import SubmitReview from "@/components/reviews/SubmitReview";
import AddToCart from "@/components/single-product/AddToCart";
import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import ProductRating from "@/components/single-product/ProductRating";
import ShareButton from "@/components/single-product/ShareButton";
import { fetchSingleProduct, findExistingReview } from "@/utils/actions";
import { formatCurrency } from "@/utils/format";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
async function SingleProductPage({ params }: { params: { id: string } }) {
  // @ts-ignore
  const { id } = await params;
  const product = await fetchSingleProduct(id);
  const { userId } = await auth();
  const reviewDoseNotExist = userId && !(await findExistingReview(userId, id));
  const { name, image, company, description, price } = product;
  const dollarsAmount = formatCurrency(price);
  return (
    <section>
      <BreadCrumbs name={product.name} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <div className="relative h-full">
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{name}</h1>
            <div className="flex items-center gap-x-4">
              <FavoriteToggleButton productId={id} />
              <ShareButton productId={id} name={name} />
            </div>
          </div>
          <ProductRating productId={id} />
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded">
            {dollarsAmount}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
          <AddToCart productId={id} />
        </div>
      </div>
      <ProductReviews productId={id} />
      {reviewDoseNotExist && <SubmitReview productId={id} />}
    </section>
  );
}

export default SingleProductPage;
