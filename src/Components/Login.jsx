import '@fortawesome/fontawesome-free/css/all.min.css';
import { instance } from '../utils/axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GoogleButton from './Partials/GoogleButton';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
        const response = await instance.post('/signin', formData);
        
        // Store the token in localStorage
        if (response.data.success) {
            localStorage.setItem('token', response.data.token);
            navigate('/home'); // Navigate to a protected page
        } else {
            console.log('Login failed');
        }
    } catch (error) {
        console.error('Error logging in:', error.response?.data || error.message);
    }
  };


  return (
    <div className='bg-[#223243] w-full h-screen flex-col gap-3 flex items-center justify-center'>
      <div className="shadow-[-5px_-5px_15px_rgba(255,255,255,0.1),5px_5px_15px_rgba(0,0,0,0.35),inset_-5px_-5px_15px_rgba(255,255,255,0.1),inset_5px_5px_15px_rgba(0,0,0,0.35)] p-10 rounded-[20px] border-8 border-solid border-[#223243]">
        <form onSubmit={submitHandler} className="flex justify-center items-center flex-col gap-[25px]">
          <h2 className='text-white font-medium text-2xl tracking-tighter'>Sign In</h2>

          <div className="relative w-[300px]">
            <input
              className='bg-[#223243] w-full border text-white font-light text-[1em] shadow-[-5px_-5px_15px_rgba(255,255,255,0.1),5px_5px_15px_rgba(0,0,0,0.35)] transition-[0.5s] pl-12 pr-2.5 py-3 rounded-[25px] border-[none] border-solid border-[rgba(0,0,0,0.1)]'
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <i className="absolute w-[25px] text-[#00dfc4] pr-2 px-0 py-0.5 border-r-[#00dfc4] border-r border-solid left-4 top-[15px] fa-regular fa-user" />
            {formData.username === '' && (
              <span className='border-none border-[#00dfc4] absolute pointer-events-none text-[1em] font-light transition-[0.5s] tracking-wider text-[rgba(255,255,255,0.5)] pl-12 pr-2.5 py-3 left-0'>
                username
              </span>
            )}
          </div>

          <div className="relative w-[300px]">
            <input
              className='bg-[#223243] w-full border text-white font-light text-[1em] shadow-[-5px_-5px_15px_rgba(255,255,255,0.1),5px_5px_15px_rgba(0,0,0,0.35)] transition-[0.5s] pl-12 pr-2.5 py-3 rounded-[25px] border-[none] border-solid border-[rgba(0,0,0,0.1)]'
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <i className="absolute w-[25px] text-[#00dfc4] pr-2 px-0 py-0.5 border-r-[#00dfc4] border-r border-solid left-4 top-[15px] fa-solid fa-lock" />
            {formData.password === '' && (
              <span className='border-none border-[#00dfc4] absolute pointer-events-none text-[1em] font-light transition-[0.5s] tracking-wider text-[rgba(255,255,255,0.5)] pl-12 pr-2.5 py-3 left-0'>
                password
              </span>
            )}
          </div>

          <div className="relative w-[300px]">
            <input
              className='text-[#223243] bg-[#00dfc4] font-medium cursor-pointer shadow-[-5px_-5px_15px_rgba(255,255,255,0.1),5px_5px_15px_rgba(0,0,0,0.35),inset_-5px_-5px_15px_rgba(255,255,255,0.1),inset_5px_5px_15px_rgba(0,0,0,0.35)] px-0 py-2.5 w-full border text-white font-light text-[1em] transition-[0.5s] text-center rounded-[25px] border-[none] border-solid border-[rgba(0,0,0,0.1)]'
              type="submit"
              value="Login"
            />
          </div>

          <p className='text-[rgba(255,255,255,0.5)] text-[0.75em] font-light'>
            Not Registered?{" "}
            <Link to="/" className="font-medium text-white">
              Create an account
            </Link>
          </p>
        </form>
      </div>
      <GoogleButton message={'Sign in With Google'} />
    </div>
  );
};

export default Login;
