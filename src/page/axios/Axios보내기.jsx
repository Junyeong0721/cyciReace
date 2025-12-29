import axios from "axios"; 
import { useState } from "react";


export default function Study(){

    const [리스트, set리스트] = useState([]);

    function test1(){
        axios.get('http://localhost:8080/test1')
        .then(res=>{
            console.log(res);
        });
    }
    function test2(){
        axios.get('htto://localhost:8080/data1', {params : {}})
        .then(res=>{
            console.log(res);
        })
    }
    function test3(){
        axios.get('http://localhost:8080/data2', {
                params: {
                    name: "준영",
                    age: 10
                }
            })
        .then(res=>{
            console.log(res);
        })
    }
    function test4(){
        axios.get('http://localhost:8080/data3', {
            params: {
                num1: 10,
                num2: 15
            }
        })
        .then(res=>{
            console.log(res);
        })
    }
    function post1(){
        axios.post('http://localhost:8080/post1', {
            'name': "홍길동",
            'age': 20
        })
        .then(res=>{
            console.log(res);
        })
    }
    function res1(){
        axios.get('http://localhost:8080/res1', {
            params: {
                name: "홍길동",
                age: 20
        }})
        .then(res=>{
            console.log(res.data);
        })
    }
    function boardList(){
        axios.get('http://localhost:8080/api/board/list')
        .then(res=>{
            if(res.status !== 200) console.log('error');

            console.log(res.data);
            const list = res.data;
            console.log(list);
            set리스트(list);
        })
    }
    function 자식이부모부르는함수(){
        boardList();
    }


    return(
        <div>

            <h1>게시판 입력하기</h1>
            <게시판만들기 eventHelp={자식이부모부르는함수}/>


            <h1>Axios 사용해보기</h1>
            <input type="button" value="boardList"
            onClick={boardList}/>
            {리스트.map(item=>(
                <div key={item.boardIdx}>
                    <span> {item.userId} </span>
                    <span> {item.title} </span>
                    <span> {item.createdAt} </span>
                </div>
            ))}
            <input type="button" value="res1"
            onClick={res1}/>
            <input type="button" value="post1"
            onClick={post1}/>
            
            <input type="button" value="axios보내기1"
            onClick={test1}/>
            <input type="button" value="axios보내기2"
            onClick={test2}/>
            <input type="button" value="axios보내기3"
            onClick={test3}/>
            <input type="button" value="operation"
            onClick={test4}/>
            
            
            
            
            
            
            
            
        </div>
    )
}
function 게시판만들기(){

    function 게시판만들기(){
        const title = document.getElementById("title");
        const id = document.getElementById("id");
        const content = document.getElementById("content");

        const obj = {
            title: title.value,
            userId: id.value,
            content: content.value
        }

        axios.post('http://localhost:8080/api/board/register', obj)
        .then(res=>{
            console.log(res);
        })
    }
    return(
        <div>
            제목 <input type="text" id="title"/>
            작성자 <input type="text" id="id"/>
            내용 <textarea style={{width:'300px', height:'100px'}} id = "content"></textarea>
            <input type="button" value="게시판만들기" onClick={게시판만들기}/>
        </div>
    )
}