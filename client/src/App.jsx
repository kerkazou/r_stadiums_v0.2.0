import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Provider } from "react-redux";
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/auth" element={<Outlet />} >
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/admin" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
