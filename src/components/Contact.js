import React from "react";

const Contact = ()=>{
    return(
        <>
        <section className="container h-100 d-flex align-items-center">
            <div className="col">
                <h1 className="display-1 mb-3">Contact</h1>
                <p>
                Se alienta a los usuarios del Libro de datos 
                de energía de transporte a comentar sobre errores, 
                omisiones, énfasis y organización de este informe a 
                una de las personas que se enumeran a continuación.
                Las solicitudes de copias complementarias adicionales 
                del informe, datos adicionales o información sobre una 
                tabla existente deben remitirse al Dr. Nicolas Dominguez, 
                Universidad Autónoma Metropolitana, Azc.
                </p>
                <div className="row mb-5">
                <div className="col">
                    <h1 className="display-4">Editor</h1>
                    <p>
                    Nicolas Dominguez<br></br>
                    Universidad Autónoma Metropolitana<br></br>
                    Azcapotzalco, CDMX<br></br>
                    Av San Pablo Xalpa 180<br></br>
                    Telefono: 55 5318 9000
                    </p>
                </div>
                <div className="col">
                    <h1 className="display-4">Colaboradores</h1>
                    <p>
                        Dr. jhon Doe<br></br>
                        Departamento de enrgia<br></br>
                        Proyecto de sustentabilidad energetica<br></br>
                        Universidad Autonoma Metropolitana<br></br>
                        E-mail: jhonDoe@azc.uam.mx<br></br>
                    </p>

                </div>
            </div>
            </div>
            

        </section>

        </>
    )
}

export default Contact