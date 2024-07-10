import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'

const Sidebar = ({ isSideBarOpen, setCategory, category }) => {
  return (
    <div className='p-4 bg-white sticky left-0 top-16 h-full'>
      <div
        className={`flex items-center cursor-pointer ${
          category === 'entertainment' ? 'rounded-lg p-1 bg-gray-100' : ''
        }`}
        onClick={() => {
          setCategory('entertainment')
        }}
      >
        <img src={home} alt='' className={`w-5 h-5 mr-4`} />
        <span className={`text-base ${isSideBarOpen ? 'block' : 'hidden'}`}>
          Home
        </span>
      </div>
      <div
        className={`flex items-center my-4 cursor-pointer ${
          category === 'gaming' ? 'rounded-lg p-1 bg-gray-100' : ''
        }`}
        onClick={() => {
          setCategory('gaming')
        }}
      >
        <img src={game_icon} alt='' className={`w-5 h-5 mr-4 `} />
        <span className={`text-base ${isSideBarOpen ? 'block' : 'hidden'}`}>
          Gaming
        </span>
      </div>
      <div
        className={`flex items-center my-4 cursor-pointer ${
          category === 'automobiles' ? 'rounded-lg p-1 bg-gray-100' : ''
        }`}
        onClick={() => {
          setCategory('automobiles')
        }}
      >
        <img src={automobiles} alt='' className={`w-5 h-5 mr-4`} />
        <span className={`text-base ${isSideBarOpen ? 'block' : 'hidden'}`}>
          Automobiles
        </span>
      </div>
      <div
        className={`flex items-center my-4 cursor-pointer ${
          category === 'sports' ? 'rounded-lg p-1 bg-gray-100' : ''
        }`}
        onClick={() => {
          setCategory('sports')
        }}
      >
        <img src={sports} alt='' className={`w-5 h-5 mr-4 `} />
        <span className={`text-base ${isSideBarOpen ? 'block' : 'hidden'}`}>
          Sports
        </span>
      </div>
      <div
        className={`flex items-center my-4 cursor-pointer ${
          category === 'shopping' ? 'rounded-lg p-1 bg-gray-100' : ''
        }`}
        onClick={() => {
          setCategory('shopping')
        }}
      >
        <img src={entertainment} alt='' className={`w-5 h-5 mr-4`} />
        <span className={`text-base ${isSideBarOpen ? 'block' : 'hidden'}`}>
          Shopping
        </span>
      </div>
      <div
        className={`flex items-center my-4 cursor-pointer ${
          category === 'technology' ? 'rounded-lg p-1 bg-gray-100' : ''
        }`}
        onClick={() => {
          setCategory('technology')
        }}
      >
        <img src={tech} alt='' className={`w-5 h-5 mr-4`} />
        <span className={`text-base ${isSideBarOpen ? 'block' : 'hidden'}`}>
          Technology
        </span>
      </div>
      <div
        className={`flex items-center my-4 cursor-pointer ${
          category === 'music' ? 'rounded-lg p-1 bg-gray-100' : ''
        }`}
        onClick={() => {
          setCategory('music')
        }}
      >
        <img src={music} alt='' className={`w-5 h-5 mr-4`} />
        <span className={`text-base ${isSideBarOpen ? 'block' : 'hidden'}`}>
          Music
        </span>
      </div>
      <div
        className={`flex items-center my-4 cursor-pointer ${
          category === 'blogs' ? 'rounded-lg p-1 bg-gray-100' : ''
        }`}
        onClick={() => {
          setCategory('blogs')
        }}
      >
        <img src={blogs} alt='' className={`w-5 h-5 mr-4`} />
        <span className={`text-base ${isSideBarOpen ? 'block' : 'hidden'}`}>
          Blogs
        </span>
      </div>
      <div
        className={`flex items-center cursor-pointer ${
          category === 'news' ? 'rounded-lg p-1 bg-gray-100' : ''
        }`}
        onClick={() => {
          setCategory('news')
        }}
      >
        <img src={news} alt='' className={`w-5 h-5 mr-4`} />
        <span className={`text-base ${isSideBarOpen ? 'block' : 'hidden'}`}>
          News
        </span>
      </div>
      <hr
        className={`border-1 ${isSideBarOpen ? 'w-40 my-4' : 'w-7 mb-0 mt-2'}`}
      />
      <span className={`text-base ${isSideBarOpen ? 'block' : 'hidden'}`}>
        Subscribed
      </span>

      <div className='flex items-center my-4'>
        <img src={jack} alt='' className='w-6 h-6 mr-4 rounded-full' />
        <span className={`text-base ${isSideBarOpen ? 'block' : 'hidden'}`}>
          PewDiePie
        </span>
      </div>
      <div className='flex items-center my-4'>
        <img src={simon} alt='' className='w-6 h-6 mr-4 rounded-full' />
        <span className={`text-base ${isSideBarOpen ? 'block' : 'hidden'}`}>
          Mr Beast
        </span>
      </div>
      <div className='flex items-center my-4 '>
        <img src={tom} alt='' className='w-6 h-6 mr-4 rounded-full' />
        <span className={`text-base ${isSideBarOpen ? 'block' : 'hidden'}`}>
          Justin Beiber
        </span>
      </div>
      <div className='flex items-center my-4'>
        <img src={megan} alt='' className='w-6 h-6 mr-4 rounded-full' />
        <span className={`text-base ${isSideBarOpen ? 'block' : 'hidden'}`}>
          5-Minutes Craft
        </span>
      </div>
      <div className='flex items-center my-4'>
        <img src={cameron} alt='' className='w-6 h-6 mr-4 rounded-full' />
        <span className={`text-base ${isSideBarOpen ? 'block' : 'hidden'}`}>
          Nas Daily
        </span>
      </div>
    </div>
  )
}

export default Sidebar
