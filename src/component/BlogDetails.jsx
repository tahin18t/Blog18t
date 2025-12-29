import React from "react";
import Loader from "./Loader";

const BlogDetails = ({ post }) => {

  const details = post?.postDetails;
  const comments = post?.postComments || [];

  if (!details) return (<div className=" w-full p-6 flex w-52 flex-col gap-6">
  <div className="skeleton h-100 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>);

  return (
    <div className="container mx-auto my-16 p-6">
      {/* Blog Card */}
      <div className="card glass w-full shadow-lg p-6">
        <figure>
          <img
            src={details.img}
            alt="Blog Image"
            className="w-full rounded-lg"
          />
        </figure>
        <div className="card-body mt-4">
          <h2 className="card-title text-2xl font-bold mb-2">
            Post #{details.id}
          </h2>
          <p className="text-gray-700">{details.content}</p>
          <p className="text-sm text-gray-400 mt-2">
            Created at: {new Date(details.created_at).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Comments Section */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Comments</h3>
        {comments.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          <div className="space-y-4">
            {comments.map((c) => (
              <div key={c.id} className="card p-4 shadow-md rounded-md">
                <p className="font-semibold">{c.author}</p>
                <p>{c.comment}</p>
                <p className="text-xs text-gray-400">
                  {new Date(c.created_at).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
