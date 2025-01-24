import db from "@/utils/db";

export const featchFeaturedProducts = async () => {
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
  });
  return products;
};

export const fetchAllProducts = async () => {
  return await db.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};
