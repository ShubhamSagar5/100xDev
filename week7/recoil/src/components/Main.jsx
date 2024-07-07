import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import {notificationAtom, totalNoificationSelector } from '../atom'
import axios from 'axios'

const Main = () => {
 

    const [notification,setNotification] = useRecoilState(notificationAtom)
    // const network = useRecoilValue(networkAtom)
    // const jobs = useRecoilValue(jobsAtom)
    // const message = useRecoilValue(messagingAtom)
    
    //Selector
    const totalNoification = useRecoilValue(totalNoificationSelector)

//------------------------------------------------------------------------------------------------------------------------

    
    //Local
    // const totalNoification = notification + network + jobs + message
    // console.log(notification)
//------------------------------------------------------------------------------------------------------------------------
    //byUseEffect API Call 

    // const fetchData = async () => {
    //     const res = await axios.get("https://sum-server.100xdevs.com/notifications") 
    //     console.log(res.data)
    //     setNotification(res.data)
    // }

    // useEffect(()=>{
    //     fetchData()
    // },[])
//------------------------------------------------------------------------------------------------------------------------


    return (
    <div>
        <button>Notification ({notification.notifications})</button>
        <button>Network ({notification.network})</button>
        <button>jobs ({notification.jobs})</button>
        <button>Message ({notification.messaging})</button>
        <button>Total Notification({totalNoification})</button> 
    
    
    </div>

  )
}

export default Main