import React, { useState } from "react";
import Posts from "../../components/Dashboard/Posts";
import Modal from "../../components/Utilities/Modal";

function posts() {
  const [show, setShow] = useState(false);
  return (
    <>
      {/* <button
        onClick={() => setShow(!show)}
        className="btn bg-yellow-400 p-2 text-sm text-gray-700 dark:text-gray-100 font-medium rounded-sm shadow-lg"
      >
        New Post
      </button> */}
      {/* <Modal show={show}>
        <div className="">
          <h3 className="">helllo</h3>
        </div>
      </Modal> */}
      <Posts />
    </>
  );
}

export default posts;
