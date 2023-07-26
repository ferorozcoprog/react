import "bootstrap/dist/css/bootstrap.min.css";
import { ItemCard } from "../ItemCard/ItemCard";

export const ItemList = ({productos}) => {

    return (
        <div className="container">
            <h2>Catálogo de productos</h2>
            <hr />
            <div className="row">
                {
                    productos.map((prod) => (
                    <ItemCard key= {prod.id} item={prod}/>
                    ))
                }
            </div>
        </div>
    )
}
       