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
import Contact from './components/Contact'
import Citation from './components/Citation'
import Data from './components/Data'
import PageNotFound from './components/PageNotFound'

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Home />} />
        <Route path="login" element={<Login/>} />
        <Route path="public" element={<Public/>}/>
        <Route path="files" element={<Files/>}/>
        <Route path="contact" element={<Contact/>}></Route>
        <Route path="citation" element={<Citation/>}></Route>
        <Route path="data" element={<Data/>}></Route>
        <Route path="*" element={<PageNotFound />} />

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
