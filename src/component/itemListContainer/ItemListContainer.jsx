import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../itemList/ItemList";
import Loader from "../loader/Loader";


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams()

    useEffect(() => {

        //cargo los productos 
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
