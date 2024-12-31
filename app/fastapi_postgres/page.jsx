"use client"

import {useState} from "react";
import styles from "./fastapi_postgres.module.css"

import axios, { HttpStatusCode } from "axios"

export default function fastapi_postgres() {
/*
fastapi test page 
input tag공부해서 사용해 보기 

<< api list >> 
1. get
    input으로 id(primary key)넣고 값 받아오기 - query params
        -> get은 request body가 없음
    값이 없다면 404 not found (이건 backend에서 해야함)

2. post
    input으로 __person_name__ - request body 
    정상적으로 저장 됐다면 (http 201을 받았다면) 정상 수행 표시
        그렇지 않다면 예외처리 
    (여유 되면) input값 webstorage에 저장하고 그 값 표시하는 div 추가. 
 */    

    //입력을 받고 입력 받은 값을 페이지에다가 띄워보자
    const [input, setInput] = useState('None');
    const [text, setText] = useState('Initial');
    
    const changeText = () => {
        console.log("POST new text");
        setText("POST new text");
    }





    
    //POST data to DataBase
    const [postId, setPostId] = useState('None');
    const [newName, setNewName] = useState('None');         //사용자의 입력 (DB에 추가되는 사람의 이름.)
    const [postState, setPostState] = useState('None');
    const fastPost = async() => {
        const res = await axios.post("http://127.0.0.1:8000/new_person", {
                "name": newName,
        })
        if (res.status==HttpStatusCode.Created) {
            console.log("success to store");
            setPostState(res.status);
            setPostId(res.data.id);
        }
        else {
            console.log("fail to store");
            setPostState(res.status);
        }
    }   


    

    //GET data from DataBase
    const [getPerson, setGetPerson] = useState('None');
    const [id, setId] = useState(0);
    const [getState, setGetState] = useState('None');
    const fastGet = async() => {
        const res = await axios.get("http://127.0.0.1:8000/person", {
            params:{"id": id}
        })
        if (res.status == HttpStatusCode.Ok) {
            alert("success to get data from database");
            setGetState(res.status);
        }
        else {
            alert("fail to get data from database");
            setGetState(res.status);
        }
        setGetPerson(res.data.person);
        console.log(res.data.person);
    }



    return (
        <div className={styles.test_box}>
            <div>
                <button className={styles.other_box}onClick={changeText}>Click!!</button>
                <h1>{text}</h1>
            </div>

            <div>
                <input  type="text" value={newName} placeholder="test field"
                onChange={(e) => {
                    setNewName(e.target.value)
                    console.log("event : ", e.target.value);
                    console.log("test value : ", newName);
                }} />
                <button onClick={fastPost}>
                    <h2>POST</h2>
                </button> 
                <p className={styles.text_box}>POST버튼을 누르면 DB에 저장</p>
                <h1>post status : {postState}</h1>
                <h1>Added person name : {newName}</h1>
            </div>


            <br></br><br></br>
                

            <div>
                <input type="number" value={id} 
                onChange={(e)=>{
                    setId(e.target.value);
                }}/>
                <button onClick={fastGet}>
                    <h2>GET</h2>
                </button>
                <p className={styles.text_box}>GET버튼을 누르면 DB에서 데이터 꺼내옴</p>
                <h1>get status : {getState}</h1>
                <h1>get data : {getPerson}</h1>
            </div>
        </div>
    )
}