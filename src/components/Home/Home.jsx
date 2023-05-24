import { Link } from "react-router-dom"
import {auth} from "../../firebase"

export function Home(props) {
    function salir(){
        return auth.signOut();
        Navigate("/");
    }
    return(<div>
        <div>
            <h1>
                <Link to="/login">
                    Login
                </Link>
            </h1>
            <br/>
            <h1>
                <Link to="/signup">
                    Crear Cuenta
                </Link>
            </h1>
        </div>
        {console.log(props.name)}
        <h2>{props.name? `Bienvenido - ${props.name} ` : "Inicie Sesión"}</h2>
        <button onClick={salir}>Salir</button>
    </div>)   
}