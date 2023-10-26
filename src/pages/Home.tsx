import React from 'react';
import { Button } from '@mui/material';

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Button variant='contained' href='/survey/' sx={{margin:'5px',}}>To Survey</Button>
            <Button variant='contained' href='/about/' sx={{margin:'5px',}}>To About Page</Button>
            <Button variant='contained' href='/contact/' sx={{margin:'5px',}}>To Contact Page</Button>
        </div>
    );
};

export default Home;