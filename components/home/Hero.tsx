import Link from "next/link";
import { Button } from "../ui/button";
import HeroCarousel from "./HeroCarousel";

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h2 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h2>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          tenetur! Voluptas exercitationem necessitatibus suscipit soluta, non
          dicta! Nihil eveniet, eos, sit consectetur, neque ab ullam
          voluptatibus aspernatur molestiae tempore aut.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/products">Our Products</Link>
        </Button>
      </div>
      <HeroCarousel></HeroCarousel>
    </section>
  );
}

export default Hero;
