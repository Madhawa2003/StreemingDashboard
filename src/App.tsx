import React, {useEffect, useState} from 'react';
import {Mainpage} from "./View/Mainpage.tsx";
import {Hedder} from "./View/components/Hedder.tsx";
import {Scheduler} from "./View/components/Scheduler.tsx";
import {LoadingScreen} from "./Util/LoadingScreen.tsx";

export function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate async loading (e.g., API call)
    setTimeout(() => setLoading(false), 3000);
  }, []);

  if (loading) return <LoadingScreen />;
  return <div className='h-auto min-h-screen bg-gray-950'>
    <Hedder/>
    <Scheduler/>
    <div className=' font-sans '>
      <Mainpage/>
    </div>

  </div>
}