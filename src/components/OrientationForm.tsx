import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

interface FormData {
  overallScore: number;
  studyField: string;
  mathGrade: number;
  physicsGrade: number;
  chemistryGrade: number;
  location: string;
}

export default function OrientationForm() {
  const [formData, setFormData] = useState<FormData>({
    overallScore: 0,
    studyField: '',
    mathGrade: 0,
    physicsGrade: 0,
    chemistryGrade: 0,
    location: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-center mb-8">
          <Calculator className="h-12 w-12 text-blue-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-900">
            Orientation Calculator
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="overallScore"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Overall Score
              </label>
              <input
                type="number"
                id="overallScore"
                min="0"
                max="100"
                value={formData.overallScore}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    overallScore: Number(e.target.value),
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="studyField"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Study Field
              </label>
              <select
                id="studyField"
                value={formData.studyField}
                onChange={(e) =>
                  setFormData({ ...formData, studyField: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select a field</option>
                <option value="engineering">Engineering</option>
                <option value="medicine">Medicine</option>
                <option value="computerScience">Computer Science</option>
                <option value="business">Business</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label
                htmlFor="mathGrade"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mathematics Grade
              </label>
              <input
                type="number"
                id="mathGrade"
                min="0"
                max="100"
                value={formData.mathGrade}
                onChange={(e) =>
                  setFormData({ ...formData, mathGrade: Number(e.target.value) })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="physicsGrade"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Physics Grade
              </label>
              <input
                type="number"
                id="physicsGrade"
                min="0"
                max="100"
                value={formData.physicsGrade}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    physicsGrade: Number(e.target.value),
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="chemistryGrade"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Chemistry Grade
              </label>
              <input
                type="number"
                id="chemistryGrade"
                min="0"
                max="100"
                value={formData.chemistryGrade}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    chemistryGrade: Number(e.target.value),
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Location
            </label>
            <input
              type="text"
              id="location"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your city"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Calculate Matches
          </button>
        </form>
      </div>
    </div>
  );
}