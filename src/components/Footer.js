import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Footer.css"


function FooterComp(){
  
    const activeClass = ({isActive})=> {
    console.log(isActive+"futer")
    return(
      isActive ? "navBarLinkActive":"navBarLinkInactive"
    )
  };;
    
    return(
        <>
         <div className="container-fluid" style={{backgroundColor: '#36a447', paddingBottom: '20px', color: 'white'}}>
              UAMmero es administrada por Nicolas Dominguez para la Universidad Autónoma Metropolitana
        </div>
        <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li><NavLink className={activeClass} to="/">Privacidad</NavLink></li>
                <li><NavLink className={activeClass} to="/data">Accesibilidad</NavLink></li>
                <li><NavLink className={activeClass} to="/files">No discriminación</NavLink></li>
                <li><NavLink className={activeClass} to="/citation">Acerca</NavLink></li>
                </ul>
                <p className="text-center text-success">© 2022 UAMmero, Inc</p>     
        </footer>
           
        </>
    )
    }

export default FooterComp;