import React from "react";

const Citation = ()=>{
    return(
        <>
            <section className="container h-100 d-flex align-items-center mb-5">
                <div className="col">
                    <div className="row">
                        <h3>MLA – Modern Language Association 8th edition</h3>
                        <p>Davis, Stacy C., and Robert G. Boundy. Transportation Energy Data Book: Edition 40. 
                           Oak Ridge National Laboratory, 2022, https://doi.org/10.2172/1878695.</p>
                    </div>
                    <div className="row">
                        <h3>Chicago – Chicago Manual of Style 16th edition</h3>
                        <p>Davis, Stacy C, and Robert G Boundy. Transportation Energy Data Book: Edition 40.
                           Oak Ridge, TN: Oak Ridge National Laboratory 2022. https://doi.org/10.2172/1878695.</p>
                    </div>
                    <div className="row">
                        <h3>APA – American Psychological Association 6th edition</h3>
                        <p>Davis, S. C., & Boundy, R. G. (2022). Transportation Energy Data Book: Edition 40. 
                           Oak Ridge: Oak Ridge National Laboratory. Retrieved from https://doi.org/10.2172/1878695.</p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Citation