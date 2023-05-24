import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useState, useEffect} from 'react';
import {Login} from '../components/Login/Login'
import {Home} from '../components/Home/Home'
import { Signup } from '../components/Signup/Signup'
import {auth} from "../firebase"


export function MyRoutes() {
    const [userName, setUserName] = useState([])
    
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                console.log(user)
                setUserName(user.displayName)
            }else{
                setUserName([])
            } 
        })
    }, [])

    return(<div>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home name={userName}/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/signup" element={<Signup/>}/>
            </Routes>
        </Router>
    </div>)   
}