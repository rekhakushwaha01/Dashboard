import React, { useState } from 'react';

// Sample challenges and terrains for randomization
const challenges = [
  "Easy Terrain",
  "Rocky Path",
  "Steep Ascent",
  "Blizzard",
  "Loose Gravel",
  "Thick Forest"
];

const situations = [
  "Rocky Path",
  "Mudslide",
  "Clear View",
  "Foggy",
  "Avalanche Risk",
  "Safe Camp"
];

const Trail = () => {
  const [step, setStep] = useState(0);
  const [challenge, setChallenge] = useState(challenges[0]);
  const [currentSituation, setCurrentSituation] = useState(situations[0]);

  const handleClimbStep = () => {
    if (step < 5) {
      setStep(step + 1);
      setChallenge(challenges[Math.floor(Math.random() * challenges.length)]);
      setCurrentSituation(situations[Math.floor(Math.random() * situations.length)]);
    }
  };

  return (
    <div className="h-full px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6 lg:mb-8">Mountain Climbing Simulation</h2>
      <p className="text-gray-600 text-center text-sm sm:text-base mb-2">Step: {step + 1} / 6</p>
      
      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 my-4">
        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${(step / 5) * 100}%` }}></div>
      </div>

      <p className="text-red-500 mt-6 sm:mt-10 text-center text-sm sm:text-base">Upcoming Challenge: {challenge}</p>
      <p className="text-yellow-500 mt-2 sm:mt-4 text-center text-sm sm:text-base">Current Situation: {currentSituation}</p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 sm:mt-10">
        {/* Climb Step Button */}
        <button 
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 w-full sm:w-auto mb-4 sm:mb-0"style={{position:"relative",top:"-27px"}}
          onClick={handleClimbStep}
        >
          Climb Step
        </button>

        {/* Current Step Button */}
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full sm:w-auto"style={{position:"relative",top:"-27px"}}>
          Current Step: {currentSituation}
        </button>
      </div>
    </div>
  );
}

export default Trail;
