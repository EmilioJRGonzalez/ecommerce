import { useState } from "react"
import { Button } from "react-bootstrap";

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
            <br/> 
            <div style={{ display: "flex" }}>
            <div style={{ fintSize: 32 }} onClick={handleDecreaseCount}>-</div>
            <mark>{count}</mark>
            <div style={{ fintSize: 32 }} onClick={handleIncreaseCount}>+</div>
            </div>
            <Button onClick={handleAdd}>Agregar al carrito</Button> 
        </>
    )
}