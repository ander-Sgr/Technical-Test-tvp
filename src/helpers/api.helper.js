import axios from 'axios'
import { useEffect, useState } from 'react'

export const Request = (baseUrl) => {
  const [post, setPost] = useState(null)
  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setPost(response.data)
    })
  }, [baseUrl])
  return post
}
