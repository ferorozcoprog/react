import "bootstrap/dist/css/bootstrap.min.css";
import { ItemCard } from "../ItemCard/ItemCard";

export const ItemList = ({productos}) => {

    return (
        <div className="container">
            <h2 className="text-2xl font-semibold mb-4">Productos</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {productos.map((prod) => (
                    <div key={prod.id} className="col">
                        <ItemCard item={prod} />
                    </div>
                ))}
            </div>
        </div>
    );
}