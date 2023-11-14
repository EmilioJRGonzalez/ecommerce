import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';

import { ItemDetail } from './ItemDetail.jsx';
import { products } from "../data/products.js"

export const ItemDetailContainer = () => {
    const [item, setItem] = useState([null])

    const { id } = useParams ();

    console.log(id);

    useEffect(() => {
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });

        myPromise.then( response => {
                const findId = response.find(
                    (item) => item.id === Number(id)
                );
                setItem(findId);
        })

    }, [id]);

    return  (
        <main>
            <Container className="mt-4">
                {<h1>Detalle</h1>}
                <ItemDetail item={item}/>
            </Container>
        </main>
    );
};