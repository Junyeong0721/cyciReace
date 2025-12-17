import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Dark() {
  const [다크모드, set다크모드] = useState(false);

  const 페이지이동 = useNavigate();
  return (
    <>
    <input type = "button" value = "다크모드 변경" onClick={e=>{
        set다크모드(!다크모드);
    }}/>
    <div id = "hello" style={{
        backgroundColor:다크모드 ? "white" : "black",
        color:다크모드 ? "black" : "white",
        width : "100vw",
        height : "500px"

    }}><h2>Hello World</h2></div>
    <input type = "button" value = "Home 이동하기" onClick={e=>{
      페이지이동("/");
    }}/>


    </>
  )
}

export default Dark
