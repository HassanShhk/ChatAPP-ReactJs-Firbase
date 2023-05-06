import './App.css';
import MainPage from './Components/MainPage';
import {  Navigate, Routes  } from 'react-router-dom';
import { Route } from 'react-router-dom';
import LogInPage from './Components/LogInPage';
import Signup from './Components/Signup';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';



function App() {


  const {currentUser}=useContext(AuthContext);
 console.log(currentUser);

  const ProtectedRoute=({children})=>{
    if(!currentUser){
      return <Navigate to="/home" />
    }
    return children
  }

 

  return (
 <>
 

<Routes>
<Route path="/login" element={ <ProtectedRoute><LogInPage/></ProtectedRoute>} />
<Route path="/" element={<MainPage/>} />
<Route path="/home" element={<MainPage/>} />
<Route path="/signin" element={<Signup/>} />
</Routes>
   
   
 </>
  )

  }
export default App;
