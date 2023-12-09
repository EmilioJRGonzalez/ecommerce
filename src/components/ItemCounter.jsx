import { useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap";

export const ItemCounter = ({ onAdd, stock, initial }) => {
    const [count, setCount] = useState(initial);

    const handleIncreaseCount = () => {
        if(stock > count){
            setCount(prev => prev + 1)
        }
    }

    const handleDecreaseCount = () => {
        if(count > 1){
            setCount(prev => prev - 1)
        }
    }

    const handleAdd = () => {
        onAdd(count);
        setCount(initial);
    }

    return(
        <>
            <br/> 
            <div style={{ display: "flex" }}>
            <div className="cart m-2" onClick={handleDecreaseCount}>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;</div>
            <mark className="cartMark m-1">{count}</mark>
            <div className="cart m-2" onClick={handleIncreaseCount}>&nbsp;&nbsp;&nbsp;+&nbsp;&nbsp;&nbsp;</div>
            </div>
            <Button variant="light" onClick={handleAdd}>Agregar al carrito</Button> 
        </>
    )
}