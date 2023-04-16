import React from 'react'
import { useNavigate } from 'react-router-dom'

import circlesymbol from '../../assets/circlesymbol.png' 
const ChatbotButton = () => {
    const navigate=useNavigate()
    const otp = () => {
        navigate('/Otpverify')
        
    }
  return (
    <div>
            
            
           
      <button onClick={otp} style={{ border: 'none', background: 'none',position:'fixed' ,marginTop: '550px',marginLeft: '920px' }} >
      <img src={circlesymbol}  alt='Logo' width={60}/>
</button>


   </div>
  )
}

export default ChatbotButton
