import React from 'react'
import CircularProgress from './CircularProgress'
import Weather from './Weather';
import Trail from './Trail';
import Resources from './Resource';
import'./index.css'

const info = ["Altitude sickness", "Hypothermia", "Frostbite", "Dehydration", "Cardiac vascular events"];

const App = () => {
  return (
    <div className="h-screen w-full flex">
      {/* First Column - Health Risk (1/3 width) */}
      <div className="w-1/3 h-full p-4 bg-gray-100 overflow-y-auto">
        <h1 className='text-3xl font-bold mb-4'>HEALTH RISK</h1>
        {info.map((risk, index) => (
          <div key={index} className="mb-4">
            <CircularProgress risk={risk} />
          </div>
        ))}
      </div>

      {/* Middle Column - Trail and Weather (1/3 width) */}
      <div className="w-1/3 h-full flex flex-col">
        {/* Trail Section - Top Half */}
        <div className="h-1/2 p-4 bg-gray-100">
          <div className="bg-white rounded-lg shadow-lg p-6 h-full">
            {/* <h2 className="text-2xl font-bold mb-4">Mountain Climbing Simulation</h2> */}
            <Trail />
          </div>
        </div>
        
        {/* Weather Section - Bottom Half */}
        <div className="h-1/2 p-4 bg-gray-100">
          <div className="bg-white rounded-lg shadow-lg p-6 h-full">
            <h2 className="text-2xl font-bold mb-4">Mountain Weather Forecast</h2>
            <Weather />
          </div>
        </div>
      </div>

      {/* Third Column - Resources (1/3 width) */}
      <div className="w-1/3 h-full p-4 bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg p-6 h-full overflow-y-auto">
          <Resources />
        </div>
      </div>
    </div>
  )
}

export default App