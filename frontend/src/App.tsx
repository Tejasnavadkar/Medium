

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { Blog } from './pages/Blog'
import { Blogs } from './pages/Blogs'
import { Publish } from './pages/Publish'
import { PrivateRoute } from './components/PrivateRoute'
import { RecoilRoot } from 'recoil'
import { UsersPost } from './pages/UsersPost'


function App() {


  return (
    <>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />

          <Route path='/' element={<PrivateRoute />} >
            <Route path='/blog/:id' element={<Blog />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/publish' element={<Publish />} />
            <Route path='/yourPosts'element={<UsersPost/>}  /> 
          </Route>
        </Routes>
      </BrowserRouter>
      </RecoilRoot>
    </>
  )
}

export default App
