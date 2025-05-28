import React, {useState} from 'react';
import {history} from '../../TestArrays/IngestHistory.tsx';
export const IngestHistory = () => {
  const [showAll, setShowAll] = useState(false);
  console.log(showAll);
  const visiblehistory = showAll ? history : history.slice(0, 3);

  return <div>
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-medium text-white">INGEST HISTORY</h2>
      <button
          onClick={() => setShowAll(!showAll)} className="text-blue-600 text-sm font-medium hover:text-blue-800">

        {showAll ? 'SHOW LESS' : 'VIEW ALL'}
      </button>
    </div>
    <div className="bg-gray-950 rounded-lg shadow-sm border border-black">
      <div className='p-4'>
      {visiblehistory.map((item, index) => <div key={item.id}
                                         className={`flex justify-between items-center ${index !== history.length - 1 ? 'border-b border-gray-100/20' : ''}`}>
            <h3 className="font-medium text-white">{item.name}</h3>
            <p className="text-white">{item.date}</p>
          </div>)}
      </div>
    </div>
    </div>;
};