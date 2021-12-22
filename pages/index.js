import Head from "next/head";
import { useState, useEffect } from "react";
import axios from "../service/axios";
import {
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "../firebase";

import Private from "../Auth/Private";

export default function Home() {
  const [image, setImage] = useState(null);
  const [prog, setprog] = useState(0);
  console.log("image", image);
  const onUpload = () => {
    const storageRef = ref(storage, `posts/uid/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    // const uploadTask = storage.ref(`posts/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setprog(prog);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          // seturl(url);
          console.log(url);
        });
      }
    );
  };

  return (
    <div className="">
      <Head>
        <title>News App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Private>
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center bg-gray-50 dark:bg-gray-500 ">
          <div className="imageUpload">
            <input
              type="file"
              name="post"
              placeholder="choose a image"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <button onClick={onUpload}>upload</button>
          </div>
        </main>
      </Private>
    </div>
  );
}
