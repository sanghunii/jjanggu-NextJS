//page for fastapi 
"use client"


import styles from "./test_fastapi.module.css";
import { useState } from "react";

//api test
import axios from "axios"


export default function test_fastapi() {
    //define functions using javascripts

    //FastAPI get method 
    const [response, setResponse] = useState("nothing");

    const FastGET = async () => {
        const res = await axios.get("http://127.0.0.1:8000/", {
            method: 'get',
        });
        setResponse(res.data.message);
        console.log(res.data.message);
    }
    
    

    return (
        <div className={styles.name_box}>
            <h1>page for test fast api</h1>

            <br/><br/>
        
            <button className={styles.button} onClick={FastGET}>
                <h1>FastAPI(GET)</h1>
            </button>
            <h1>answer : {response}</h1>
        </div>
    )
}