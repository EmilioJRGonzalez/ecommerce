import { useContext, useState } from "react";
import { Container, Table, Button, CloseButton, Form, Row} from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import {
    getFirestore,
    collection,
    addDoc,
  } from "firebase/firestore";

const initialValues = {
    name: "",
    phone: "",
    email: ""
};

export const Cart = () => {
    const [buyer, setBuyer ] = useState(initialValues)

    const { clear, items, onRemove } = useContext(CartContext);
    
    const navigate = useNavigate();
     
    const total = items.reduce((sum, item) => sum + item.quantity * item.price, 0)

    const handleChange = (event) => {
        setBuyer((buyer) => {
            return {
                ...buyer, [event.target.name]: event.target.value
            }
        })
    }

    const sendOrder = () => {
        const order = {
            buyer,
            items,
            total
        };
    
        const db = getFirestore();
        const orderCollection = collection(db, "orders");
    
        addDoc(orderCollection, order).then(({ id }) => {
            if (id) {
                alert("Su orden: " + id + " ha sido completada!");
                setBuyer(initialValues);
                clear();
            }
        });
    };

    if(!items.length) {
        return (
            <Container className="mt-4">
                <h2>Carrito vacio</h2>
                <Button variant="dark" onClick={() => navigate("/")}>INICIO</Button>
            </Container>
            );
    }

    return (
        <Container className="mt-4">
            <h1>Carrito</h1>

            <Table striped>
                <thead>
                    <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Imagen</th>
                    <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {items?.map((item) => (
                        <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td><img src={item.ImageId} width={180}/></td>
                        <td><CloseButton onClick={() => onRemove(item.id)}/></td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td className="fw-bold" colSpan={5}>Total: {total}</td>
                    </tr>
                </tfoot>
            </Table>
            <Button onClick={clear}>Vaciar Carrito</Button>
            <Container className="mt-4 p-4 shadow-lg mb-5 bg-body rounded">
                <Form>
                    <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control 
                                required 
                                type="text" 
                                value={buyer.name} 
                                onChange={handleChange}
                                name="name"
                            />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="phone">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control 
                                required 
                                type="text" 
                                value={buyer.phone} 
                                onChange={handleChange}
                                name="phone"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                                required 
                                type="email" 
                                value={buyer.email} 
                                onChange={handleChange}
                                name="email"
                        />
                    </Form.Group>
                    <Button variant="primary" onClick={sendOrder}>COMPRAR</Button>
                </Form>
            </Container>
        </Container>
    );
}