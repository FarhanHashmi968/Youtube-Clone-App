import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Video from './Components/VideoList/Video'

const App = () => {
  const [isSideBarOpen, setSideBarOpen] = useState(true)
  const [category, setCategory] = useState('entertainment')

  return (
    <div className='font-sans'>
      <Navbar
        isSideBarOpen={isSideBarOpen}
        setSideBarOpen={setSideBarOpen}
        setCategory={setCategory}
      />
      <Routes>
        <Route
          path='/'
          element={
            <Home
              isSideBarOpen={isSideBarOpen}
              setCategory={setCategory}
              category={category}
            />
          }
        />
        <Route
          path='/video/:videoId'
          element={<Video isSideBarOpen={isSideBarOpen} />}
        />
      </Routes>
    </div>
  )
}
export default App
