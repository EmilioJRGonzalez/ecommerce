import { Item } from "./Item";
import Row from 'react-bootstrap/Row';

export const ItemList = ({items}) => {    
    return (
        <Row className="mb-4" lg={3}>
          {items &&
            items.map((item) => {
              return (
                <Item key={item.id} item={item}/>
              );
            })}
        </Row>
    );
};