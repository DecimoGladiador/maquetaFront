import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Login from './features/auth/Login'
import Welcome from './features/auth/Welcome'
import RequireAuth from './features/auth/RequireAuth'
import UsersList from './features/users/UsersList'
import Home from './components/Home'
import Admin from './components/Admin'
import Files from './components/Files'

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Home />} />
        <Route path="login" element={<Login/>} />
        <Route path="public" element={<Public/>}/>
        <Route path="files" element={<Files/>}/>

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="welcome" element={<Welcome />} />
          <Route path="admin" element={<Admin/>}/>
          <Route path="userslist" element={<UsersList />} />
        </Route>

      </Route>
    </Routes>
  )
}

export default App;
