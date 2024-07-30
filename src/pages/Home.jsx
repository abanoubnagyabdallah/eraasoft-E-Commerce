import Slider from "../components/Slider/Slider";
import ProductsSection from "../components/ProductsSection/ProductsSection";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    function fetchProducts() {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
    fetchProducts();
  }, []);
  return (
    <>
      <Container>
        <Slider />
        <ProductsSection
          title="Latest products"
          products={products.slice(0, 10)}
        />
        <ProductsSection title="Offers" products={products.slice(11, 20)} />
      </Container>
    </>
  );
}
