import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { postDetails } from '../APIRequest/APIRequest'
import Loader from '../component/Loader'
import BlogDetails from '../component/BlogDetails'

const DetailsPage = () => {
  let { postID } = useParams();

  let [post, setPost] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const result = await postDetails(postID);
        setPost(result);
      } catch (err) {
        console.error("Details API Error:", err);
        setPost({});
      }
    })();
  }, [postID]);
  
  return (
    <div>
      {!post ? <Loader /> : <BlogDetails post={post} />}
    </div>
  )
}

export default DetailsPage;
