import Product from "../components/product";
import productsJson from "../assets/products.json";

export default function Home() {
  return (
    <main className="home">
      {productsJson.products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </main>
  );
}
