import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import EmailVerify from './pages/EmailVerify/EmailVerify'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import Home from './pages/Home/Home'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import SendEmail from './pages/SendEmail/SendEmail'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import { useAppSelector } from './store/ts_hooks'

const App = () => {
  const { token } = useAppSelector((state) => state.auth)
  return (
    <Router>
      <Routes>
        {token && <Route path='/' element={<Home />} />}
        <Route path='/verify_email' element={<SendEmail />} />
        <Route path='/verify_email/:token' element={<EmailVerify />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route
          path='/forgot_password_verify/:token'
          element={<ChangePassword />}
        />
        <Route path='/forgot_password' element={<ForgotPassword />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default App
