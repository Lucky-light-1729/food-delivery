import React from "react";
import Card from "./ProductCard";

function AddSeller() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500">
      <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-8 max-w-xl w-full text-white">
        <h2 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
          📦 Add New Seller
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Seller Name</label>
            <input
              type="text"
              placeholder="e.g. ABC Traders"
              className="w-full p-2 rounded bg-white bg-opacity-20 text-white placeholder-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Email Address</label>
            <input
              type="email"
              placeholder="seller@email.com"
              className="w-full p-2 rounded bg-white bg-opacity-20 text-white placeholder-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Shop Name</label>
            <input
              type="text"
              placeholder="e.g. ABC PQR Store"
              className="w-full p-2 rounded bg-white bg-opacity-20 text-white placeholder-white focus:outline-none"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block mb-1 font-semibold">Phone Number</label>
              <input
                type="text"
                placeholder="1234567890"
                className="w-full p-2 rounded bg-white bg-opacity-20 text-white placeholder-white focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 font-semibold">Shop Address</label>
              <input
                type="text"
                placeholder="City, Street, Pincode"
                className="w-full p-2 rounded bg-white bg-opacity-20 text-white placeholder-white focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white py-2 rounded font-semibold"
          >
            ✅ Add Seller
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddSeller;
