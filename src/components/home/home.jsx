import "./home.css"
import { products } from "../../products/products"
import CardProduct from "../../products/cardProducts/cardProducts"
import { useRef, useState } from "react"
import { isDisabled } from "@testing-library/user-event/dist/utils"

export default function Home() {
    const inputtitle = useRef()


    const [category, UseCategory] = useState("")
   

    const productFiltred =  products.filter(product => product.category === category)

    return (
        <div className="home">
           
            <div className="homeButtons">
                <button onClick={() => {UseCategory("")}} className="filterButtons" disabled={category==""}>Todos</button>
                <button onClick={() => {UseCategory("Comida fusion")}} className="filterButtons" disabled={category=="Comida fusion"}>Comida fusion</button>
                <button onClick={() => {UseCategory("Comida oriental")}} className="filterButtons" disabled={category=="Comida oriental"}>Comida oriental</button>
                <button onClick={() => {UseCategory("Comida peruana")}} className="filterButtons" disabled={category=="Comida peruana"}>Comida peruana</button>
                <button onClick={() => {UseCategory("Sushi")}} className="filterButtons" disabled={category=="Sushi"}>Sushi</button>
                <button onClick={() => {UseCategory("Entradas")}} className="filterButtons" disabled={category=="Entradas"}>Entradas</button>
            </div>
            <div className="productDiv">
               
                {
                (category =="")?  products.map(product => <CardProduct id={product.id} {...product} />) : productFiltred.map(product => <CardProduct id={product.id} {...product} />)
                } 
            </div>
        </div>

    )
}