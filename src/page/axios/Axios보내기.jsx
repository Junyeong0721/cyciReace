import axios from "axios"; 


export default function Study(){

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

    return(
        <div>
            <input type="button" value="res1"
            onClick={res1}/>
            <input type="button" value="post1"
            onClick={post1}/>
            <h1>Axios 사용해보기</h1>
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