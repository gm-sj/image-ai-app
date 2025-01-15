import React, { useContext } from 'react';
import { DeviceTypeContextType, DeviceTypeContext } from '../context/DeviceTypeProvider';

export const useDeviceType = (): DeviceTypeContextType => {
  const context = useContext(DeviceTypeContext);
  if (!context) {
    throw new Error('useDeviceType must be used within a DeviceTypeProvider');
  }
  return context;
};
