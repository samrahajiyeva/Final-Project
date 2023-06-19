import React from 'react'
import './Loading.scss'
import HashLoader from "react-spinners/HashLoader";
function Loading() {
return (
    <div className='loader'>
        <HashLoader 
            size={55}
            color={"#6b6957"}
        />
    </div>
)
}

export default Loading