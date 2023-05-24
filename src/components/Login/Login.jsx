import styles from "./Login.module.css"
import {useState} from 'react';
import {Link, useNavigate} from "react-router-dom"
import { InputControl } from "../inputControl/InputControl"
import {auth} from "../../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
export function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState({email: "", password: ""})
    const [errorMsg, setErrorMsg] = useState([]);
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false)
    const Loguearse = () => {
        if(!values.email || !values.password){
            setErrorMsg("Datos Incompletos");
            return
        }
        setErrorMsg("")
        setSubmitButtonDisabled(true)
        signInWithEmailAndPassword(auth, values.email, values.password).then(async(res)=>{
            setSubmitButtonDisabled(false);
            navigate("/");
        }).catch((error)=>{
            setSubmitButtonDisabled(true);
            setErrorMsg(error.message)
        })
    }
    return(<div className={styles.container}>
        <div className={styles.innerBox}>
            <h1 className={styles.heading}>Login</h1>
                
                <InputControl label="Email: " type="email" onChange={(event)=>{
                    setValues((prev)=>({
                    ...prev, email: event.target.value
                    })
                    )
                }} placeholder="Ingrese su correo"></InputControl>

                <InputControl label="Contraseña: " type="password" onChange={(event)=>{
                    setValues((prev)=>({
                    ...prev, password: event.target.value
                    })
                    )
                }} placeholder="Ingrese su contraseña"></InputControl>

                <div className={styles.footer}>
                    <b className={styles.error}>{errorMsg}</b>
                    <button onClick={Loguearse} disabled={submitButtonDisabled}>Iniciar Sesión</button>
                    <p>Crear Cuenta <span><Link to="/Signup">Registrar</Link></span></p>
                </div>
        </div>
    </div>)   
}