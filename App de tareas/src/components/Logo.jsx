import React from "react";
import Danrologo from "../img/danro-logo.svg";
import '../stylesheets/Logo.css';

const Logo = (props) => (
    <div className="danro-titular">
        <div className="titulo">
            <img src={Danrologo} alt="Logo" />
            <h1>{props.titulo}</h1>
        </div>
        <div className="subtitulo">
            <p>{props.subtitulo}</p>
        </div>
    </div>
);

export default Logo;

