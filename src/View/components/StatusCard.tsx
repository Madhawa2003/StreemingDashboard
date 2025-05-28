import React from 'react';
import {AlertTriangle, Camera, CameraOff} from "lucide-react";
type StatusCardProps = {
  title: string;
  subtitle: string;
  status: 'active' | 'error' | 'inactive';
};
export const StatusCard = ({
  title,
  subtitle,
  status
}: StatusCardProps) => {
  const getStatusColor = () => {
    switch (status) {
      case 'active':
        return <Camera className="text-green-500" />;
      case 'inactive':
        return <CameraOff className="text-red-500" />;
      case 'error':
        return  <AlertTriangle className="text-yellow-500" />;
      default:
        return 'bg-gray-500';
    }
  };
  return <div className="bg-gray-950 rounded-lg shadow-sm border border-black p-4  hover:shadow-md hover:shadow-gray-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
    <div className="flex items-center gap-8">
      {getStatusColor()}
      <div className="text-center">
        <h3 className="font-medium text-white">{title}</h3>
        <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
      </div>
    </div>

  </div>

};