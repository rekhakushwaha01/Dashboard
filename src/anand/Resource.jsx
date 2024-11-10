import React from 'react'

const Resources = () => {
  const resources = [
    { name: 'Oxygen', value: 50, color: 'bg-blue-500' },
    { name: 'Energy', value: 35, color: 'bg-green-500' },
    { name: 'Food', value: 65, color: 'bg-red-500' },
    { name: 'Rope', value: 80, color: 'bg-orange-500' },
    { name: 'First Aid', value: 90, color: 'bg-yellow-500' },
    { name: 'Climbing Gear', value: 70, color: 'bg-purple-500' },
    { name: 'GPS', value: 85, color: 'bg-cyan-500' }
  ];

  return (
    <div className="h-full">
      <h2 className="text-2xl font-bold mb-4">Mountain Climbing Resources</h2>
      <p className="text-gray-600">Step: 600 / 20,000</p>
      
      <div className="mt-4">
        <h3 className="font-semibold mb-4">Mountain Climbing Resources</h3>
        <div className="space-y-4">
          {resources.map((resource, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex justify-between mb-1">
                <span>{resource.name}</span>
                <span>{resource.value}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`${resource.color} h-2.5 rounded-full`} 
                  style={{ width: `${resource.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Resources