import { viewConverter } from '../../viewsConverter'
import { timeAgo } from '../../dateTimeConverter'

const MainVideo = ({
  title,
  videoId,
  viewCount,
  publishedAt,
  likeCount,
  channelThumbnail,
  channelTitle,
  subscriberCountText,
  description,
  commentCountText,
  comments,
}) => {
  return (
    <div className='basis-4/6'>
      <div className='w-full h-96 lg:h-1/5'>
        <iframe
          className='w-full h-full'
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        ></iframe>
      </div>
      <h3 className='font-semibold mt-3 text-xl'>{title}</h3>
      <div className='flex items-center justify-between flex-wrap mt-2 text-sm text-stone-500'>
        <p>
          {viewConverter(viewCount)} views • {timeAgo(publishedAt)}
        </p>
        <div className='flex '>
          <span className='inline-flex items-center mt-4 mr-2'>
            <img src='/src/assets/like.png' alt='' className='w-5 mt-2' />
            {viewConverter(likeCount)}
          </span>
          <span className='inline-flex items-center mt-4 mr-2'>
            <img src='/src/assets/dislike.png' alt='' className='w-5 mt-2' />
          </span>
          <span className='inline-flex items-center mt-4 mr-2'>
            <img src='/src/assets/share.png' alt='' className='w-5 mt-2' />
            Share
          </span>
          <span className='inline-flex items-center mt-4'>
            <img src='/src/assets/save.png' alt='' className='w-5 mt-2' />
            Save
          </span>
        </div>
      </div>
      <hr className='h-px my-2 bg-slate-400'></hr>
      <div className='flex items-center mt-5'>
        <img
          src={channelThumbnail}
          alt=''
          className='w-10 mr-3.5 rounded-2xl'
        />
        <div className='flex-1 leading-5'>
          <p className='font-semibold text-lg text-black'>{channelTitle}</p>
          <span className='text-sm text-stone-500'>{subscriberCountText}</span>
        </div>
        <button
          fdprocessedid='49r2m'
          className='bg-red-600 text-white py-2 px-8 rounded cursor-pointer outline-0 border-0'
        >
          Subscribe
        </button>
      </div>
      <div className='pl-14 my-4'>
        <p className='text-sm mb-1 text-stone-500'>{description}</p>
        <hr className='h-px bg-slate-400 my-2.5' />
        <h4 className='text-sm mt-3.5 text-stone-500'>
          {commentCountText} Comments
        </h4>
        {comments.map((item) => (
          <div className='flex my-5 items-start'>
            <img
              src={item.authorThumbnail[0].url}
              alt=''
              className='w-9 rounded-2xl mr-4'
            />
            <div>
              <h3 className='text-sm mb-0.5'>
                {item.authorText}
                <span className='text-xs font-medium ml-2 text-stone-500'>
                  {item.publishedTimeText}
                </span>
              </h3>
              <p className='text-sm mb-1.5 text-stone-500'>
                {item.textDisplay}
              </p>
              <div className='flex items-center text-sm my-2'>
                <img src='/src/assets/like.png' alt='' className='w-5 mr-1 ' />
                <span className='mr-5 text-stone-500'>{item.likesCount}</span>
                <img
                  src='/src/assets/dislike.png'
                  alt=''
                  className='w-5 mr-1.5'
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainVideo
