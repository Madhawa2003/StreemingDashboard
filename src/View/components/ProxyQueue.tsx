import React from 'react';
import '../ExCss/exstyles.css';
export const ProxyQueue = () => {
  const queue = [{
    id: 1,
    name: 'Clip C',
    progress: 50,
    value: '50 %'
  }, {
    id: 2,
    name: 'Clip D',
    progress: 10,
    value: '720 p'
  }, {
    id: 3,
    name: 'News Segment',
    progress: 15,
    value: '1080 p'
  }];
  return <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-white">PROXY QUEUE</h2>
      </div>
      <div className="bg-gray-950 rounded-lg shadow-sm border border-black">
        {queue.map((item, index) => <div key={item.id} className={`p-4 ${index !== queue.length - 1 ? 'border-b border-gray-100/25' : ''}`}>
            <div className="flex justify-between mb-2">
              <h3 className="font-medium text-white">{item.name}</h3>
              <p className="text-gray-400">{item.value}</p>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div className={`h-2 rounded-full ${item.id === 1 ? 'bg-blue-500' : item.id === 2 ? 'bg-green-500' : 'bg-red-500'}`} style={{
            width: `${item.progress}%`
          }}></div>
            </div>
          </div>)}
      </div>
    </div>;
};