import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div id='about' className='w-full md-h:screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600 text-justify'>
                Hello! I'm Clever, a dedicated tech enthusiast on an exciting journey of exploration and innovation in the world of technology. Witnessing intricate processes seamlessly transformed into swift, reliable operations through cutting-edge technology has been a captivating experience.

My focus has led me to master JavaScript, React.js, and Next.js for crafting immersive user experiences. On the backend, I've embraced Python and Django to orchestrate robust functionalities. Android development using Kotlin has allowed me to create dynamic user-centric applications.

Beyond coding, I've delved into product management, understanding Product Success Matrix, Product Prioritization, and Agile Methodology to ensure real-world solutions. Currently, I'm self-driven to master Node.js, further expanding my skills and horizons.

My aspiration is to make a meaningful impact in the tech industry, pushing boundaries and contributing to its evolution. Join me on this exhilarating journey as we harness technology's potential and co-create a brighter future for the tech world!</p>
                <Link href="#projects">
                  <p className='mt-2 py-2 text-gray-600 underline cursor-pointer'>Check out my projects.</p>
                </Link>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className="rounded-xl" src="/assets/RBT.png" alt="/" width="500" height="300" />
            </div>
        </div>
    </div>
  )
}

export default About