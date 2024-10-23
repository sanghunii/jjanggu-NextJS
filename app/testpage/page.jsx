"use client"
import Link from "next/link";
import { useState } from "react";
import styles from "./testpage.module.css";

import axios from "axios";



export default function test_page() {
    const [ct, setct] = useState(0);


//REST API이용해서 django server와 연동시키기 예제 
//fetch()대신 axios()이용
    const [test, setTest] = useState(0)           

    const test_get = () => {
        axios.get("http://127.0.0.1:8000/polls/api_get", {
            header: "application/json",
            params: {
                'abc': 'afacfacfacfa',
            },
        })
        .then((response) => {setTest(JSON.stringify(response.data))})
        //.then((response) => {setTest(response.data)})
    };



    return (
        <div>
            <div 
                className={styles.name_box}>
                <br></br>
                <h1>Test useState</h1>
                <br></br>

                <button 
                    className={styles.name_box}
                    onClick={()=>setct(ct + 1)}>
                        <h1>add</h1>
                </button>

                <button 
                    className={styles.name_box} 
                    onClick={()=>setct(ct - ct)}>
                        <h1>reset</h1>
                </button>

                <h1>current ct value : {ct}</h1> 
                <br></br>

            </div>
                <br></br><br></br><br></br>
            <div className={styles.name_box}>
                <h1>REST API TEST</h1>
                <h1>글자 길이 : {test}</h1>
                <button className={styles.name_box}onClick={test_get}>
                    <h1>GET</h1>
                </button>
            </div>

        </div>
    )
};