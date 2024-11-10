import React, { useState, useEffect } from 'react';

const Resources = () => {
  const [step, setStep] = useState(0); // Track the step count
  const [resources, setResources] = useState([
    { name: 'Oxygen', value: 100, depletionRate: 0.05, color: 'bg-blue-500' },
    { name: 'Energy', value: 100, depletionRate: 0.03, color: 'bg-green-500' },
    { name: 'Food', value: 100, depletionRate: 0.02, color: 'bg-red-500' },
    { name: 'Rope', value: 100, depletionRate: 0.04, color: 'bg-orange-500' },
    { name: 'First Aid', value: 100, depletionRate: 0.01, color: 'bg-yellow-500' },
    { name: 'Climbing Gear', value: 100, depletionRate: 0.03, color: 'bg-purple-500' },
    { name: 'GPS', value: 100, depletionRate: 0.02, color: 'bg-cyan-500' }
  ]);

  const totalSteps = 20000; // Total steps to deplete resources
  const stepIncrement = 5; // Increment steps

  useEffect(() => {
    if (step > 0) {
      // Calculate resource depletion based on steps
      const depletionFactor = (step / totalSteps); // Percentage of steps completed

      const updatedResources = resources.map(resource => ({
        ...resource,
        value: Math.max(0, resource.value - (depletionFactor * resource.depletionRate * 100)), // Decrease resource value by its specific depletion rate
      }));

      setResources(updatedResources);
    }
  }, [step]); // Recalculate resources whenever step changes

  const handleClimbStep = () => {
    if (step < totalSteps) {
      setStep(step + stepIncrement); // Increment step by 5
    }
  };

  return (
    <div className="h-full px-4 sm:px-6 md:px-8 lg:px-10">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Mountain Climbing Resources</h2>
      <p className="text-gray-600 text-sm sm:text-base">Step: {step} / {totalSteps}</p>
      
      <div className="mt-4">
        <h3 className="font-semibold text-lg sm:text-xl mb-4">Resources Status</h3>
        <div className="space-y-4">
          {resources.map((resource, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex justify-between sm:space-x-4 mb-2 sm:mb-0">
                <span className="text-sm sm:text-base">{resource.name}</span>
                <span className="text-sm sm:text-base">{Math.round(resource.value)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 sm:h-3">
                <div 
                  className={`${resource.color} h-2.5 sm:h-3 rounded-full`} 
                  style={{ width: `${resource.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 text-center">
        <button 
          onClick={handleClimbStep}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Climb Step
        </button>
      </div>
    </div>
  );
};

export default Resources;
