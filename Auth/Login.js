import React, { useState,useContext } from "react";
import Link from "next/link";
import axios from '../service/axios'
import {UserIcon,LockClosedIcon} from '@heroicons/react/solid'

// import axios from 'axios'
import { signInWithEmailAndPassword,getCookie,postIdTokenToSessionLogin,signOut } from "firebase/auth";
import { auth } from "../firebase";
import Router from 'next/router'

import Cookies from 'js-cookie'
import { AppContext } from "../store/AppContext";

const Login = () => {

  const {store,actions} = useContext(AppContext)

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
    const onLogin = (e)=>{
      e.preventDefault()
      signInWithEmailAndPassword(auth,email,password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        localStorage.setItem('user',JSON.stringify(user))
        actions.setUser(user)
        // console.log('context',store)
        // console.log(user)
        user.getIdToken().then(idToken=>{
          // console.log(idToken)
          localStorage.setItem("userToken",idToken)
          const expiresIn = 60 * 60 * 24 * 5 * 1000;
          // setCookie('token',idToken)
          Cookies.set('userToken', idToken, { expires: 7 })
          // axios.post('/api/sessionLogin',{idToken}).then(res=>console.log(res.data))
          Router.push('/dashboard')
        })
        // ...
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Invalid Credentials")
        // ..
      });
    // axios.post('/api/signup',{email,password}).then(res=>console.log(res.data))
}
  return (
    <div className="w-screen absolute top-1/4 flex flex-col justify-center items-center dark:bg-blue-800">
        <h3 className="text-2xl mb-3">Welcome,Please login</h3>
      <form className="border-2 border-gray-200 p-8 rounded-lg" onSubmit={e=>onLogin(e)}>
        <div className="my-6 bg-gray-200 px-2 py-2 rounded-md flex">
        <UserIcon className="h-6 text-gray-700" />
          <input type="email" className="bg-transparent focus:outline-none pl-3" placeholder="Username or Email" value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
        <div className="my-6 bg-gray-200 px-2 py-2 rounded-md flex">
          <LockClosedIcon className="h-6 text-gray-700" />
          <input type="password" className="bg-transparen focus:outline-none pl-3" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        </div>
        <div className="flex w-100 justify-between text-xs text-blue-500">
            <Link href="/signup">Create Account</Link>
            <Link href="/">Forget Password ?</Link>
        </div>
        <div className="flex w-100 justify-end mt-3">
            <button type="submit" className="bg-blue-500 text-gray-100 px-4 py-2 rounded">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
