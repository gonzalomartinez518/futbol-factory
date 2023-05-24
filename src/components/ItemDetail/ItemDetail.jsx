import "./ItemDetail.css"

const ItemDetail = ({nombre, precio, img}) => {
  return (
    <div className="contenedorItem">
        <h3>Nombre: {nombre}</h3>
        <h4>Precio: {precio}</h4>
        <img className="contenedorItemImg" src={img} alt={nombre} />
        <p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique eum, cumque possimus quidem cum alias sapiente, quaerat hic laudantium quo ex dicta, nam impedit. Omnis, molestias doloremque. Velit, porro numquam!</p>
    </div>
  )
}

export default ItemDetail