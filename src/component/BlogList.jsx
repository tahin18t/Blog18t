import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ postList }) => {   // ✔ Correct destructuring

  return (
    <div className="container mx-auto mb-10 p-9">
      <div className="grid sm:grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
        {postList.length > 0 ? (
          postList.map((post) => (
            <Link key={post.id} to={`/details/${post.id}`} className="card glass">
              <figure>
                <img src={post.img} alt={post.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.short}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No posts available</p>
        )}
      </div>
    </div>
  );
};

export default BlogList;
