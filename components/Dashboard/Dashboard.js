import React, { useContext } from 'react'
import DashLayout from '../../Layout/DashLayout'
import Image from 'next/image'
import { AppContext } from '../../store/AppContext'

const Dashboard = ({posts}) => {
    const {store} = useContext(AppContext)
    console.log('store',store.user.displayName)
    return (
        <>
            <DashLayout>
                <div><h3 className="">{store.user.displayName}</h3></div>
                {!posts ? <h1>Loading!!</h1> : posts.map((d,i)=>(
                    <div  key={i} className="">
                     <h3>{d.title}</h3>    
                    {d.imageUrl && <Image src={d.imageUrl} height="300" width="500" />}
                    </div>
      ))}
            </DashLayout>
        </>
    )
}

export default Dashboard
