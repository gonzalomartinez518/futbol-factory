import "./CartWidget.css"

const CartWidget = () => {
    const imagenCarrito = "../img/carrito.png"
    return (
        <div>
            <img className="imgCarrito img-fluid" src={imagenCarrito} alt="carrito" />
            <p>3</p>



        </div>
    )
}

export default CartWidget