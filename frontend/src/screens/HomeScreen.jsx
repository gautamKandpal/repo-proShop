import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
// import products from "../products";
import Product from "../components/Product";

function HomeScreen() {
  const [products, SetProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products"); //"proxy": "http://localhost:5000"
      SetProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Latest Products </h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            {/* <h3>{product.name}</h3> */}
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen;
