import React, {useState} from 'react';
import {schedules} from "../../TestArrays/IngestSchedule.tsx";
export const IngestSchedule = () => {

    const [showAll, setShowAll] = useState(false);
    console.log(showAll);
    const visibleSchedules = showAll ? schedules : schedules.slice(0, 1);


  return <div>
      <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-white">INGEST SCHEDULE</h2>
          <button
              onClick={() => setShowAll(!showAll)} className="text-blue-600 text-sm font-medium hover:text-blue-800">
              {showAll ? 'SHOW LESS' : 'VIEW ALL'}
          </button>
      </div>
      <div className="bg-gray-950 rounded-lg shadow-sm border border-black p-2">
          {visibleSchedules.map((schedule, index) =>
              <div key={schedule.id} className={` ${index !== schedules.length - 1 ? 'border-b border-gray-100/30' : ''}`}>
            <div className="flex justify-between">
              <h3 className="font-medium text-white">{schedule.name}</h3>
              <p className="text-gray-400">{schedule.time}</p>
            </div>
            <div className="flex justify-between mt-1">
              <p className="text-gray-400 text-sm">
                Tomorrow, <span className="text-green-500">10:00</span>
              </p>
              <p className="text-gray-200 text-sm">{schedule.source}</p>
            </div>
          </div>)}
      </div>
    </div>;
};