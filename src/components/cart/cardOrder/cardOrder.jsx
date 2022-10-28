import "./cardOrder.css"

import { useDispatch } from "react-redux";



export default function CardCarrito({ title, id, image, price, quantity }) {

    




    return (
        <div key={id} className="orderCard" >
            <img  src={image} />
            <h3 style={{ color: "#000000", width: "50%", fontWeight:"500" }}>{quantity} x  {title}</h3>
            <div className="priceDiv" style={{marginLeft:"10%"}}>
                <h4 style={{ color: "#000000", fontSize: "1.2em",fontWeight:"500" }}>{`$${price * quantity}`}</h4>
            </div>

        </div>
    )
}
