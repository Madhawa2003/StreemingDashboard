import React from 'react';
import { PlusIcon } from 'lucide-react';
export const Scheduler = () => {
  return <div className="flex flex-col sm:flex-none  md:flex-row md:items-center justify-between gap-4 bg-gray-800 h-auto pb-2 md:pb-5  lg:pb-5 lg:pr-10 lg:pl-10 ">
      <div className="flex flex-col sm:flex-none  md:flex-row md:items-center lg:gap-10 ">
        <div className="relative mt-5 ">
          <div className="bg-gray-900 text-white border h-10 border-none rounded-md px-4  shadow-sm focus:outline-none   mx-auto flex items-center   justify-between space-x-4">
            <label className="mr-2 whitespace-nowrap">Source</label>
            <select
                defaultValue="all"
                className="bg-inherit text-gray-200 border-none focus:border-none h-10 w-full">
              <option value="all">All Sources</option>
              <option value="studio">Studio</option>
              <option value="remote">Remote</option>
            </select>
          </div>
        </div>
        <div className="relative mt-5 ">
          <select
              className="appearance-auto bg-gray-900 text-white border border-gray-200/50 rounded-md px-4 py-2 pr-8  shadow-sm focus:outline-none  border-none focus:ring-2 h-10 focus:ring-blue-500 w-full "
              defaultValue="all">
            <option value="all">Input Type</option>
            <option value="hdmi">HDMI</option>
            <option value="sdi">SDI</option>
            <option value="stream">Stream</option>
          </select>
        </div>
      </div>
      <button className="bg-blue-600 hover:bg-blue-700 md:items-center text-white px-5 py-2 lg:mr-6 rounded-md shadow-sm transition-colors items-center justify-center">
        {/*<PlusIcon size={18} className="mr-2" />*/}
       + Schedule Ingest
      </button>
    </div>;
};