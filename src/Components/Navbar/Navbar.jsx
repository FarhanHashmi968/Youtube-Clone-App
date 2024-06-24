import menuIcon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import upload from '../../assets/upload.png'
import notification from '../../assets/notification.png'
import more from '../../assets/more.png'
import jack from '../../assets/jack.png'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

const Navbar = ({ isSideBarOpen, setSideBarOpen, setCategory }) => {
  const myRef = useRef(null)
  return (
    <>
      <div className='flex w-full justify-between h-16 items-center px-7 shadow-md sticky top-0 z-50 bg-white'>
        <div className='flex items-center'>
          <img
            src={menuIcon}
            alt=''
            className='h-4  mr-6 cursor-pointer'
            onClick={() => {
              setSideBarOpen(!isSideBarOpen)
            }}
          />
          <Link to='/'>
            <img src={logo} alt='' className=' h-7 cursor-pointer' />
          </Link>
        </div>
        <div className='flex relative items-center'>
          <form
            action=''
            onSubmit={(e) => {
              e.preventDefault()
              console.log(myRef.current.value)
              setCategory(myRef.current.value)
            }}
          >
            <input
              type='text'
              placeholder='Search'
              className=' w-96 p-1 rounded-2xl border-2 pl-4'
              ref={myRef}
            />
            <Link to='/'>
              <img
                src={search}
                alt=''
                className=' h-4 absolute right-2 top-3 cursor-pointer'
                onClick={() => {
                  setCategory(myRef.current.value)
                }}
              />
            </Link>
          </form>
        </div>
        <div className='flex items-center'>
          <img src={upload} alt='' className=' h-7 mr-6 cursor-pointer' />
          <img src={notification} alt='' className=' h-7 mr-6 cursor-pointer' />
          <img src={more} alt='' className=' h-7 mr-6 cursor-pointer' />
          <img src={jack} alt='' className=' h-9 rounded-full cursor-pointer' />
        </div>
      </div>
    </>
  )
}
export default Navbar
