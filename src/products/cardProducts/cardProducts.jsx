import { useDispatch } from "react-redux";
import { products } from "../products";
import "./cardProducts.css"
import { addProduct } from "../../redux/cart-actions";

export default function CardProduct({ image, title, price, description, id }) {

    const dispatch = useDispatch()

    return (
        <div className="productCard">

            <h2 className="title">{title}</h2>
            <img src={image} />
            <h3>${price}</h3>
            <div className="descriptionDiv">
                {
                    description.map(desc => <p>{desc}</p>)
                }
            </div>
            <div classname="cardButtons">
                <button className="addCartButton" onClick={e => dispatch(addProduct({ title, image, price, id }))}>Agregar al carrito</button>
            </div>

        </div>
    )
}