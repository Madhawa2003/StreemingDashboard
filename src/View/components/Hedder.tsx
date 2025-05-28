import React, {useEffect, useState} from 'react';
import Logo from '../../Accest/Logo.png'; // adjust the path based on your folder structure


export function Hedder() {
    const [isPulsing, setIsPulsing] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsPulsing(true);        // Start pulse
            setTimeout(() => setIsPulsing(false), 2000); // Stop after 1s
        }, 5000); // Every 3 seconds

        return () => clearInterval(interval); // Cleanup
    }, []);
    return <>
        <div className='h-20  bg-gray-950 '>
            <div className='flex items-center justify-center h-20'>
                <img src={Logo} alt="Logo" height="10" className={`h-20 w-auto ${isPulsing ? 'animate-pulse' : ''}`}/>
                <div>
                    <h1 className='text-teal-400 text-4xl text-center font-serif bg-pulse'> Lets Live</h1>
                    <h3 className='text-white text-center bg-pulse'>Broadcasting System</h3>
                </div>

            </div>


        </div>


    </>
}