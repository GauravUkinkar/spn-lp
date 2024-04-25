import React from 'react'
import "../Styles/togglebtn.scss"
import { IoLanguage } from "react-icons/io5";



function Togglebtn(props) {
  return (
    <>

<div className='btn1'>   


      <button className='button2 ' onClick={props.changelang}><span><IoLanguage /></span></button>



    </div>
    
    
    </>
  )
}

export default Togglebtn