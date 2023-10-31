import React from 'react';
import { Button } from '@mui/material';

const Home = () => {
    return (
        <div className='bg-dark h-screen text-white'>
            <h1 className='text-inherit font-bold p-3'>Home Page</h1>
            <p className='text-inherit pl-3'>Welcome to our cool website!!! Take the survey below!!!</p>
            <div className='pl-3'>
                <Button variant='contained' href='/survey/' sx={{margin:'5px',}}>To Survey</Button>
            </div>
        </div>
    );
};

export default Home;