import { useState, useEffect, useContext } from "react";
import DashLayout from '../../Layout/DashLayout'
import {ref,uploadBytes,uploadBytesResumable,getDownloadURL,deleteObject} from "firebase/storage";
import { storage } from "../../firebase";
import axios from "../../service/axios";
import { AppContext } from "../../store/AppContext";

function create() {

    const {store} = useContext(AppContext)
    // image upload 
    const {uid,displayName} = store.user
    const [image, setImage] = useState(null);

    const[title,setTitle] = useState("")
    const[summary,setSummary] = useState("")
    const[source,setSource] = useState("")
    const[category,setCategory] = useState("")
    const [imageUrl, setImageUrl] = useState("");
    const [prog, setprog] = useState(0);

    const deleteImage =(imgUrl)=>{
      console.log('image del')
      const imgRef = ref(storage,imgUrl)
      deleteObject(imgRef).then(()=>{
        console.log('deleted')
      }).catch((error) => {
        console.log(error);
      });
    }

    const imageUpload = () => {

        if(!image){
            return alert("select image")
        }
      const storageRef = ref(storage, `posts/uid/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

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
            setImageUrl(url);
           console.log('url',url)
           console.log("image",imageUrl);
           const newPost = {title,summary,source,category,imageUrl:url,time:"time",author:displayName,uid}
        // console.log(newPost)
         axios.post('/api/addPost',newPost).then(()=>{
            alert("posted")
          }).catch((e)=>{
            deleteImage(url) 
            console.log(e.error)
            alert("error")
          })
          });
        }
      );
    };


    const onSubmit = (e)=>{
        e.preventDefault()
        imageUpload()
       
    }
  
    return (
        <DashLayout>
            <div className="flex flex-col h-full w-full justify-center items-center">  
            <h3 className="my-4 text-2xl">Create New Post</h3>
            {/* <button  onClick={deleteImage}>click</button> */}
            <form className="bg-white dark:bg-white p-5 w-11/12 sm:w-8/12 lg:w-4/5 shadow-md rounded-lg" onSubmit={(e)=>onSubmit(e)}>
                <div className="flex flex-wrap lg:flex-nowrap items-center w-full dark:text-gray-700">
                    <label htmlFor="title" className="w-1/4 block">Title</label>
                    <input type="text" className="post_input" value={title} onChange={e=>setTitle(e.target.value)} />
                </div>
                <div className="flex flex-wrap lg:flex-nowrap items-center w-full dark:text-gray-700">
                    <label htmlFor="summary" className="w-1/4 block">Summary</label>
                    <textarea type="text" className="post_input resize-none h-28" value={summary} onChange={e=>setSummary(e.target.value)} />
                </div>
                <div className="flex flex-wrap lg:flex-nowrap items-center w-full dark:text-gray-700">
                    <label htmlFor="source" className="w-1/4 block">Source</label>
                    <input type="text" className="post_input" value={source} onChange={e=>setSource(e.target.value)} />
                </div>
                <div className="flex flex-wrap lg:flex-nowrap items-center w-full dark:text-gray-700">
                <label htmlFor="image" className="w-1/4 block">Image</label>
                    <input
                    type="file"
                    name="post"
                    className="post_input"
                    onChange={(e) => setImage(e.target.files[0])}
                    accept="image/png, image/svg, image/jpeg"
                    />
                    {/* <button onClick={onUpload}>upload</button> */}
                </div>
                <div className="flex flex-wrap lg:flex-nowrap items-center w-full dark:text-gray-700">
                    <label htmlFor="category" className="w-1/4 block">Category</label>
                    <input type="text" className="post_input" value={category} onChange={e=>setCategory(e.target.value)} />
                   
                </div>
                <div className="flex justify-end">
                    <button className="bg-green-500 text-white px-2 py-1 my-2 rounded-md">Submit</button>
                </div>
            </form>
            </div>
        </DashLayout>
    )
}

export default create
