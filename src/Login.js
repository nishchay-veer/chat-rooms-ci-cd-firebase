import { Button } from "@mui/material";
import React from "react";
import './Login.css';
import {auth , provider} from './firebase'
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
function Login(){
    const [{},dispatch]= useStateValue();
    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type : actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch((error) => alert(error.message));
    };
    return(
        
        <div className="login">
            <div className="login__container">
                <img src="https://play-lh.googleusercontent.com/JbeqCUUB7zCeJKxbqcHpEFGzy-57NzXsS_K2zEu6wNVTby2C036OWfllnhD4EhAoyA" alt = ""/>
                <div className="login_text">
                    <h1>Sign in to Chat-Rooms</h1>
                    <h4>&copy;NishchayVeer </h4>
                    
                </div>
                <Button type = "submit" onClick={signIn}>Sign In With Google</Button>
            </div>
        </div>
    )
}
export default Login;