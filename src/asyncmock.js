const productos = [
    {nombre: "Camiseta Talleres", precio: 8000, id: "1", img: "../img/talleres.jpg", idCat:"liga-argentina"},
    {nombre: "Camiseta Boca", precio: 7000, id: "2", img: "../img/boca.webp", idCat:"liga-argentina"},
    {nombre: "Camiseta River", precio: 8500, id: "3", img: "../img/river.webp", idCat:"liga-argentina"},
    {nombre: "Camiseta Argentina", precio: 9500, id: "4", img: "../img/argentina.webp", idCat:"selecciones"},
    {nombre: "Camiseta Brasil", precio: 7500, id: "5", img: "../img/brasil.png", idCat:"selecciones"},
    {nombre: "Camiseta Barcelona", precio: 8000, id: "6", img: "../img/barcelona.webp", idCat:"liga-espanola"},
    {nombre: "Camiseta Real Madrid", precio: 8500, id: "7", img: "../img/real-madrid.webp", idCat:"liga-espanola"},
    {nombre: "Camiseta Manchester City", precio: 8000, id: "8", img: "../img/manchester-city.webp", idCat:"liga-inglesa"},
    {nombre: "Camiseta Liverpool", precio: 7000, id: "9", img: "../img/liverpool.jpg", idCat:"liga-inglesa"},
    {nombre: "Guantes Nike", precio: 6000, id: "10", img: "../img/guantes-nike.webp", idCat:"guantes"},
    {nombre: "Guantes Drb", precio: 5000, id: "11", img: "../img/guantes-drb.webp", idCat:"guantes"},
    {nombre: "Pelota Adidas Al Rihla", precio: 9500, id: "12", img: "../img/pelota-al-rihla-pro.webp", idCat:"pelotas"},
    {nombre: "Pelota Nike Mercury", precio: 9000, id: "13", img: "../img/pelota-nike.jpg", idCat:"pelotas"},
    {nombre: "Canilleras Adidas Predator", precio: 4000, id: "14", img: "../img/canilleras-adidas-predator.jpg", idCat:"protecciones"},
    {nombre: "Botines Predator Edge", precio: 4000, id: "15", img: "../img/botines-adidas-predator-edge.webp", idCat:"botines-adidas"},
    {nombre: "Botines Speed Portal", precio: 4000, id: "16", img: "../img/botines-adidas-speedportal.webp", idCat:"botines-adidas"},
    {nombre: "Botines Tiempo Legend", precio: 4000, id: "17", img: "../img/botines-nike-tiempo-legend.jpg", idCat:"botines-nike"},
    {nombre: "Botines Ultra Match", precio: 4000, id: "18", img: "../img/botines-puma-ultra-match.jpg", idCat:"botines-puma"}
]

export const getProductos = () => {
    return new Promise ((resolve) => {
        setTimeout( ()=> {
            resolve(productos)
        }, 2000)
    })
}

export const getDetails = (id) => {
    return new Promise (resolve => {
        setTimeout( ()=> {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto)
        }, 2000)
    })
}

export const getCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout( ()=> {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria)
        }, 2000)
    })
}