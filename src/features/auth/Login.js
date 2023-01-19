import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import { useLoginMutation } from './authApiSlice'
import './Login.css'
import image1 from '../../assets/iconUAMmero.jpg'

const Login = () => {
    const userRef = useRef()
    const errRef = useRef()
    const [userName, setUser] = useState('')
    const [userPassword, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const navigate = useNavigate()

    const [login, { isLoading }] = useLoginMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [userName, userPassword])

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(userName,userPassword)

        try {
            const userData = await login({ userName, userPassword }).unwrap()
            
            dispatch(setCredentials({ ...userData, userName }))
            setUser('')
            setPwd('')
            navigate('/welcome')
        } catch (err) {
            if (!err?.originalStatus) {
                // isLoading: true until timeout occurs
                setErrMsg('No Server Response');
            } else if (err.originalStatus === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.originalStatus === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    const handleUserInput = (e) => setUser(e.target.value)

    const handlePwdInput = (e) => setPwd(e.target.value)

    const content = isLoading ? <h1>Loading...</h1> : (
         
        <section className="login container h-100 d-flex align-items-center">
         <div className="row">
            <div className="col mx-auto">
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>      
                    <div className="container my-5">
                    <div className="row">
                        <div className="col-6 mb-5">
                        <div className="d-flex flex-column">
                            <div className="text-center">
                            <img src={image1} style={{ width: '185px' }} alt="logo" />
                            <h4 className="mt-1 mb-5 pb-1">Nosotros somo el equipo UAMmero</h4>
                            </div>

                            <p>Por favor inicia sesión en tu cuenta</p>
                            <form onSubmit={handleSubmit}>
                            <div className="form-group">
                            <label htmlFor="username">Nombre de usuario</label>
                            <input 
                            type="text"
                            className="form-control"
                            id="username"
                            ref={userRef}
                            value={userName}
                            onChange={handleUserInput}
                            autoComplete="off"
                            required
                            placeholder='Nombre de usuario'
                            />
                            </div>
                            <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input 
                            type="password"
                            id="password"
                            className="form-control"
                            onChange={handlePwdInput}
                            value={userPassword}
                            required
                            placeholder='Password'
                            />
                            </div>

                            <div className="text-center pt-1 mb-5 pb-1">
                            <button className="btn gradient-custom-2 btn-primary mb-4 w-100">Entrar</button>
                            <a className="text-muted" href="#!">¿Olvidaste tu contraseña?</a>
                            </div>
                        </form>

                            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                            <p className="mb-0">¿Aún no tienes cuenta?</p>
                            <button className='btn btn-outline-danger mx-2'>Regístrate</button>
                            </div>
                        </div>
                        </div>
                        <div className=" gradient-custom-2 col-6 mb-5">
                        <div className="d-flex flex-column align-items-center justify-content-center h-100 mb-4 text-white">
                            <div className="px-3 py-4 p-md-5 mx-md-4">
                            <h4>Somos mas que una idea</h4>
                            <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                </section>
  
    )

    return content
}
export default Login