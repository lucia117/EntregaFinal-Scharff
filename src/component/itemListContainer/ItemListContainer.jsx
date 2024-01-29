import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../itemList/ItemList";
import Loader from "../loader/Loader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config"


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false); //Cambiar a true 

    const { categoryId } = useParams()

    useEffect(() => {

        //cargo los productos 
        const productosRef = collection(db, 'productos')

    })

    return (
        <>
            {
                loading
                    ? <Loader />
                    : <ItemList />

            }
        </>
    )
};

export default ItemListContainer;
