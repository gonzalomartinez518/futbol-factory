import "./CartWidget.css"

const CartWidget = () => {
    const imagenCarrito = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxAJ61z_QM7T0jRily674Z2tfrB986vE0akA2B2V5ixeykAmzl_H8V85nccsxD4HCqPD8&usqp=CAU"
    return (
        <div>
            <img className="img-fluid" src={imagenCarrito} alt="carrito" />
            <p>3</p>



        </div>
    )
}

export default CartWidget