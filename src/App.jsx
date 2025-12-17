import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './page/Main';
import Calc from './page/Calc';
import Dark from './page/Dark';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Main/>}/>
          <Route path={"/calc"} element={<Calc/>}/>
          <Route path={"/dark"} element={<Dark/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
