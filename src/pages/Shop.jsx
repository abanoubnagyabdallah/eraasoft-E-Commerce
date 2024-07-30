import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import ProductsFilter from "../components/ProductsFilter/ProductsFilter";

export default function Shop() {
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
    <Container className="my-5">
      <ProductsFilter/>
      <Row className="my-5">
        {products.map((product) => {
          return (
            <Col md={4} lg={3} key={`list-shop-${product.id}`} className="mb-5">
              <ProductCard product={product} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
