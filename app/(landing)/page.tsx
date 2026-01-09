import CategoriesSection from "./components/layouts/home/categories";
import HeroSection from "./components/layouts/home/hero";
import ProductSection from "./components/layouts/home/products";

export default function Home() {
  return (
  <main>
    <HeroSection />
    <CategoriesSection />
    <ProductSection />
  </main>
  );
}
