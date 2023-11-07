import React from 'react';
import Barnett_Joe_Hayes_Drake1 from './Barnett_Joe_Hayes_Drake1.jpg';
import DrakeHeadshot from './Drake_Headshot23.jpg';
import OwenHeadshot from './Runge_Owen24_2023.jpg';
import BigFHeadshot from './BigF_Headshot.jpg';


const About = () => {
    const containerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };
  
    const imageStyle = {
      margin: '0 10px',
    };
  
    const captionStyle = {
      textAlign: 'center',
      marginTop: '5px', // Add vertical margin (space) between the caption and the image
    };
  
    return (
      <div className='bg-dark text-white h-screen'>
        <h1 className='text-inherit font-bold p-3'>About Us</h1>
        <div style={containerStyle}>
          <div>
            <img src={DrakeHeadshot} alt="Drake Hayes" style={imageStyle} height='100' width='185' />
            <p className='text-inherit pl-2.5 pt-1'>
                Drake Hayes is a senior at Wabash College majoring
                in math and computer science and minoring in religion.
                In his free time, he enjoys playing video
                games
                and spending time with family.  Feel free to connect
                with him on LinkedIn at www.linkedin.com/in/drake-r-hayes/.    </p>
          </div>
          <div>
            <img src={OwenHeadshot} alt="OwenRunge" style={imageStyle} height='100' width='185' />
            <p className='text-inherit pl-2.5 pt-1'>
                Owen Runge is a senior at Wabash College majoring
                in German and computer science.
                In his free time, he enjoys cooking, playing soccer, and
                studying geography.  Feel free to connect
                with him on LinkedIn at www.linkedin.com/in/owenrunge/</p>
          </div>
          <div>
            <img src={BigFHeadshot} alt="Fardin" style={imageStyle} height='100' width='185' />
            <p className='text-inherit pl-2.5 pt-1'>
                Fardin is a senior at Wabash College majoring
                in physics and computer science and minoring in math
                and history.
                In his free time, he enjoys playing soccer, reading comics,
                and visiting muse- ums.  Feel free to connect
                with him on LinkedIn at www.linkedin.com/in/kazi-fardinul-hoque/.</p>
          </div>
        </div>
        <p className='text-inherit pl-2.5 pt-2'></p>
      </div>
    );
  };
  
  export default About;