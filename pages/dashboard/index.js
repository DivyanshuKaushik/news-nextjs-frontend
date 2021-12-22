import axios from "../../service/axios";
import { useState, useEffect } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import {useRouter} from "next/router";
import Cookies from 'js-cookie'

function dashboard({ posts,error }) {
    const router = useRouter()
    // if(notFound){
    //   console.log("not found",error)
    // }
    useEffect(()=>{
      if(!Cookies.get('userToken') || error==401 ){
        router.push('/login')
      }
    },[])

    const refreshData = ()=>{
      router.replace(router.asPath)
    }
  return (
    <>
      <Dashboard posts={posts} />
    </>
  );
}

export default dashboard;

export async function getServerSideProps(context) {
  try{
    const {req} = context
    const {cookies} = req
    // console.log(req.cookies.userToken)
  const posts = (await axios.get("/api/getAllPosts",{headers:{Authorization:req.cookies.userToken || ""}})).data;
// const posts = (await axios.get('/api/getUserPosts/divyanshu')).data

  return {
    props: {
      posts,
    },
  };

  }catch(err){
    // console.log(err.response.data)
    return { props: {
      error:err.response.status || ""
    },}
  }
}
