import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import ProductCard from "../components/ProductCard/ProductCard";

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    function fetchProducts() {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
    fetchProducts();
  });
  return (
    <Container className="my-5">
      <Row>
        <Col md={4} lg={3} key={`list-singleProduct-${product.id}`} className="mb-5">
          <ProductCard product={product} />
        </Col>
      </Row>
    </Container>
  );
}
