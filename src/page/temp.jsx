import axios from "axios";
export default function JWTLogin() {

  function getCookie(name) {
    const value = document.cookie
      .split('; ')
      .find(row => row.startsWith(name + '='));
    return value ? value.split('=')[1] : null;


  }
  function 쿠키확인() {
    const token = getCookie('token');
    console.log('토큰확인 : ' + token);

  }
  function 로그인() {
    const id = document.getElementById("id");
    const pw = document.getElementById("pw");

    const obj = {
      userId: id.value,
      userPw: pw.value
    }
    axios.post('http://localhost:8085/api/auth/login', obj)
      .then(res => {
        console.log(res);

        if (res.status !== 200) {

          console.log('error');
          return;
        }
        const restoken = res.data.data;

        if (!res.status === 200){
          alert("아이디와 패스워드를 확인해주세요");
          return;
        }
        console.log('토큰 발급 확인 : ' + restoken);
        document.cookie = "token=" + restoken + "; path=/; max-age=86400";
      })
  }

  return (
    <div>
      <h1>Login Page</h1>

      아이디 : <input type="text" id="id" /><br />
      비밀번호 : <input type="password" id="pw" /><br />
      <input type="button" value="로그인" onClick={로그인} />
      <input type="button" value="쿠키 확인" onClick={쿠키확인} />
      <다른페이지 />
    </div>
  )
  function 다른페이지() {
    function getCookie(name) {
      const value = document.cookie
        .split('; ')
        .find(row => row.startsWith(name + '='));
      return value ? value.split('=')[1] : null;


    }
    function 쿠키확인() {
      const token = getCookie('token');
      console.log('토큰확인 : ' + token);

    }

    function api호출() {
      const token = getCookie('token');

      axios.get('http://localhost:8085/api/board/list', {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
        .then(res => {
          console.log(res);
        });
    }

    return (
      <div style={{ width: '100vw', height: '300px', border: '3px red solid' }}>
        <h1>다른페이지</h1>
        <input type="button" value="로그인후 실행버튼" onClick={api호출} />
      </div>
    )
  }

}

