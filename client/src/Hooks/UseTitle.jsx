import React, { useEffect } from 'react'

const UseTitle = (title) => {
    useEffect(()=>{
        document.title = title
    },[title])
 
}

export default UseTitle