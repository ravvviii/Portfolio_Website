import React from 'react';
import Buisness from '../../img/Buisness.jpeg';
import ravvviiimovieland from '../../img/ravvviiimovieland.png';
import stillWorking from '../../img/stillWorking.jpeg';
import zip from '../../img/zip.jpg';


export default function Project() {
  return (
    <div className="container mx-auto px-4 py-8">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Example project card */}
       
      

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={zip} alt="Project 2" className="w-full h-64 object-contain object-center" />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">ZipZap</h3>
            <p className="text-gray-700 mb-4">ZipZap is a fast and efficient file-sharing app, enabling seamless transfers of large files across devices with easy-to-use features, prioritizing speed, security, and user-friendly navigation for all users.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => window.open("https://play.google.com/store/apps/details?id=com.ravvviiizipzap", "_blank")}
              >
              View Project
            </button>
          </div>
        </div>









        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={Buisness} alt="Project 2" className="w-full h-64 object-contain object-center" />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Business-Directory</h3>
            <p className="text-gray-700 mb-4">The Business Directory project is a streamlined platform designed to connect businesses and customers, offering detailed listings, reviews, and contact options to enhance visibility and facilitate easy access to local services.</p>
           
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => window.open("https://github.com/ravvviii/Buisness-Directory", "_blank")}
            >
              View Project
            </button>
          </div>
        </div>


        
        
        {/* Add more project cards here */}



        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={ravvviiimovieland} alt="Project 1" className="w-full h-64 object-fill object-center" />
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

{/* Example project card */}

      </div>
    </div>
  );
}
