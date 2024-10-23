"use client"
import Link from "next/link";
import { useState } from "react";
import styles from "./test_drf.module.css"


import axios from "axios";

export default function test_drf() {
    //DRF GET API TEST
    const [state, setState] = useState('None')
    const [textLen, setTextLen] = useState(0)
    const [id, setId] = useState(10) //여기 useState()안의 값을 바꿔가면서 응답결과를 확인해보자

    const DRF_get = async() => {
        const res = await axios('http://127.0.0.1:8000/polls/drf_api',{
            params: {
                'question_id': id
            }
        })

        //200_OK
        if (res.status == 200) {
            setState(res.status)
            setTextLen(res.data.question_text_length)
        }
        //204_NO_CONTENT
        else if(res.status = 204) {
            setState(res.status)
            setTextLen('NO_CONTENT')
            alert('NO_CONTENT')
        }
    }



    //DRF POST API TEST
    const [postText, setPostText] = useState('NONE')   //useState초기값 바꿔가면서 저장 잘 되는지 확인하기 
    const [postState, setPostState] = useState('NONE')

    const DRF_post = async() => {
        setPostText('TEST POST DATA')   //여기서 저장할 데이터 정해서 안에 넣기
        console.log(postText)
    //POST요청 (axios POST api사용)
        const res = await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/polls/drf_api',
            data: {question_text: postText}
        });
        if (res.status == 201) {
            setPostState(res.status)
            alert('성공적으로 저장했습니다.')
        }
        else {
            setPostState(res.status)
            console.log(postState)
            setPostText('NONE')
            alert('올바르지 않은 요청')
        }
    }
    
    





    return(
        <div className={styles.name_box}>
            <h1>djangoRESTframework로 만든 API를 사용해 보자!!</h1>

            <br/><br/><br/>
        
            <h1>TEST GET API</h1>
            <button className={styles.name_box} onClick={DRF_get}>
                <h1>GET</h1>
            </button>
            <h1>응답 결과 : {textLen}</h1>
            <h1>상태 : {state}</h1>

            <br/><br/><br/>

            <h1>TEST POST API</h1>
            <button className={styles.name_box} onClick={DRF_post}>
                <h1>POST</h1>
            </button>
            <h1>저장한 데이터 : {postText}</h1>
            <h1>상태 : {postState}</h1>

        </div>
    )
}