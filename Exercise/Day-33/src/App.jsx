import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/detail-page/:id' element={<DetailPage />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
  )
}

export default App;