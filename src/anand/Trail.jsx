import React from 'react'

const Trail = () => {
  return (
    <div className="h-full">
      <h2 className="text-2xl font-bold text-center mb-4">Mountain Climbing Simulation</h2>
      <p className="text-gray-600 text-center">Step: 1 / 6</p>
      
      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 my-4">
        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '16.67%' }}></div>
      </div>

      <p className="text-red-500 mt-10 text-center">Upcoming Challenge: Easy Terrain</p>
      
      <div className="flex justify-center gap-6 mt-10">
        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
          Climb Step
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Current Step: Rocky Path
        </button>
      </div>
    </div>
  )
}

export default Trail
