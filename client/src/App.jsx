import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import LandingPage from './components/dashboard/LandingPage'
import Neet from './components/courses/Neet'
import Jee from './components/courses/Jee'
import User from './components/user/User'
import Courses from './components/user/Courses'
import Admincourses from './components/admin/Admincourses'
import Admin from './components/admin/Admin'
import Usersigninn from './components/auth/user/Usersigninn'
import Usersignup from './components/auth/user/Usersignup'
import Adminignin from './components/auth/admin/Adminsignin'
import Adminsignup from './components/auth/admin/Adminsignup'
import Auth from './components/auth/Auth'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<LandingPage/>}>
        <Route path='/neet' element={<Neet/>} />
        <Route path='/jee' element={<Jee/>} />
      </Route>
      <Route path='/auth' element={<Auth/>}>
        <Route path='/auth/user/signin' element={<Usersigninn/>} />
        <Route path='/auth/user/singup' element={<Usersignup/>} />
      </Route>
      <Route path='/auth' element={<Auth/>}>
        <Route path='/auth/admin/signin' element={<Adminignin/>} />
        <Route path='/auth/admin/singup' element={<Adminsignup/>} />
      </Route>
      <Route path='/user' element={<User/>}>
        <Route path='/user/courses' element={<Courses/>} />
      </Route>
      <Route path='/admin' element={<Admin/>}>
        <Route path='/admin/courses' element={<Admincourses/>} />
      </Route>
      <Route path='*' element={<Error/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

function Error(){
  return(

    <>
    <div>error</div>
    </>
  ) 
  
}


export default App
