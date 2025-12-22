import React, { useState } from 'react';

function Board() {
  const [students, setStudents] = useState([
    { name: "홍길동", guk: 100, eng: 90, math: 80 } 
  ]);

  const handleAdd = (e) => {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const guk = document.getElementById("guk").value;
    const eng = document.getElementById("eng").value;
    const math = document.getElementById("math").value;

    const newStudent = { name, guk, eng, math };

    setStudents([...students, newStudent]);
    document.getElementById("name").value = "";
    document.getElementById("guk").value = "";
    document.getElementById("eng").value = "";
    document.getElementById("math").value = "";
  };

  return (
    <div>
      <div style={{ width: '100vw', height: '200px', border: '2px blue solid' }}>
        <input type="text" id="name" placeholder="이름" />
        <input type="text" id="guk" placeholder="국어" />
        <input type="text" id="eng" placeholder="영어" />
        <input type="text" id="math" placeholder="수학" />
        <input type="button" value="추가" onClick={handleAdd} />
      </div>

      <StudentInfo studentList={students} />
    </div>
  );
}

function StudentInfo(props) {
  return (
    <div style={{ width: '100vw', height: '400px', border: '2px green solid' }}>
      <h1>학생 정보 리스트</h1>
      <table style={{
                    width: '100%',
                    border: '2px solid black',
                    borderCollapse: 'collapse',
                }}>
        <thead>
          <tr>
            <th>이름</th>                                                                                                                                                                                                                                      
            <th>국어</th>
            <th>영어</th>
            <th>수학</th>
          </tr>
        </thead>
        <tbody>
          {props.studentList.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.guk}</td>
              <td>{item.eng}</td>
              <td>{item.math}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Board;