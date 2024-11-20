import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const events = [
  {
    id: '1',
    title: 'Open Day 2024',
    date: '2024-04-15',
    time: '10:00 AM',
    description: 'Experience campus life and meet faculty members',
    location: 'Main Campus'
  },
  {
    id: '2',
    title: 'Student Workshop',
    date: '2024-04-20',
    time: '2:00 PM',
    description: 'Learn about admission requirements and application process',
    location: 'Virtual Event'
  },
  {
    id: '3',
    title: 'Campus Tour',
    date: '2024-04-25',
    time: '11:00 AM',
    description: 'Guided tour of facilities and departments',
    location: 'Main Campus'
  }
];

export default function Events() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Upcoming Events
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100"
            >
              <div className="flex items-center mb-4 text-blue-600">
                <Calendar className="h-5 w-5 mr-2" />
                <span className="font-medium">{event.date}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {event.title}
              </h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="h-4 w-4 mr-1" />
                <span className="mr-4">{event.time}</span>
                <MapPin className="h-4 w-4 mr-1" />
                <span>{event.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}