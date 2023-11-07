import React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

const tealMain = '#10E2FF';
const tealHover = '#81F0FF';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(tealMain),
    backgroundColor: tealMain,
    '&:hover': {
      backgroundColor: tealHover,
    },
  }));



const Home = () => {
    return (
        <div className='bg-dark h-screen text-white'>
            <h1 className='text-inherit font-bold p-3'>Home Page</h1>
            <p className='text-inherit pl-3'>Welcome to our cool website!!! Take the survey below to get your vacation recommendations!!!</p>
            <div className='pl-3'>
                <ColorButton variant='contained' size='large' href='/survey/' sx={{margin:'5px',}}>To Survey</ColorButton>
            </div>
        </div>
    );
};

export default Home;