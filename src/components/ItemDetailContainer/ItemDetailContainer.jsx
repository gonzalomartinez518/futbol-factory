import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import { getDetails } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    const {idItem} = useParams();


    useEffect(() => {
        getDetails(idItem)
            .then(response => setProducto(response))
            .catch(error => console.log(error))
    }, [idItem])


    return (
        <>
            <ItemDetail {...producto} />
        </>
    )
}

export default ItemDetailContainer