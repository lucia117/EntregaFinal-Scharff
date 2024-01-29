import { useParams } from "react-router-dom"
import ItemCard from "../itemCard/ItemCard"

const ItemList = ({ productos }) => {
    const { categoryId } = useParams()
    return (
        <section className="container m-4">
            <h2 className="text-4xl mb-1 ">
                {!categoryId ? "Todos los productos" : categoryId.toUpperCase()}
            </h2>
            <hr />
            <div className="grid gird-cols-4 md:grid-cols-4 sm:grid-cols-4 gap-3">
                <ItemCard imageUrl="https://http2.mlstatic.com/D_NQ_NP_2X_763796-MLA72180623096_102023-F.webp" title="Remera Hombre Billabong Fundamental Neutral" price="18.000" />
                <ItemCard imageUrl="https://http2.mlstatic.com/D_NQ_NP_2X_652388-MLA54091535621_032023-F.webp" title="Remera Hombre Billabong Fundamental Neutral" price="18.000" />
                <ItemCard imageUrl="https://http2.mlstatic.com/D_NQ_NP_2X_893886-MLU70045140742_062023-F.webp" title="Remera Hombre Billabong Fundamental Neutral" price="18.000" />
                <ItemCard imageUrl="https://http2.mlstatic.com/D_NQ_NP_2X_652388-MLA54091535621_032023-F.webp" title="Remera Hombre Billabong Fundamental Neutral" price="18.000" />
                <ItemCard imageUrl="https://http2.mlstatic.com/D_NQ_NP_2X_763796-MLA72180623096_102023-F.webp" title="Remera Hombre Billabong Fundamental Neutral" price="18.000" />
                <ItemCard imageUrl="https://http2.mlstatic.com/D_NQ_NP_2X_652388-MLA54091535621_032023-F.webp" title="Remera Hombre Billabong Fundamental Neutral" price="18.000" />
                <ItemCard imageUrl="https://http2.mlstatic.com/D_NQ_NP_2X_893886-MLU70045140742_062023-F.webp" title="Remera Hombre Billabong Fundamental Neutral" price="18.000" />
                <ItemCard imageUrl="https://http2.mlstatic.com/D_NQ_NP_2X_652388-MLA54091535621_032023-F.webp" title="Remera Hombre Billabong Fundamental Neutral" price="18.000" />
            </div>


            {/*        
             <div className="flex flex-wrap justify-start gap-10 items-stretch">
                {productos.map((item) => <ItemCard key={item.id} item={item} />)}
            </div> */}

        </section>
    )
}

export default ItemList