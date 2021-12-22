import Router  from "next/router";
import React, { useState } from "react";
import DashLayout from "../../Layout/DashLayout";

function Posts() {
  return (
    <>
      <>
        <DashLayout>
          <div className={`py-4`}>
            <div className="flex justify-end w-full px-3">
              <button
                onClick={() => Router.push('/dashboard/create')}
                className="btn bg-yellow-400 p-2 text-sm text-gray-700 dark:text-gray-100 font-medium rounded-sm shadow-lg"
              >
                Create New Post
              </button>
              {/* <button className="bg-green-500 p-2 text-sm text-gray-100 rounded-sm shadow-lg">Create New Post</button> */}
            </div>
            <div className="p-4">
              <div className="h-44 w-full shadow-md bg-gray-100 dark:bg-gray-200 mx-auto rounded-lg">
                <p className="text-2xl text-gray-900 dark:text-gray-700">
                  Posts
                </p>
              </div>
            </div>
          </div>
        </DashLayout>
      </>
    </>
  );
}

export default Posts;
