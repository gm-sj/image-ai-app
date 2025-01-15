import React, { createContext, useEffect, useState } from 'react';

export interface DeviceTypeContextType {
  deviceType: string;
  setDeviceType: (type: string) => void;
}

export const DeviceTypeContext = createContext<DeviceTypeContextType | undefined>(undefined);

const getDeviceType = (): string => {
  const width = window.innerWidth;
  if (width >= 768 && width <= 1024) {
    return 'tablet';
  } else if (width < 768) {
    return 'mobile';
  } else {
    return 'desktop';
  }
};

export const DeviceTypeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [deviceType, setDeviceType] = useState<string>(getDeviceType());

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getDeviceType());
    };

    handleResize(); // 초기 로드 시 실행
    window.addEventListener('resize', handleResize); // 창 크기 변경 시 실행

    return () => window.removeEventListener('resize', handleResize); // 이벤트 제거
  }, []);

  // `setDeviceType` 포함된 `value` 전달
  return (
    <DeviceTypeContext.Provider value={{ deviceType, setDeviceType }}>
      {children}
    </DeviceTypeContext.Provider>
  );
};
