import React from 'react';
import Logo from '../../Accest/Logo.png'; // adjust the path based on your folder structure


export function Hedder() {
    return <>
        <div className='h-20  bg-gray-950 '>
            <div className='flex items-center justify-center h-20'>
                <img src={Logo} alt="Logo" height="10" className='h-24'/>
                <div>
                    <h1 className='text-teal-400 text-4xl text-center font-serif'> Lets Live</h1>
                    <h3 className='text-white text-center'>Broadcasting System</h3>
                </div>

            </div>


        </div>


    </>
}