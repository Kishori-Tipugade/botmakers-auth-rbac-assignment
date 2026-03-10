import { useState } from "react";
import API from "../api/api";

function Register() {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const register = async () => {

        try {

            await API.post("/api/auth/register",{
                name,
                email,
                password,
                role:"USER"
            });

            alert("User Registered");

        } catch(error) {
            alert("Registration Failed");
        }

    }

    return(
        <div>

            <h2>Register</h2>

            <input
                placeholder="Name"
                onChange={(e)=>setName(e.target.value)}
            />

            <br/>

            <input
                placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)}
            />

            <br/>

            <input
                type="password"
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
            />

            <br/>

            <button onClick={register}>Register</button>
            <p>
                Already have an account?
                <a href="/login">Login</a>
            </p>

        </div>
    )

}

export default Register;