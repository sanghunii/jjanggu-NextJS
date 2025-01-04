"use client"

import {useState} from "react";
import styles from "./chatbot.module.css"

import axios, { HttpStatusCode} from "axios"

export default function chatbot() {


    const [chat, setChat] = useState('None');
    const getChat = async () => {
        const res = await axios.get("http://127.0.0.1:8000/chatBot");
        console.log(chat);
        setChat(res.data.answer);
        console.log(res.data.answer);
    }

    return (
        <div>
            <title>ChatBotTestPage</title>


            <div className={styles.test_box}>
                <h1>ChatBot Test</h1> 
                <button onClick={getChat}><h1>CreateResponse</h1></button>
                <h3>ChatBot's Response : <br></br> {chat}</h3>
            </div>

        </div>
    )
}
