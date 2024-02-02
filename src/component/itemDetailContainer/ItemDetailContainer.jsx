import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "../itemDetail/ItemDetail";
import Loader from "../loader/Loader";

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(null);

    const { itemId } = useParams()

    useEffect(() => {
        // 1.- armar la referencia
        const docRef = doc(db, 'productos', itemId)

        // 2.- llamar a la ref
        getDoc(docRef)
            .then((docSnapshot) => {
                const doc = {
                    ...docSnapshot.data(),
                    id: docSnapshot.id
                }
                setItem(doc)
            })
            .catch((e) =>
                window.location.assign("/not-found")

            )
            .finally(() => setLoading(false))

    }, [itemId]);

    return (
        <>
            {
                loading ? (<Loader />) : (<ItemDetail product={item} />)
            }
        </>
    )
}

export default ItemDetailContainer;
