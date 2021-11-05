import React from 'react'
import { useDispatch } from 'react-redux'
import { addNotification } from '../features/notificationsSlicer'

function ComingSoonPage() {
    const dispatch = useDispatch()
const handleClick = () => {
    const notif = {
        id:1,
        title : "first notfi",
        text : "first notiif text",
        isRead :  false
    }
    dispatch(addNotification(notif))
    
}
    return (
        <div>
            <button onClick={() => handleClick()}>click</button>        
        </div>
    )
}

export default ComingSoonPage
