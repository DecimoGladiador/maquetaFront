import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
import Logo from '../assets/iconUAMmero.jpg';
import { useSelector } from 'react-redux';
import { selectCurrentUser, selectCurrentToken, logOut } from "../features/auth/authSlice"
import '../css/NavBar.css'
import { useDispatch } from 'react-redux';

function NavBar(){
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)
    const dispatch = useDispatch()
    
    const useLogOut = ()=>{
        console.log("hola")
        dispatch(logOut())
    }

    const admin = user.role.roleName ?? false
    
                  
    const test = ()=>{
        console.log(user.role.roleName??"hola")
    }
  
    return(
        <>
            <button onClick={test}>test</button>
          <Navbar key='xl' bg="light" expand='md' className="mb-3" collapseOnSelect>
          <Container>
          <Navbar.Brand >
            <img 
              src={Logo}
              width="140"
              height="70"
              className="d-inline-block align-top"
              alt="UAMmero logo"
            />
          </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-xl`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
              responsive= 'md'
            >
              <Offcanvas.Header closeButton >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`} className="text-color">
                  UAMmero
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav variant='tabs' className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link  eventKey="1" as={Link} to={"/"} ><p className='text-color'>Inicio</p></Nav.Link>
                  <Nav.Link  eventKey="2" as={Link} to={"/citation"} ><p className='text-color'>Citación</p></Nav.Link>
                  <Nav.Link  eventKey="3" as={Link} to={"/data"} ><p className='text-color'>Datos</p></Nav.Link>
                  <Nav.Link  eventKey="4" as={Link} to={"/files"} ><p className='text-color'>Archivos</p></Nav.Link>
                  <Nav.Link  eventKey="5" as={Link} to={"/contact"} ><p className='text-color'>Contacto</p></Nav.Link>
                  {admin?
                  <Nav.Link  eventKey="7" as={Link} to={"/admin"} ><p className='text-color'>Administración</p></Nav.Link>
                  :null}
                  {token?
                  <Nav.Link  eventKey="6" as={Link} onClick={useLogOut} to={"/"} ><p className='text-color'>Salir</p></Nav.Link>
                  :<Nav.Link  eventKey="6" as={Link} to={"/login"} ><p className='text-color'>Regístrate</p></Nav.Link>}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </>
    )
}

export default NavBar;

