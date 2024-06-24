import { Link } from 'react-router-dom'
import { viewConverter } from '../../viewsConverter'

const Recommended = ({ relatedVideos }) => {
  return (
    <div className='basis-2/6 ml-4'>
      {relatedVideos.map((item) => (
        <Link
          to={`/video/${item.videoId}`}
          className='flex justify-between mb-2'
          href='/video/24/QAIcH5iySqw}'
          key={item.videoId}
        >
          <img src={item.thumbnail[0].url} alt='' className='basis-3/6 w-2/4' />
          <div className='basis-3/6 ml-1'>
            <h4 className='text-xs mb-1 font-semibold'>{item.title}</h4>
            <p>{item.channelTitle}</p>
            <p>{viewConverter(item.viewCount)} Views</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
export default Recommended
