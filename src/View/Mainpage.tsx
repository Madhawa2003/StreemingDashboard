import React from 'react';
import {Scheduler} from "./components/Scheduler.tsx";
import {InputMonitor} from "./components/InputMonitor.tsx";
import {ActiveRecordings} from "./components/ActiveRecordings.tsx";
import {IngestSchedule} from "./components/IngestSchedule.tsx";
import {IngestHistory} from "./components/IngestHistory.tsx";
import {ProxyQueue} from "./components/ProxyQueue.tsx";
export function Mainpage() {
    return <div>
        <div className=''>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8   w-lvw">
                    <div className="lg:col-span-2">
                        <InputMonitor/>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 bg-gray-500/20 pl-6 pr-6 pt-8 pb-5 rounded-md">
                            <ActiveRecordings/>
                        </div>
                    </div>
                    <div className="space-y-6 bg-gray-500/20 pl-6 pr-6 pt-8 pb-5 rounded-md overflow-auto scrollbar-hide">
                        <IngestSchedule/>
                        <IngestHistory/>
                        <ProxyQueue/>
                    </div>
                </div>
        </div>
    </div>;
}