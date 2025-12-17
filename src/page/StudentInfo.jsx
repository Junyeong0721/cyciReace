import stu from '../data/student.json';

function StudentInfo() {

  return (
    <>
        <h1>학생 정보 리스트</h1>
        <table>
            <thead>
            <tr>
                <th>이름</th>
                <th>나이</th>
                <th>이메일</th>
                <th>지역</th>
            </tr>
            </thead>
            <tbody>
                for{stu.student.map((stu, index)=>{

                    return (
                        <tr>
                            <td>{stu.id}</td>
                            <td>{stu.name}</td>
                            <td>{stu.age}</td>
                            <td>{stu.email}</td>
                            <td>{stu.region}</td>
                        </tr>
                    )
                    
                })}

            </tbody>
        </table>
    </>
  )
}

export default StudentInfo
