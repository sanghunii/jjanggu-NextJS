"use client"

import {useState} from "react";
import styles from "./chatbot.module.css"

import axios, { HttpStatusCode} from "axios"

export default function chatbot() {

    const [chat, setChat] = useState("None");
    const [isLoading, setIsLoading] = useState(false);  //로딩 상태 추가
    
    const getChat = async() => {
        setIsLoading(ture);
        setChat("")         //이전 채팅 초기화
    }

    try {
        const response = await fetch("http://127.0.0.1:8000/chatBot");
        if (!response.ok) {
            throw new Error("Failed to fetch chat");
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        // 스트리밍 데이터를 실시간으로 읽기 (이쪽 부분 이해 안됨)
        while (true) {
            const {done, value} = await reader.read();
            if (done) {
                setIsLoading(false); //로딩 종료 (스트리밍 종료)
                break;
            }

            const chunck = decoder.decode(value, {stream: true});
            setChat((prev) => prev + chunck);
        }
    } catch (error) {
        console.error("Error fetching chat:", error);
        setChat("Error occurred while fetching chat");
        setIsLoading(false);
    }
};

    return (
        <div>
            <title>ChatBotTestPage</title>


            <div className={styles.test_box}>
                <h1>Chat Test</h1> 
                <button onClick={getChat}><h1>CreateResponse</h1></button>
                <h3>Chat Response : <br></br> {chat}</h3>
            </div>

        </div>
    )
}
