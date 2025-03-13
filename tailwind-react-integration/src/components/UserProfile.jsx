import React from 'react';

function UserProfile() {
  return (
    <div className="bg-gray-100 sm:p-4 md:p-8 max-w-xs sm:max-w-sm mx-auto my-20 rounded-lg shadow-lg
      hover:shadow-xl transition-transform duration-300 ease-in-out">
      <img 
        src="src/img/degooo.jpg" 
        alt="User" 
        className="w-24 h-24 sm:w-36 sm:h-36 rounded-full mx-auto hover:scale-110"
      />
      <h1 className="text-lg sm:text-xl text-blue-800 my-4 text-center hover:text-blue-500 ">Degaga Emiru</h1>
      <p className="text-sm sm:text-base text-gray-600 text-center hover:text-blue-500">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
