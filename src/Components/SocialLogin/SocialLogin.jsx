import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../Hocks/useAuth';
import UseAxiosPublic from '../../Hocks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';


const SocialLogin = () => {
  const {googleSignIn} = useAuth();
  const axiosPublic = UseAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSigIn = ()=>{
    googleSignIn()
    .then(result=>{
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName
      }
      axiosPublic.post('/users', userInfo)
      .then(res => {
        console.log(res.data);
        navigate('/');
      })
    })
  }
  return (
    <div className='px-8 py-2'>
      <div>
        <button onClick={handleGoogleSigIn} className="btn">
          <FaGoogle className='mr-4'></FaGoogle>
          Google
        </button>
      </div>
    </div>
  );
}

export default SocialLogin;
