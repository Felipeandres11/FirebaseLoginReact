import styles from "./Signup.module.css"
import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import {auth} from "../../firebase"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { InputControl } from "../inputControl/InputControl";
export function Signup() {
    const navigate = useNavigate();
    const [values, setValues] = useState({name:"", email: "", password: ""});
    const [errorMsg, setErrorMsg] = useState([]);
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const registro = () =>{
        if(!values.name || !values.email || !values.password){
            setErrorMsg("Llene todos los campos");
            return
        }
        setErrorMsg("")
        setSubmitButtonDisabled(true)

        createUserWithEmailAndPassword(auth, values.email, values.password).then(async(res)=>{
            setSubmitButtonDisabled(false)
            const user = res.user
            await updateProfile(user, {
                displayName: values.name
            })
            navigate("/")
        }).catch((err)=>{
            setSubmitButtonDisabled(false);
            setErrorMsg(err.message);
        })
    }

    return(<div className={styles.container}>
        <div className={styles.innerBox}>
            <h1 className={styles.heading}>Registro</h1>
            <InputControl label="Name" placeholder="Ingrese un nombre" onChange={(event)=>{
                setValues((prev)=>({
                    ...prev, name: event.target.value
                }))
            }}></InputControl>
             <InputControl label="email" type="email" placeholder="Ingrese un email" onChange={(event)=>{
                setValues((prev)=>({
                    ...prev, email: event.target.value
                }))
            }}></InputControl>
             <InputControl label="password" type="password" placeholder="Ingrese una contraseña" onChange={(event)=>{
                setValues((prev)=>({
                    ...prev, password: event.target.value
                }))
            }}></InputControl>
            
            <div className={styles.footer}>
                <b className={styles.error}>{errorMsg}</b>
                <button onClick={registro} disabled={submitButtonDisabled}>Guardar</button>
            </div>
            <p>
                Si ya tienes una cuenta, iniciar sesión. 
                <span>
                    <Link to="/login"> Login</Link>
                </span>
            </p>

        </div>
    </div>)   
}