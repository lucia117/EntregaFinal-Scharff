import { useParams } from "react-router-dom"
import ItemCard from "../itemCard/ItemCard"

const ItemList = ({ productos }) => {
    const { categoryId } = useParams()
    return (
        <section className="container m-auto  md:px-10 sm:px-1"  >
            <h2 className="text-4xl mb-1 mt-3 ">
                {!categoryId ? "Todos los productos" : categoryId.toUpperCase()}
            </h2>
            <hr />
            <div className="grid gird-cols-4 md:grid-cols-4 sm:grid-cols-4 gap-3 ">
                {
                    productos.map((item) => <ItemCard producto={item} />)
                }
            </div>
        </section>
    )
}

export default ItemList