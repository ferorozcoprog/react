import "../../styles/componentes/ItemListContainer/_ItemListContainer.scss";
import { pedirDatos } from "../../helpers/pedirDatos";
import { ItemList } from "../ItemList/ItemList";

import React, { useEffect, useState } from 'react';

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    
    useEffect ( () => {
        pedirDatos()
            .then((res) => {
                setProductos(res)

            })    
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div>
             <ItemList productos={productos}/>
        </div>
    )
}