export const ItemCount = ({max, cantidad, setCantidad, agregar}) => {
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    return (
        <div className="flex justify-between items-center">
            <div>
               <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
               <span className="mx-2">{cantidad}</span>
               <button onClick={handleSumar} className="btn btn-outline-primary">+</button> 
            </div>
            <button onClick={agregar} className="btn btn-outline-success my-2">Agregar</button>
        </div>
    )
}