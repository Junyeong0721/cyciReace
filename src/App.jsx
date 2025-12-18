import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './page/Main';
import Calc from './page/Calc';
import Dark from './page/Dark';
import StudentInfo from './page/StudentInfo';
import Props건네주기 from './page/7일차_comp/자식건네주기';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Main/>}/>
          <Route path={"/calc"} element={<Calc/>}/>
          <Route path={"/dark"} element={<Dark/>}/>
          <Route path={"/studentinfo"} element={<StudentInfo/>}/>
          <Route path={"/comp1"} element={<Props건네주기/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
