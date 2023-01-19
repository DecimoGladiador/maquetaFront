import { Link } from "react-router-dom"
import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../assets/UameroSlide1.jpg';
import Image2 from '../assets/UameroSlide2.jpg';
import '../css/Home.css'

const Public = () => {

    const content = (
        <section >
            <header>
                <h1>Welcome to Repair Store!</h1>
            </header>
            <main>
                <p>Located in Beautiful Downtown Foo City, Repair Store provides a trained staff ready to meet your repair needs.</p>
                <p>&nbsp;</p>
                <address>
                    Repair Store<br />
                    555 Foo Drive<br />
                    Foo City, CA 12345<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
          <div className="cover mb-4 d-flex flex-column justify-content-center align-items-center">
          <div className="card card-glass mb-3" style={{maxWidth: '540px'}}>
            <div className="row g-0">
              <div className="col-sm-4">
                <img src={Image1} className="img-fluid rounded-start" alt="download file example"/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title text-white">Card title</h5>
                  <p className="card-text text-white">afadsfasdfasd</p>
                  <p className="card-text text-white"><small>Last updated 3 mins ago</small></p>
                  <button className="btn btn-outline-light">Download</button>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="container">
          <Carousel>
            <Carousel.Item> 
              <div className="carouselUAM w-100 d-flex flex-column justify-content-center align-items-center  text-white">
                <h2>testing slides</h2>
                <p>dlkfjasldjflasdjflasjdlfkjasdlñkfjaslñkdjflñaksdjfñlkasdjfñlkjasdjdsf</p>
                <button className="btn btn-success">view</button>
              </div>
            </Carousel.Item>
            <Carousel.Item> 
              <div className="carouselUAM w-100 d-flex flex-column justify-content-center align-items-center text-white">
                <h2>testing slides2</h2>
                <p>dlkfjasldjflasdjflasjdlfkjasdlñkfjaslñkdjflñaksdjfñlkasdjfñlkjasdjdsf</p>
                <button className="btn btn-success">view</button>
              </div>
            </Carousel.Item>
            <Carousel.Item> 
              <div className="carouselUAM w-100 d-flex flex-column justify-content-center align-items-center text-white">
                <h2>testing slides3</h2>
                <p>dlkfjasldjflasdjflasjdlfkjasdlñkfjaslñkdjflñaksdjfñlkasdjfñlkjasdjdsf</p>
                <button className="btn btn-success">view</button>
              </div>
            </Carousel.Item>
          </Carousel>
          </div>
          <div className="container mt-5 mb-5">
            <div className="row">
              <div className="col">
                <div className="card justify-content-center align-items-center mb-3">
                  <img src={Image1} height="300" className="card-img-top" alt="option1"/>
                    <h5 className="card-title">title1</h5>
                    <p className="card-text">dflkajsdlfjasdljflasdjflñasjdñflkj</p>
                    <button className="btn btn-success">view</button>
                </div>
              </div>
              <div className="col">
                <div className="card justify-content-center align-items-center mb-3">
                  <img src={Image2} height='300' className="card-img-top" alt="option2"/>
                  <h5 className="card-title">title2</h5>
                  <p className="card-text">fasdlfñjasdñlkfjaslkdfj</p>
                  <button className="btn btn-success">view</button>
                </div>
              </div>

            </div>

          </div>
          <section >
            <div className="container-fluid" style={{backgroundColor: '#71ce7e', paddingBottom: '1px', color: 'white'}} >
              <h2>Mantengamonos en contacto</h2>                   
              <p >¿Tienes alguna recomendación o te gustaría saber cuando sera la ultima actualización? Dejanos 
                saberlo por email</p>              
            </div>
         </section>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public