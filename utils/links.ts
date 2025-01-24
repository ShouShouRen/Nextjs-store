type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/products", label: "products" },
  { href: "/favorite", label: "favorite" },
  { href: "/cart", label: "cart" },
  { href: "/orders", label: "orders" },
];
