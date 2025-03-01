import { Suspense } from "react";
import Container from "../global/Container";
import Ads from "./Ads";
import CartButton from "./CartButton";
import DarkMode from "./DarkMode";
import LinksDropdown from "./LinksDropdown";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
function Navbar() {
  return (
    <>
      <Ads />
      <nav className="border-b shadow-lg w-full sticky top-0 z-50 bg-white dark:bg-gray-900">
        <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8 gap-4">
          <Logo />
          <Suspense>
            <NavSearch />
          </Suspense>
          <div className="flex gap-4 items-center">
            <CartButton />
            <DarkMode />
            <LinksDropdown />
          </div>
        </Container>
      </nav>
    </>
  );
}

export default Navbar;
