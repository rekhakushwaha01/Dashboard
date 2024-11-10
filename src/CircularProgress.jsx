import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgress = ({ risk }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulating API call with random values
    // Replace this with your actual API call
    fetch('https://api.example.com/progress')
      .then(response => response.json())
      .then(data => {
        setProgress(data.value);
      })
      .catch(() => {
        // Fallback random value for demonstration
        setProgress(Math.floor(Math.random() * 100));
      });
  }, []);

  return (
    <div className='flex items-center gap-10'>
      <div style={{ width: 100, height: 100 }}>
        <CircularProgressbar
          value={progress}
          text={`${progress}%`}
          styles={{
            // Path of the progress bar
            path: {
              stroke: '#3e98c7',
              strokeLinecap: 'butt',
            },
            // Trail is the gray background
            trail: {
              stroke: '#d6d6d6',
              strokeWidth: 8,
            },
            // Text style
            text: {
              fill: '#3e98c7',
              fontSize: '24px',
              dominantBaseline: 'middle',
              textAnchor: 'middle',
            },
          }}
          strokeWidth={8}
        />
      </div>
      <h2 className='text-xl font-normal'>{risk || 'Progress'}</h2>
    </div>
  );
}

export default CircularProgress;