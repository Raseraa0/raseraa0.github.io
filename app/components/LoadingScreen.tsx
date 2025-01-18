// components/LoadingScreen.tsx
import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <h1 className="text-xl font-semibold">Loading...</h1>
    </div>
  );
};

export default LoadingScreen;
