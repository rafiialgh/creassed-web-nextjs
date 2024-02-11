import Navbar from "./navbar.js";
import Hero from "./hero.js";
import Footer from "./footer.js";
import Card from "./card.js";
import Product from "./product.js";

export default function App() {
  return (
    <div>
      <Navbar />
      
      <Hero />

      <div class="md:flex md:justify-center">
        <div class="max-w-fit mt-10 ml-2 mb-3 sm:mt-10 sm:mb-3">
          <h3 class="font-bold text-lg text-slate-600 sm:text-xl uppercase tracking-wider m-10 sm:mx-20">
            Our Collections
          </h3>
        </div>
      </div>

      <Product />

      <Footer />
    </div>
  );
}
