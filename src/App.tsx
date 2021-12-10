import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import EmailVerify from './pages/EmailVerify/EmailVerify'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import Home from './pages/Home/Home'
import SendEmail from './pages/SendEmail/SendEmail'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/send_verify_email' element={<SendEmail />} />
        <Route path='/email_verify/:token' element={<EmailVerify />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/change_password/:token' element={<ChangePassword />} />
        <Route path='/forgot_password/:token' element={<ForgotPassword />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  )
}

export default App
