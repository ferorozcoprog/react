import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"

export const useProductos = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState([true])
    console.log(productos)
    
    const { categoryId } = useParams()
    
    useEffect (() => {
        setLoading(true)

        //1. armar referencia (sync)
        const productosRef = collection(db, "productos")
        const q = categoryId
                    ? query(productosRef, where('category', "==", categoryId) )
                    : productosRef
        // 2.- llamar a esa ref (async)
        getDocs(q)
            .then((resp) => {
                const docs = resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                
                setProductos(docs)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))

    },[categoryId])

    return { productos, loading }

}