import React from "react";

function UnderProgress({ pageName }: { pageName: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800">{pageName} Page</h1>
        <p className="text-lg text-gray-600 mt-4">
          🚧 This page is currently under progress.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          We’re working hard to bring you something amazing. Stay tuned!
        </p>
        <div className="mt-6">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid mx-auto"></div>
        </div>
      </div>
    </div>
  );
}

export default UnderProgress;
