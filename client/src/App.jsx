import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import LandingPage from './components/dashboard/LandingPage'
import User from './components/user/User'
import Courses from './components/user/Courses'
import Admincourses from './components/admin/Admincourses'
import Admin from './components/admin/Admin'
import Usersigninn from './components/auth/Usersigninn'
import Usersignup from './components/auth/Usersignup'
import Adminsignin from './components/auth/Adminsignin'
import Adminsignup from './components/auth/Adminsignup'
import Web3 from './components/courses/Web3'
import Web2 from './components/courses/Web2'
import Dsa from './components/courses/Dsa'
import Error from './components/error/Error'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}>
          </Route>

          <Route path='/purchase/web2' element={<Web2 />} />
          <Route path='/purchase/web3' element={<Web3 />} />
          <Route path='/purchase/dsa' element={<Dsa />} />

          <Route path='/auth/signin' element={<Usersigninn />} />
          <Route path='/auth/signup' element={<Usersignup />} />

          <Route path='/auth/admin/signin' element={<Adminsignin />} />
          <Route path='/auth/admin/signup' element={<Adminsignup />} />

          <Route path='/courses' element={<User />}>
            <Route path='/courses' element={<Courses />} />
          </Route>
          <Route path='/admin' element={<Admin />}>
            <Route path='/admin' element={<Admincourses />} />
          </Route>
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}




export default App
