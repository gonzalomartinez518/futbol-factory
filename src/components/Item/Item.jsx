import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img className='imgProducto' src={img} alt={nombre} />
        <h4>Nombre: {nombre}</h4>
        <p>Precio: {precio}</p>
        <p>ID: {id}</p>
        <Link to={`/item/${id}`} className='botonProducto'>Ver Detalles</Link>
    </div>
  )
}

export default Item