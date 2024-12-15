import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DetailPage from "./pages/DetailPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import ProfilPage from "./pages/ProfilPage";

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/detail-page/:id' element={
          <ProtectedRoute>
          <DetailPage />
          </ProtectedRoute>
          }/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/profil-page' element={<ProfilPage />}/>
      </Routes>
  )
}

export default App;