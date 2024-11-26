import axios from 'axios';
import { Save, User } from 'lucide-react';
import React, { useEffect, useState } from 'react'

export default function Settings() {
  const [email,setUserEmail] = useState('');

    const myToken = localStorage.getItem('token');

    useEffect(()=>{
        if (myToken) {
        setToken(myToken);
        const jwtdecode = jwtDecode(myToken);
        setUserEmail(jwtdecode['email']); 
        }
      },[myToken])

//a modifier
const getUser = async () =>{
    const req = await axios.get("http://localhost:5000/" ,email ).then(
        response =>{
            const [formData, setFormData] = useState({
                fullName:response.data.name ,
                email: response.data.email,
                dateOfBirth: response.data.dateOfBirth,
                password: '',
              });
        }
    )
};
       
      
        const [isLoading, setIsLoading] = useState(false);
      
        const handleSubmit = async (e) => {
            e.preventDefault();
            setIsLoading(true);
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          setIsLoading(false);
          // Show success message
          alert('Profile updated successfully!');
        };
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData(prev => ({ ...prev, [name]: value }));
        };
      
  return (
   
    <div className="max-w-2xl mx-auto p-6">
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="flex items-center space-x-4 mb-8">
        <div className="h-16 w-16 rounded-full bg-[#1B4965] flex items-center justify-center">
          <User className="h-8 w-8 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Profile Settings</h1>
          <p className="text-gray-600">Update your personal information</p>
        </div>
      </div>

      <form onSubmit={handleSubmit()} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange()}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1B4965] focus:ring focus:ring-[#1B4965] focus:ring-opacity-50 transition-colors"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-50 cursor-not-allowed"
            disabled
          />
          <p className="mt-1 text-sm text-gray-500">Email cannot be changed</p>
        </div>

        <div>
          <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
            Date of Birth
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange()}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1B4965] focus:ring focus:ring-[#1B4965] focus:ring-opacity-50 transition-colors"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            New Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange()}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1B4965] focus:ring focus:ring-[#1B4965] focus:ring-opacity-50 transition-colors"
            placeholder="Leave blank to keep current password"
            minLength={8}
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full sm:w-auto flex justify-center items-center px-6 py-2.5 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#1B4965] hover:bg-[#1B4965]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1B4965] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="h-5 w-5 mr-2" />
            {isLoading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}


