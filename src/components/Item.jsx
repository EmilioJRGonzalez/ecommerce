import { Link } from 'react-router-dom';
import { Button, Card, Col, Row } from "react-bootstrap";

export const Item = ({item}) => {

    return (
            <Col key={item.id} className="d-flex">
              <Card className="flex-fill rounded-4 shadow mb-4">
                <Card.Img variant="top" src={item.ImageId} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Text>{item.price}</Card.Text>
                  <Link to={ `/item/${item.id}` }><Button variant="dark">Ver mas</Button></Link>
                </Card.Body>
              </Card>
            </Col>
      );
}


