import React from 'react';

function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-500 to-blue-500">
      <div className="flex flex-wrap justify-center items-center p-8 mt-" >
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="h-[450px] rounded-3xl"
            src="https://www.foodiv.com/wp-content/uploads/2023/10/Title-change-Top-Online-Food-Delivery-Apps-1.jpg" 
            alt="App Preview"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-10 space-y-3">
          <h1 className="text-5xl font-extrabold text-brown-700">
            <span className="text-6xl text-brown-700 font-bold">Welcome</span>
          </h1>
          <h2 className="text-4xl text-blue-600 font-bold">To Ultimate</h2>
          <h3 className="text-2xl text-red-600 font-extrabold">
            Food Delivery App — <span className="text-pink-700">My-Zomato</span>
          </h3>
          <p className="text-lg text-gray-700 font-medium italic">
            “Good Food with Good Mindset” 🍽️
          </p>
          <button className="mt-4 px-6 py-3 bg-purple-600 text-white font-semibold text-lg rounded-full hover:bg-purple-700 transition">
            Explore Now 🚀
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

