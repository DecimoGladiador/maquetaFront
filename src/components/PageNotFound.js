import React from "react";
import { Link } from "react-router-dom";
import '../css/PageNotFound.css'

const PageNotFound = ()=>{
    return(
        <>
        <div className="not-found-page">
        <h1>Página no encontrada</h1>
        <p>Lo sentimos, la página que estás buscando no ha sido encontrada.</p>
        <Link to="/" className="not-found-link">Volver al inicio</Link>
        </div>
        </>
    )
}

export default PageNotFound