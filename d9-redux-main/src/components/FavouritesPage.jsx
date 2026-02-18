import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Company from "./Company";
const FavouritesPage = () => {
  const favouritesList = useSelector((currentState) => currentState.favourites.list);
  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1 text-center">Favourites Companies</h1>
        </Col>
        <Col xs={7} className="mx-auto mb-5">
          {favouritesList.map((company, i) => (
            <Company key={"company" + i} company={company} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default FavouritesPage;
