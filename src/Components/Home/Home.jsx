import Sidebar from '../Sidebar/Sidebar'
import Feed from '../Feed/Feed'
import { useState } from 'react'

const Home = ({ isSideBarOpen, category, setCategory }) => {
  return (
    <div className='flex'>
      <Sidebar
        isSideBarOpen={isSideBarOpen}
        category={category}
        setCategory={setCategory}
      />
      <Feed category={category} />
    </div>
  )
}
export default Home
