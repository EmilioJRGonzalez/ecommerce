import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({item}) => {

    return (
        <Card className='rounded-4 shadow' style={{ width: '30rem' }}>
          <Card.Img variant="top" src={item.ImageId} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              {item.description}
            </Card.Text>
            <Link to={ `/item/${item.id}`  }><Button variant="primary">Ver mas</Button></Link>
          </Card.Body>
        </Card>
      );
}


