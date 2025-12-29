import React, { useEffect, useState } from 'react';
import { latestPost } from '../APIRequest/APIRequest';
import BlogList from '../component/BlogList';
import Loader from '../component/Loader';

const HomePage = () => {
  const [postList, setPostList] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await latestPost();
      setPostList(data);
    })();
  }, []);

  return (
    <div>
      {!postList ? <Loader /> : <BlogList postList={postList} />}
    </div>
  );
};

export default HomePage;
