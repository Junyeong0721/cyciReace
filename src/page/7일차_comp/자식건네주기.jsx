import { useState } from "react";

export default function Study() {

    let msg = 'Hellow World';
    let obj = {title: '책 제목', content: '책 내용 '};
    const [카운트, set카운트] = useState(0);

  return (
    <>
      <h1>자식과 부모의 데이터 전달</h1>
      <자식 dataMsg={msg} dataBook={obj}/>
      <자식2 dataCount ={카운트}/>
      <input type = "button" value = "숫자 증가" onClick={e=>{
        e.preventDefault();
        set카운트(카운트 + 1);
      }}/>


    </>
  )
}

function 자식2(props){
    return(
        <div style={{width : '100vw'
            , height: '200px'
            , border : '2px blue solid'}}>
            <h3>자식 Component 영역</h3>
            숫자 : {props.dataCount}
        </div>

    )
}
function 자식(props){
    return(
        <div style={{width : '100vw'
            , height: '200px'
            , border : '2px red solid'}}>
            <h3>자식 Component 영역</h3>
            {props.dataMsg}<br/>
            책 제목 : {props.dataBook.title} / 책 내용 : {props.dataBook.content}
        </div>
    )
}