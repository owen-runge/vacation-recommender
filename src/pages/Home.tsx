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
        <div className='bg-dark h-full text-white'>
            <h1 className='text-inherit text-5xl font-jetbrainsmono font-bold px-5 py-10'>Welcome to Vacation Recommender!</h1>
            <div className='px-5'>
                <p className='text-inherit text-xl font-jetbrainsmono'>Vacation Recommender is an all-in-one tool to find the vacation destination of your dreams.</p>
                <p className='text-inherit text-base font-jetbrainsmono py-2'>Simply take the survey on the following criteria to find the cities<sup>*</sup> that best fit your wants</p>
                <ul className='text-inherit text-base font-jetbrainsmono list-disc list-outside hover:list-inside px-8 space-y-1'>
                    <li>climate</li>
                    <li>transportation</li>
                    <li>dining</li>
                    <li>attractions</li>
                    <li>lodging</li>
                    <li>safety</li>
                    <li>health</li>
                </ul>
                <p className='text-inherit text-base font-jetbrainsmono py-2'>Upon submission, you will be greeted with your top 5 cities specifically catered to you!</p>
                <p className='text-neutral-600 text-sm font-jetbrainsmono'><sup>*</sup>Cities limited to those within the U.S. and Puerto Rico</p>
            </div>
            <div className='mx-3 mt-5 bg-custom-foreground p-4 border-2 rounded border-custom-border'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-inherit text-3xl font-jetbrainsmono'>Click the button below to take the survey</h1>
                    <div className='pt-5'>
                        <ColorButton variant='contained' size='large' href='/survey/' sx={{fontSize:20}}>To Survey</ColorButton>
                    </div>
                </div>
            </div>
            <div className='bg-dark h-12'>
            </div>
        </div>
    );
};

export default Home;