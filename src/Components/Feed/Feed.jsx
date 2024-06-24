import { useEffect, useState } from 'react'
import { apiKey } from '../API_KEY'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { viewConverter } from '../../viewsConverter'

const Feed = ({ category }) => {
  const [data, setData] = useState(null)
  const [page, setPage] = useState(1)

  const optionsForCategories = {
    method: 'GET',
    url: 'https://yt-api.p.rapidapi.com/search',
    params: {
      query: category,
      geo: 'IN',
      page: page,
    },
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': 'yt-api.p.rapidapi.com',
    },
  }

  const fetchingCategoryVideos = async () => {
    try {
      const response = await axios.request(optionsForCategories)
      console.log('Category data fetched:', response.data.data)
      data === null
        ? setData(response.data.data)
        : setData([...data, ...response.data.data])
      console.log(data)
    } catch (error) {
      console.error('Error fetching category videos:', error)
    }
  }

  useEffect(() => {
    fetchingCategoryVideos()
  }, [category])

  useEffect(() => {
    fetchingCategoryVideos()
  }, [page])

  if (!data) {
    return <div className='font-bold p-3'>Loading....</div>
  }

  return (
    <div className='flex border-2 w-full flex-wrap p-5 bg-gray-50'>
      {data.map(
        (item) =>
          item.type === 'video' && (
            <Link to={`/video/${item.videoId}`} key={item.videoId}>
              <div
                className='flex flex-col w-72 cursor-pointer my-6 mx-4'
                key={item.videoId}
              >
                <img
                  src={item.thumbnail[0].url}
                  alt=''
                  className='rounded-md w-full h-44'
                />
                <span className='text-base font-semibold my-1'>
                  {item.title}
                </span>
                <span className='my-1 font-semibold text-sm'>
                  {item.channelTitle}
                </span>
                <span className='text-sm'>
                  {viewConverter(item.viewCount)} views .
                  {item.publishedTimeText}
                </span>
              </div>
            </Link>
          )
      )}
      <div className='w-full'>
        <button
          className='rounded-xl border-2 p-1 w-28 shadow-md bg-red-600 text-white h-12'
          onClick={() => {
            setPage(page + 1)
            console.log(page)
          }}
        >
          Add More
        </button>
      </div>
    </div>
  )
}
export default Feed
