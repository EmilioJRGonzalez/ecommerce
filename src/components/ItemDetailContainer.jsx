import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { getFirestore, getDoc, doc } from "firebase/firestore"
import { ItemDetail } from './ItemDetail.jsx';

export const ItemDetailContainer = () => {
    const [item, setItem] = useState([null])

    const { id } = useParams ();

    useEffect(() => {
        const db = getFirestore();

        const refDoc = doc(db, "items", id)

        getDoc(refDoc).then((snapshot) =>{
            setItem({ id: snapshot.id, ...snapshot.data() });
        });
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