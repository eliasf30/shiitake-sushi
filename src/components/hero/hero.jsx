import "./hero.css"
import logo from "../../images/logoshiitake.jpg"
import {BsInstagram} from 'react-icons/bs'
export default function Hero() {
    return (
        <div className="hero_Div">
            <img src={logo} style={{margin:"2%"}} />
            <a  target="_BLANK" className="location" href="https://www.google.com/maps/place/C%C3%B3rdoba,%20Argentina">cordoba, argentina</a>
            <a target="_BLANK" href="https://www.instagram.com/shiitake.sushi/">
                <button className="instagramButton">
                    <BsInstagram className="instaIcon"/>
                    <p className="instagramP">@shiitake.sushi</p>
                    
                </button>
            </a>
            <p>Servicio de comida a domicilio</p>
        </div>

    )
}
