import React from 'react';

export default function Dashboard() {



          return (
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Users</h3>
                  <p className="text-3xl font-bold text-indigo-600">0</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Upcoming Events</h3>
                  <p className="text-3xl font-bold text-indigo-600">0</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Documents</h3>
                  <p className="text-3xl font-bold text-indigo-600">0</p>
                </div>
              </div>
            </div>
          );
      }
    
  

