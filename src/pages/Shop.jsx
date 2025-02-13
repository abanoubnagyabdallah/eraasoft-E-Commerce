import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import ProductsFilter from "../components/ProductsFilter/ProductsFilter";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [filterQuery, setFilterQuery] = useState("");

  useEffect(() => {
    function fetchProducts() {
      fetch(`https://fakestoreapi.com/products?${filterQuery}`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
    fetchProducts();
  }, [filterQuery]);
  return (
    <Container className="my-5">
      <ProductsFilter setFilterQuery={setFilterQuery} />
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
