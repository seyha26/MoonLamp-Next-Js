import Hero from "./components/Hero";
import Features from "./components/Features";
import Parallax from "./components/Parallax";
import Product from "./components/Product";
import FAQ from "./components/FAQ";
import { getProducts } from "@/utils/fetchStripeProducts";
import Contact from "./components/Contact";

export default async function Home() {
  const products = await getProducts();
  return (
    <>
      <Hero />
      <Features />
      <Parallax />
      {products.map((product) => (
        <Product {...product} key={product.id} />
      ))}
      <FAQ />
      <Contact />
    </>
  );
}
