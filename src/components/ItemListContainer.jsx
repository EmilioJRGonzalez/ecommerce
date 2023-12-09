import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { 
    getFirestore, 
    collection,
    getDocs,
    query,
    where
} from "firebase/firestore"

import { ItemList } from './ItemList.jsx';

let categoria;

const categoriasArray = [
    { id: 'videos', texto: 'Placas de Videos' },
    { id: 'mothers', texto: 'Motherboards' },
    { id: 'procesors', texto: 'Procesadores' },
  ];

export const ItemListContainer = (props) => {
    const [items, setItems] = useState([])

    const { id } = useParams ();

    useEffect(() => {        

        let aux;
        aux = categoriasArray.find((categoria) => categoria.id === id);
        if (!aux){
            categoria = ""
        }else{
            categoria = aux.texto
        }
        

        const db = getFirestore();

        const refCollection = !id
            ? collection (db, "items")
            : query(collection(db, "items"), where ("categoryId", "==", id));

            getDocs(refCollection).then((snapshot) => {
                if (snapshot.size === 0) 
                    console.log("no result");
                else
                    setItems(
                        snapshot.docs.map((doc) => {
                            return { id: doc.id, ...doc.data() };
                        })
                    );
            });
    }, [id]);

    return  (
        <main>
            <Container className="mt-4">
                <h1>{categoria}</h1>
                <ItemList items={items} />
            </Container>
        </main>
    );
};