import {useState,useEffect} from 'react'
import axios from '../service/axios'
function Private({children}) {
    const [role,setRole] = useState({})

    useEffect(()=>{
        axios.get('/api/getUserRole',{
            headers:{
                Authorization: localStorage.getItem('userToken')
            }
        }).then(res=>{setRole(res.data)}).catch(()=>console.log('unauthorized'))
    },[])

    console.log('roloe',role)

    return (
        <>
            {role.editor && children}
            {/* {childrens} */}
        </>
    )
}

export default Private
