import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { postByCategory } from '../APIRequest/APIRequest';
import BlogList from '../component/BlogList';
import Loader from '../component/Loader';

const ByCategoryPage = () => {
  const [postList, setPostList] = useState(null)
  const { categoryID } = useParams(); // get category id from URL

  useEffect(() => {
    (async () => {
      try {
        const data = await postByCategory(categoryID);
        setPostList(data);
      } catch (err) {
        console.error("Category API Error:", err);
        setPostList([]); 
      }
    })();
  }, [categoryID]); // dependency added

  return (
    <div>
      {!postList ? <Loader /> : <BlogList postList={postList} />}
    </div>
  );
};

export default ByCategoryPage;
