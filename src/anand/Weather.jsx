import React, { useState, useEffect } from 'react';
import axios from 'axios';

const mountains = [
    { name: "Mount Everest", lat: 27.9881, lon: 86.9250, country: "Nepal/China (Tibet)" },
    { name: "K2", lat: 35.8808, lon: 76.5133, country: "Pakistan/China (Tibet)" },
    { name: "Kangchenjunga", lat: 27.7025, lon: 88.1478, country: "Nepal/India" },
    { name: "Lhotse", lat: 27.9617, lon: 86.9330, country: "Nepal/China (Tibet)" },
    { name: "Makalu", lat: 27.8897, lon: 87.0883, country: "Nepal/China (Tibet)" },
    { name: "Cho Oyu", lat: 28.0944, lon: 86.6600, country: "Nepal/China (Tibet)" },
    { name: "Dhaulagiri", lat: 28.6973, lon: 83.4870, country: "Nepal" },
    { name: "Manaslu", lat: 28.5497, lon: 84.5597, country: "Nepal" },
    { name: "Nanga Parbat", lat: 35.2375, lon: 74.5892, country: "Pakistan" },
    { name: "Annapurna I", lat: 28.5950, lon: 83.8200, country: "Nepal" },
    { name: "Mount Fuji", lat: 35.3606, lon: 138.7274, country: "Japan" },
    { name: "Mount Kilimanjaro", lat: -3.0674, lon: 37.3556, country: "Tanzania" },
    { name: "Mount Denali (formerly Mt. McKinley)", lat: 63.0695, lon: -151.0074, country: "USA" },
    { name: "Mount Elbrus", lat: 43.3556, lon: 42.4453, country: "Russia" },
    { name: "Mount Aconcagua", lat: -32.6532, lon: -70.0109, country: "Argentina" },
    { name: "Mount Vinson", lat: -78.5200, lon: -85.6500, country: "Antarctica" },
    { name: "Mount St. Helens", lat: 46.1912, lon: -122.1957, country: "USA" },
    { name: "Mount Matterhorn", lat: 45.9763, lon: 7.6586, country: "Switzerland/Italy" },
    { name: "Mount Mont Blanc", lat: 45.8326, lon: 6.8652, country: "France/Italy" },
    { name: "Mount Vesuvius", lat: 40.8213, lon: 14.4260, country: "Italy" },
    { name: "Mount Puncak Jaya", lat: -4.0833, lon: 137.4200, country: "Indonesia" },
    { name: "Mount Rinjani", lat: -8.4200, lon: 116.4600, country: "Indonesia" },
    { name: "Mount Erebus", lat: -77.5325, lon: 167.1544, country: "Antarctica" },
    { name: "Mount Etna", lat: 37.7510, lon: 15.0047, country: "Italy" },
    { name: "Mount Ararat", lat: 39.7026, lon: 44.3116, country: "Turkey" },
    { name: "Mount Kilimanjaro", lat: -3.0674, lon: 37.3556, country: "Tanzania" },
    { name: "Mount Rushmore", lat: 43.8791, lon: -103.4591, country: "USA" },
    { name: "Mount Rainier", lat: 46.8523, lon: -121.7603, country: "USA" }
];

const Weather = () => {
    const [selectedMountain, setSelectedMountain] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const [predictedFactors, setPredictedFactors] = useState(null);
    const API_KEY = 'c55be3e11c0aedd5796e79116d447ac0';

    useEffect(() => {
        fetchWeather();
    }, [selectedMountain]);

    const fetchWeather = async () => {
        if (!selectedMountain) return;
        const { lat, lon } = selectedMountain;
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        setWeatherData(response.data);
    };

    const handleMountainChange = (e) => {
        const mountain = mountains.find(m => m.name === e.target.value);
        setSelectedMountain(mountain);
    };

    const checkForRain = () => {
        if (weatherData && weatherData.rain) {
            return weatherData.rain['1h'] ? `Rain in the last hour: ${weatherData.rain['1h']} mm` : "No rain in the last hour.";
        }
        return "No rain data available.";
    };

    return (
        <div className="h-full w-full">
            <div className="h-full w-full mx-auto p-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-lg">
                <div className="flex flex-col items-center space-y-6">
                    <h1 className="text-3xl font-bold text-white">Mountain Weather Forecast</h1>
                    
                    <div className="w-full">
                        <select 
                            onChange={handleMountainChange} 
                            value={selectedMountain ? selectedMountain.name : ""}
                            className="w-full  px-4 py-2 rounded-lg border-2 border-blue-300 focus:border-blue-500 focus:outline-none bg-white text-gray-700"
                        >
                            <option value="" disabled>Select a mountain</option>
                            {mountains.map((mountain) => (
                                <option key={mountain.name} value={mountain.name}>
                                    {mountain.name} - {mountain.country}
                                </option>
                            ))}
                        </select>
                    </div>

                    {weatherData && (
                        <div className="w-full h-72 bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg space-y-4">
                            <div className="flex justify-between items-center">
                                <h2 className="text-4xl font-bold text-gray-800">
                                    {Math.round(weatherData.main.temp)}°C
                                </h2>
                                <div className="text-right">
                                    <h3 className="text-xl font-semibold text-gray-700">
                                        {selectedMountain.name}
                                    </h3>
                                    <p className="text-gray-600">{selectedMountain.country}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                                <div className="space-y-2">
                                    <p className="text-gray-600">Latitude: {selectedMountain.lat}°</p>
                                    <p className="text-gray-600">Longitude: {selectedMountain.lon}°</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-gray-600">Humidity: {weatherData.main.humidity}%</p>
                                    <p className="text-gray-600">Wind: {weatherData.wind.speed} km/h</p>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-200">
                                <p className="text-gray-600">{checkForRain()}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Weather; 