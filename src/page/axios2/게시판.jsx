import { login } from './api/로그인/loginService';
import { boardList } from './api/게시판/boardService';

import { useState, useEffect } from 'react';

export default function 게시판() {
    return (
        <div>
            <h1>게시판 페이지</h1>
            <로그인 />
            <게시판영역 />
        </div>
    )
}

function 로그인() {
    function 로그인엑션() {
        const userId = document.getElementById('id');
        const userPw = document.getElementById('pw');

        const obj = {userId: userId.value, userPw: userPw.value};

        login(obj)
        .then(res => {
            console.log(res);
            const data = res.data;
            if(data === '') {
                alert('아이디와 패스워드를 확인해주세요.');
                return ;
            }

            //쿠키 저장
            document.cookie = "token="+data+"; path=/; max-age=86400";
        });

    }

    return (
        <div>
            <h1>로그인 페이지</h1>
            ID: <input type="text" id="id"/><br/>
            PW: <input type="password" id="pw"/><br/>
            <input type="button" value="로그인" onClick={로그인엑션}/>

            
        </div>
    )
}

function 게시판영역() {

    const [lists, setLists] = useState([]);

    function 게시판리스트() {
        boardList()
        .then(res=> {
            console.log(res);
            setLists(res.data);
        });
    }


    //컴포넌트 내에서 맨 위, 맨 아래든
    useEffect(() => {
        //alert('이 컴포넌트가 호출이 되었다 !');
        게시판리스트();
    }, []);


    return (
        <div>
            {/* <input type="button" value="게시판 불러오기" 
                onClick={게시판리스트}
            /> */}

            {lists.map(item => <게시판판넬 key={item.boardIdx} dataInfo={item} />)}
        </div>
    )
}

function 게시판판넬(props) {
    const data = props.dataInfo;
    console.log(data);
    return (
        <div style={{width: '200px', height: '50px', border: '1px solid red'}}>
            <h4>{data.title}</h4>
            <span>{data.userId}</span> / <span>{data.createAt}</span>
        </div>
    )
}