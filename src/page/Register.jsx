import axios from "axios"; 
export default function Register() {


    function regi(){
        const id = document.getElementById("id");
        const pw = document.getElementById("pw");
        const email = document.getElementById("email");
         
        console.log(id);
        const obj = {
          userId: id.value,
          userPw: pw.value,
          userEmail: email.value
        }

        axios.post('http://localhost:8080/api/member/register', obj)
        .then(res=>{
          console.log(res);
        });
    }
  return (
    <div>
      <h1>Register Page</h1>
      아이디 : <input type="text" id="id"/><br/>
      비밀번호 : <input type="password" id="pw"/><br/>
      이메일 : <input type="text" id="email"/><br/>
      <input type="button" value="회원가입" onClick={regi}/>
    </div>
  )
}

