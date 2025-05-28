import React, { useState } from 'react';

export function MonitorPopup({ data, onClose }) {
    if (!data) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
            <div className="bg-gray-900 w-full max-w-md p-6 rounded-lg shadow-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-red-700 hover:text-black text-2xl">
                    X
                </button>
                <div className="mb-4">
                    <div className="w-full h-48 bg-gray-300 rounded-md flex items-center justify-center text-gray-600">
                        Preview
                    </div>
                </div>
                <h2 className="text-xl font-semibold text-white mb-2">Host: {data.host}</h2>
                <p className="text-white mb-1 ">Source: {data.source}</p>
                <p className="text-sm text-white">Status: {data.status}</p>
            </div>
        </div>
    );
}


