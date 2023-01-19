import { useSelector } from "react-redux"
import { selectCurrentUser, selectCurrentToken, logOut } from "./authSlice"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

const Welcome = () => {
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)
    const welcome = user ? `Welcome ${user.userName}!` : 'Welcome!'
    const tokenAbbr = `${token.slice(0, 9)}...`
    const dispatch = useDispatch()

    function useLogOut() {
       console.log("probando")
       dispatch(logOut())
      }

    const content = (
        <section className="welcome">
            <h1>{welcome}</h1>
            <p>Token: {tokenAbbr}</p>
            <p><Link to="/userslist">Go to the Users List</Link></p>
            <button onClick={useLogOut}>hola</button>
            
        </section>
    )

    return content
}
export default Welcome