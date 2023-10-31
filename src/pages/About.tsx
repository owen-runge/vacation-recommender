import React from 'react';
import Barnett_Joe_Hayes_Drake1 from './Barnett_Joe_Hayes_Drake1.jpg';

const About = () => {
    return (
        <div className='bg-dark text-white h-screen'>
            <h1 className='text-inherit font-bold p-3'>About Us</h1>
            <div className='pl-3'>
            <img src={Barnett_Joe_Hayes_Drake1} alt='DRAKE IS RUNNING DRAKE IS RUNNING' height='333.25' width='500' className='rounded-md'/>
            </div>
            <p className='text-inherit pl-3 pt-2'>We are frauds.</p>
        </div>
    );
};

export default About;