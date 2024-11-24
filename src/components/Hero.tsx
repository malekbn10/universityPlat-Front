import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="absolute inset-0 bg-[url('/heroImage.jpg')] mix-blend-overlay opacity-20 bg-cover bg-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="text-center">
          <GraduationCap className="h-16 w-16 mx-auto mb-8 text-blue-200" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Shape Your Academic Future
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover the perfect university for your academic journey with our
            comprehensive orientation platform
          </p>
          <Link
            to="/orientation"
            className="inline-flex items-center px-8 py-4 rounded-full bg-white text-blue-900 font-semibold text-lg transition-all hover:bg-blue-50 hover:scale-105"
          >
            Start Your Orientation Journey
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}