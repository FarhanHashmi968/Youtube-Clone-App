import MainVideo from './MainVideo'
import Recommended from './Recommended'
import axios from 'axios'
import { apiKey } from '../API_KEY'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Video = () => {
  const { videoId } = useParams()
  const [videoDetail, setVideoDetail] = useState(null)
  const [comments, setComments] = useState(null)

  const options = {
    method: 'GET',
    url: 'https://yt-api.p.rapidapi.com/video/info',
    params: {
      id: videoId,
      extend: '1',
    },
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': 'yt-api.p.rapidapi.com',
    },
  }

  const fetchingVideoDetails = async () => {
    try {
      const response = await axios.request(options)
      setVideoDetail(response.data)
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching video details:', error)
    }
  }

  const options1 = {
    method: 'GET',
    url: 'https://yt-api.p.rapidapi.com/comments',
    params: { id: videoId },
    headers: {
      'x-rapidapi-key': apiKey, // Ensure this is correct and the same API key
      'x-rapidapi-host': 'yt-api.p.rapidapi.com',
    },
  }

  const fetchingComments = async () => {
    try {
      const response = await axios.request(options1)
      console.log('Comments Data:', response.data.data) // Log the data property
      setComments(response.data.data)
    } catch (error) {
      console.error('Error fetching comments:', error)
    }
  }

  useEffect(() => {
    fetchingVideoDetails()
    fetchingComments()
  }, [videoId])

  // Loading state handling
  if (!videoDetail || !comments) {
    return <div className='font-bold p-3'>Loading....</div>
  }

  return (
    <div className='flex bg-gray-50 my-5 mx-7'>
      <MainVideo
        title={videoDetail.title}
        videoId={videoId}
        viewCount={videoDetail.viewCount}
        publishedAt={videoDetail.uploadDate}
        likeCount={videoDetail.likeCount}
        channelThumbnail={videoDetail.channelThumbnail[0].url}
        channelTitle={videoDetail.channelTitle}
        subscriberCountText={videoDetail.subscriberCountText}
        description={videoDetail.description}
        commentCountText={videoDetail.commentCountText}
        comments={comments}
      />
      <Recommended relatedVideos={videoDetail.relatedVideos.data} />
    </div>
  )
}

export default Video
