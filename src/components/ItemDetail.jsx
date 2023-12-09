import { useContext } from "react";

import { ItemCounter } from "./ItemCounter";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({ item }) => {
    const { onAdd } = useContext( CartContext );

    const add = (quantity) => {
        onAdd(item, quantity);
    }
    return (
        <>
            <h2>{item.title}</h2>
            <img src={item.ImageId} width="600px" height="650px"/>
            <h3>Stock: {item.stock}</h3>
            <ItemCounter onAdd={add} stock={item.stock} initial={1}/>
        </>
    );
};