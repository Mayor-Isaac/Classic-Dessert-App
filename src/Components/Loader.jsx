import React from 'react';

export default function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-orange-500/20 backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  );
}
