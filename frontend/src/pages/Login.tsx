import { useState } from "react";
import API from "../api/api";
import { useNavigate, Link } from "react-router-dom";

function Login() {

const navigate = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const login = async () => {

    try {

        const res = await API.post("/api/auth/login", {
            email,
            password
        });

        localStorage.setItem("token", res.data.token);

        alert("Login Success");

        navigate("/dashboard");

    } catch (error) {

        alert("Login Failed");

    }

};

return (

    <div>

        <h2>Login</h2>

        <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />

        <br />

        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />

        <br />

        <button onClick={login}>Login</button>

        <p>
            Don't have an account? <Link to="/register">Register</Link>
        </p>

    </div>

);

}

export default Login;
