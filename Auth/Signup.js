import Link from "next/link";
import { useState } from "react";
import axios from '../service/axios'

const Signup = () => {
    const [formData,setFormData] = useState({
        name:"",email:"",phone:"",password:""
    })

    const handleInput = (e)=>{
        let name=e.target.name
        let value = e.target.value
        setFormData({...formData,[name]:value})
    }

    const signUp = (e)=>{
        e.preventDefault()
        axios.post('/api/signup',formData).then(res=>{
            console.log(res.data)
        }).catch(error=>console.log(error))
    }
    return (
        <div className="w-screen mt-10 flex flex-col justify-center items-center">
            <h3 className="text-2xl mb-3">Welcome,Please login</h3>
            <form className="border-2 border-gray-200 p-8 rounded-lg" onSubmit={e=>signUp(e)}>
                <div className="my-6 bg-gray-200 px-4 py-2 rounded-md">
                    <span className="text-gray-600 text-xl"> <i className="fa-regular fa-user" /></span>
                    <input type="text" className="bg-transparent focus:outline-none pl-3" placeholder="Name" name="name" value={formData.name} onChange={e=>handleInput(e)} />
                </div>
                <div className="my-6 bg-gray-200 px-4 py-2 rounded-md">
                    <span className="text-gray-600 text-xl"> <i className="fa-regular fa-envelope" /></span>
                    <input type="email" className="bg-transparent focus:outline-none pl-3" placeholder="Email" name="email" value={formData.email} onChange={e=>handleInput(e)} />
                </div>
                <div className="my-6 bg-gray-200 px-4 py-2 rounded-md">
                    <span className="text-gray-600 text-xl"> <i className="fa-brands fa-whatsapp" /></span>
                    <input type="phone" className="bg-transparent focus:outline-none pl-3" placeholder="Phone" name="phone" value={formData.phone} onChange={e=>handleInput(e)} />
                </div>
                <div className="my-6 bg-gray-200 px-4 py-2 rounded-md">
                    <span className="text-gray-600 text-xl"> <i className="fa-solid fa-lock" /></span>
                    <input type="password" className="bg-transparent focus:outline-none pl-3" placeholder="Password" name="password" value={formData.password} onChange={e=>handleInput(e)} />
                </div>
                <div className=" w-100 text-xs text-blue-500">
                    <Link href="/login">Already have an account ?</Link>
                </div>
                <div className="flex w-100 justify-end mt-3">
                    <button type="submit" className="bg-blue-500 text-gray-100 px-4 py-2 rounded">SignUp</button>
                </div>
            </form>
        </div>
    )
}

export default Signup
