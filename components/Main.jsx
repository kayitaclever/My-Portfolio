import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Main = () => {
  return (
    <div id="main" className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Let's Build Something Together</p>
                <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5]'>Clever Kayitaramirwa</span></h1>
                <h1 className='py-2 text-gray-700'>A Software Developer</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I'm all about shaping a safer digital journey for kids. With skills in JavaScript, Python, and Kotlin, I craft engaging tech for early childhood education, ensuring their mental well-being and
                 cybersecurity. Let's build a secure and enriching online world for our young ones! <br/><br/>Join me down below and see my portfolio.</p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-default hover:scale-110 ease-in duration-300">
                        <a href='https://www.linkedin.com/in/clever-kayitaramirwa/' target='_blank'><FaLinkedin/></a>
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-default hover:scale-110 ease-in duration-300">
                        <a href='https://github.com/kayitaclever' target='_blank'><FaGithub/></a>
                    </div>
                   
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-default hover:scale-110 ease-in duration-300">
                        <a href="https://drive.google.com/file/d/1Nhs8XnNoSazHjVtqmsy4mHe765nLvqh1/view?usp=sharing" target="_blank"><BsFillPersonLinesFill/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main