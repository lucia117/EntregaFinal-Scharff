import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../itemList/ItemList";
import Loader from "../loader/Loader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config"


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true); //Cambiar a true 

    const { categoryId } = useParams()

    useEffect(() => {
        // 1.- Construir una referencia a la colección 'productos' en la base de datos.
        const productosRef = collection(db, 'productos')

        // 2.- Construir una referencia a los documentos de la colección 'productos' con ciertos filtros.

        const docsRef = categoryId
            ? query(productosRef, where('genero', '==', categoryId))
            : productosRef

        // 3.- Llamar a la referencia y obtener los documentos.
        getDocs(docsRef)
            .then((querySnapshot) => {
                const docs = querySnapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                // Establecer el estado 'productos' con los documentos obtenidos.
                setProductos(docs)
            })
            .finally(() => setLoading(false))

    }, [categoryId]) // El efecto se dispara cada vez que cambia el valor de 'categoryId'.

    return (
        <>
            {
                loading
                    ? <Loader />
                    : <ItemList productos={productos} />

            }
        </>
    )
};

export default ItemListContainer;
