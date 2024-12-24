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
