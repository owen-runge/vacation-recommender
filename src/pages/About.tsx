import React from 'react';
//import Barnett_Joe_Hayes_Drake1 from './Barnett_Joe_Hayes_Drake1.jpg';
import DrakeHeadshot from './Drake_Headshot23.jpg';
import OwenHeadshot from './Runge_Owen24_2023.jpg';
import BigFHeadshot from './BigF_Headshot.jpg';


const About = () => {
    // const containerStyle = {
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    // };
  
    // const imageStyle = {
    //   margin: '0 10px',
    // };
  
    // const captionStyle = {
    //   textAlign: 'center',
    //   marginTop: '5px', // Add vertical margin (space) between the caption and the image
    // };
  
    return (
      <div className='bg-dark text-white text-sm font-jetbrainsmono min-h-screen max-h-full'>
        <h1 className='text-inherit text-5xl font-bold py-10 px-5'>About Us</h1>
        <div className='bg-custom-foreground p-4  mx-5 border-2 rounded border-custom-border'>
          <h1 className='text-inherit text-3xl'>The Group Members</h1>
          <div className='flex flex-row justify-center align-center'>
            <div className='mx-2'>
              <img src={DrakeHeadshot} alt="Drake Hayes" className='m-2.5' height='100' width='185' />
              <p className='text-inherit pl-2.5 pt-1'>
                  Drake Hayes is a senior at Wabash College majoring
                  in Math and Computer Science and minoring in Religion.
                  In his free time, he enjoys playing video
                  games
                  and spending time with family.  Feel free to connect
                  with him on LinkedIn at www.linkedin.com/in/drake-r-hayes/.    </p>
            </div>
            <div className='mx-2'>
              <img src={OwenHeadshot} alt="OwenRunge" className='m-2.5' height='100' width='185' />
              <p className='text-inherit pl-2.5 pt-1'>
                  Owen Runge is a senior at Wabash College majoring
                  in German and Computer Science.
                  In his free time, he enjoys cooking, playing soccer, and
                  studying geography.  Feel free to connect
                  with him on LinkedIn at www.linkedin.com/in/owenrunge/.</p>
            </div>
            <div className='mx-2'>
              <img src={BigFHeadshot} alt="Fardin" className='m-2.5' height='100' width='185' />
              <p className='text-inherit pl-2.5 pt-1'>
                  Fardin is a senior at Wabash College majoring
                  in Physics and Computer Science and minoring in Math
                  and History.
                  In his free time, he enjoys playing soccer, reading comics,
                  and visiting museums.  Feel free to connect
                  with him on LinkedIn at www.linkedin.com/in/kazi-fardinul-hoque/.</p>
            </div>
          </div>
        </div>
        <p className='text-inherit pl-2.5 pt-2'></p>
      </div>
    );
  };
  
  export default About;