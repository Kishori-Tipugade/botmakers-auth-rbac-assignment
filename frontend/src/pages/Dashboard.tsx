import { useEffect, useState } from "react";
import API from "../api/api";

function Dashboard() {

    const [data,setData] = useState("");

    useEffect(()=>{

        const loadData = async () => {

            try {

                const res = await API.get("/api/user");

                setData(res.data);

            } catch(error) {

                setData("Unauthorized");

            }

        }

        loadData();

    },[])

    return(

        <div>

            <h2>Dashboard</h2>

            <p>{data}</p>
            <button onClick={()=>{
                localStorage.removeItem("token");
                window.location.href="/login";
            }}>
                Logout
            </button>

        </div>

    )

}

export default Dashboard;