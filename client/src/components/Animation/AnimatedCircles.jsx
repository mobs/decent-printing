import React from "react";
import './style.css'

const AnimatedCircles = () => {
  const getRandomPosition = () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  });

  return (
    <div className="absolute inset-0 z-0">
      <div className="animate-circles absolute w-6 h-6 opacity-50 bg-blue-500 rounded-full"></div>
      <div
        className="animate-circles absolute w-6 h-6 opacity-50 bg-purple-500 rounded-full"
        style={getRandomPosition()}
      ></div>
      <div
        className="animate-circles absolute w-6 h-6 opacity-50 bg-red-300 rounded-full"
        style={getRandomPosition()}
      ></div>
      <div
        className="animate-circles absolute w-6 h-6 opacity-50 bg-orange-500 rounded-full"
        style={getRandomPosition()}
      ></div>
      <div
        className="animate-circles absolute w-6 h-6 opacity-50 bg-green-300 rounded-full"
        style={getRandomPosition()}
      ></div>
      <div
        className="animate-circles absolute w-6 h-6 opacity-50 bg-gray-300 rounded-full"
        style={getRandomPosition()}
      ></div>
      <div
        className="animate-circles absolute w-6 h-6 opacity-50 bg-purple-800 rounded-full"
        style={getRandomPosition()}
      ></div>
      <div
        className="animate-circles absolute w-6 h-6 opacity-50 bg-red-800 rounded-full"
        style={getRandomPosition()}
      ></div>
      <div
        className="animate-circles absolute w-6 h-6 opacity-50 bg-brown-500 rounded-full"
        style={getRandomPosition()}
      ></div>
      <div
        className="animate-circles absolute w-6 h-6 opacity-50 bg-gray-600 rounded-full"
        style={getRandomPosition()}
      ></div>
    </div>
  );
};

export default AnimatedCircles;
