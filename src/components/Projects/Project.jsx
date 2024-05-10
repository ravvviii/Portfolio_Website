import React from 'react';
import ravvviiimovieland from '../../img/ravvviiimovieland.png';
import stillWorking from '../../img/stillWorking.jpeg';

export default function Project() {
  return (
    <div className="container mx-auto px-4 py-8">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Example project card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={ravvviiimovieland} alt="Project 1" className="w-full h-64 object-cover object-center" />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Ravi Movieland</h3>
            <p className="text-gray-700 mb-4">A website where you can browse your movies.</p>
            <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" href='https://ravvviiimovieland.netlify.app/' target='_blank'>
              View Project
            </a>
          </div>
        </div>

        {/* Example project card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={stillWorking} alt="Project 2" className="w-full h-64 object-cover object-center" />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">E-Janausadi</h3>
            <p className="text-gray-700 mb-4">A first-of-its-kind online generic medicine selling website to help people order medicine from Pradhanmantri Jan Aushadhi Kendra.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              View Project
            </button>
          </div>
        </div>
        
        {/* Add more project cards here */}
      </div>
    </div>
  );
}
