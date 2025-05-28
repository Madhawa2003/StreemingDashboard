import React from 'react';
export const ActiveRecordings = () => {
  return <>



      <div className="col-span-1">
        <div className="mb-4">
          <h2 className="text-lg font-medium text-white">
            ACTIVE RECORDINGS
          </h2>
        </div>

        <div className="bg-gray-950 rounded-lg shadow-sm border border-black p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-green-500 "></div>
            <h3 className="font-medium text-white">
              <span className="text-red-500">01: 02:57</span>
            </h3>
            <span className="ml-auto text-gray-200">Studio A</span>
          </div>

          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium text-white">Ingest Input 5</span>
            </div>
            <p className="text-xs text-gray-400 mb-3">
              rtmp://192.168.1:50/live/studio
            </p>
            <div className="flex justify-between text-sm mb-1 text-gray-400">
              <span className="text-white">Input Type</span>
              <span className="font-medium">3416 kb/s</span>
            </div>
            <div className="flex justify-between text-sm mt-3 text-gray-400">
              <span className="text-gray-400">Bitrate</span>
              <span className="font-medium">3416 kb/s</span>
            </div>
          </div>

        </div>
      </div>





    {/*this shows active recoding in this time*/}

      <div className="col-span-1">
        <div className="mb-4">
          <h2 className="text-lg font-medium text-white">
            ACTIVE RECORDING
          </h2>
        </div>
        <div className="bg-gray-950 rounded-lg shadow-sm border border-black p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-bg-flash"></div>
            <h3 className="font-medium text-white">Studio A Live</h3>
            <span className="ml-auto text-gray-200">Input 5</span>
          </div>
          <div className="flex justify-between text-sm mb-3 text-white">
            <span>Input 5</span>
            <span>Input 6</span>
            <span>Tane Mah.</span>
          </div>
          <div className="flex items-center justify-between mt-6 mb-3 text-gray-400">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
              </svg>
              <span className="font-medium text-white">Input 10 23</span>
            </div>
            <span>1/apr 2024</span>
          </div>
          <div className="flex justify-between text-sm text-white">
            <span>Input 9</span>
            <span>Input 3</span>
            <span>Input 9</span>
          </div>
        </div>
      </div>
    </>;
};