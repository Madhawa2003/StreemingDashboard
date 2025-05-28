import React, { useState } from 'react';
import { StatusCard } from './StatusCard.tsx';  // Make sure this path & extension works
import { inputs } from '../../TestArrays/InputMonitor.tsx';
import {AlertTriangle, Camera, CameraOff} from 'lucide-react';
import {MonitorPopup} from "../../Util/MonitorPopup.tsx";

export const InputMonitor = () => {
    const [selectedInput, setSelectedInput] = useState(null);

    return (
        <div className="bg-gray-500/20 pl-6 pr-6 pt-8 pb-5 rounded-md w-full">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-white">INPUT MONITOR</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
                {inputs.map((input) => (
                    <div key={input.id} onClick={() => setSelectedInput(input)} className="cursor-pointer">
                        <StatusCard title={input.name} subtitle={input.source} status={input.status}/>
                    </div>
                ))}

                <div className="flex gap-5">
                    <Camera className="text-green-500"/>
                    <h2 className="text-white">Camera Online</h2>
                </div>
                <div className="flex gap-5">
                    <CameraOff className="text-red-500"/>
                    <h2 className="text-white">Camera Offline</h2>
                </div>
                <div className="flex gap-5">
                    <AlertTriangle className="text-yellow-500"/>
                    <h2 className="text-white">Error</h2>
                </div>
            </div>

            {/* Render the popup if an input is selected */}
            {selectedInput && (
                <MonitorPopup data={selectedInput} onClose={() => setSelectedInput(null)} />
            )}
        </div>
    );
};
