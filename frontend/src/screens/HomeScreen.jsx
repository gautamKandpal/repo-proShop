import { useGetProductsQuery } from "../slices/productApiSlices";
import { Row, Col } from "react-bootstrap";
import Loader from "../components/Loader";
import { useParams, Link } from "react-router-dom";
import Message from "../components/Message";
import Product from "../components/Product";
import ProductCarousel from "../components/ProductCarousel";
import Paginate from "../components/Paginate";

function HomeScreen() {
  const { pageNumber, keyword } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  return (
    <>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn  btn-light mb-4">
          Go Back
        </Link>
      )}

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <h1>Latest Products </h1>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                {/* <h3>{product.name}</h3> */}
                <Product product={product} />
              </Col>
            ))}
          </Row>
          {/* pagination */}
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
}

export default HomeScreen;
