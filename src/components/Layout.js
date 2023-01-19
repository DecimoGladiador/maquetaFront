import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from './Footer'


const Layout = () => {
    return (
        <>
        <NavBar></NavBar>
            <Outlet />
        <Footer></Footer>
        </>
    )
}

export default Layout