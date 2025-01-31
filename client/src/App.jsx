import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import LandingPage from './components/dashboard/LandingPage'
import Neet from './components/courses/Neet'
import Jee from './components/courses/Jee'
import User from './components/user/User'
import Courses from './components/user/Courses'
import Admincourses from './components/admin/Admincourses'
import Admin from './components/admin/Admin'
import Usersigninn from './components/auth/Usersigninn'
import Usersignup from './components/auth/Usersignup'
import Adminignin from './components/auth/Adminsignin'
import Adminsignup from './components/auth/Adminsignup'
import Auth from './components/auth/Auth'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}>
            <Route path='/neet' element={<Neet />} />
            <Route path='/jee' element={<Jee />} />
          </Route>
          <Route path='/auth' element={<Auth />}>
            <Route path='/auth/signin' element={<Usersigninn />} />
            <Route path='/auth/signup' element={<Usersignup />} />
            <Route path='/auth/admin/signin' element={<Adminignin />} />
            <Route path='/auth/admin/signup' element={<Adminsignup />} />
          </Route>
          <Route path='/courses' element={<User />}>
            <Route path='/courses' element={<Courses />} />
          </Route>
          <Route path='/admin' element={<Admin />}>
            <Route path='/admin/courses' element={<Admincourses />} />
          </Route>
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

function Error() {
  return (

    <>
      <div>error</div>
    </>
  )

}


export default App
