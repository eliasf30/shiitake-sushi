import "./cardcarrito.css"
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { removeProduct, addProduct } from "../../../redux/cart-actions";
import { addItemCart } from "../../../redux/cart-utils";

export default function CardCarrito({ title, id, image, price, quantity }) {

    const dispatch = useDispatch()




    return (
        <div key={id} className="cartCard" >
            <img className="cartCardImg"  src={image} />
            <h3 style={{ color: "#000000", width: "50%" }}>{title}</h3>
            <div style={{ display: "flex", flexDirection: "column", marginLeft: "10%" }}>
                <h4 style={{ color: "#000000", fontSize: "1.2em", marginBottom:"0", marginTop: "15%" }}>{`$${price * quantity}`}</h4>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: "-10%"}}>
                    <button onClick={() => dispatch(removeProduct(id))} className="productButton">< FaMinus /></button>
                    <h4 style={{ color: "#000000", fontSize: "1.2em" }}>{quantity}</h4>
                    <button onClick={e => dispatch(addProduct({ title, image, price, id }))} className="productButton"><FaPlus /></button>
                </div>
            </div>

        </div>
    )
}
