import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import ChatRecipient from './ChatRecipient';

const Hero = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()

    const userdata = localStorage.getItem('userdata');
    
    useEffect(() => {
        if(!user && !userdata){
            return navigate('/login')
        }
    }, [user]);
    

    return (
        <>
        {userdata && 
        <div>
            <NavBar />
            <ChatRecipient />
        </div>
    }
      </>
    )
}

export default Hero