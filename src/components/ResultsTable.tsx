import React from 'react';
import { MapPin, Users, Trophy } from 'lucide-react';

interface ResultsProps {
  results: {
    university: string;
    specialties: {
      name: string;
      availablePlaces: number;
      requiredScore: number;
      distance: number;
    }[];
  }[];
}

export default function ResultsTable({ results }: ResultsProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-blue-900 uppercase tracking-wider"
              >
                University & Specialty
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-blue-900 uppercase tracking-wider"
              >
                Available Places
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-blue-900 uppercase tracking-wider"
              >
                Required Score
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-blue-900 uppercase tracking-wider"
              >
                Distance
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {results.map((result, index) => (
              <React.Fragment key={index}>
                <tr className="bg-blue-50/50">
                  <td
                    colSpan={4}
                    className="px-6 py-4 font-medium text-blue-900"
                  >
                    {result.university}
                  </td>
                </tr>
                {result.specialties.map((specialty, specIndex) => (
                  <tr
                    key={`${index}-${specIndex}`}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 pl-12">
                      {specialty.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-blue-500 mr-2" />
                        {specialty.availablePlaces} places
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <div className="flex items-center">
                        <Trophy className="h-4 w-4 text-blue-500 mr-2" />
                        {specialty.requiredScore}%
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-blue-500 mr-2" />
                        {specialty.distance} km
                      </div>
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}