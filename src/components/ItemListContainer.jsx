import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';

import { products } from "../data/products.js"
import { ItemList } from './ItemList.jsx';

export const ItemListContainer = (props) => {
    const [items, setItems] = useState([])

    const { id } = useParams ();

    console.log(id);

    useEffect(() => {
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });

        myPromise.then( response => {
            if (!id) {
                setItems(response);
            } else {
                const filterCategory = response.filter(
                    (item) => item.category === id
                );
                setItems(filterCategory);
            }
            
        })

    }, [id]);

    console.log(items);


    return  (
        <main>
            <Container className="mt-4">
                <h1>{id}</h1>
                <ItemList items={items} />
            </Container>
        </main>
    );
};