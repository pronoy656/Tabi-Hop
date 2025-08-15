import React from 'react';
import Card, { CardContent } from '../../../components/ui/card';
import { MapPin } from 'lucide-react';

const ItineraryGuides = () => {
  const destinations = [
    {
      id: 1,
      name: 'Tokyo, Japan',
      description:
        "Experience the best of Japan's iconic landmarks and hidden gems in a single day.",
      image: '/icard-1.jpg',
      tags: ['Adventure', 'History', 'Culture'],
    },
    {
      id: 2,
      name: 'Kakuodate, Akita, Japan',
      description:
        'Discover the perfect blend of tradition and modernity in this ancient Japanese city.',
      image: '/icard-2.jpg',
      tags: ['Traditional', 'Culture', 'History'],
    },
    {
      id: 3,
      name: 'Osaka, Japan',
      description:
        'Navigate the city that never sleeps with our carefully planned one-day itinerary.',
      image: '/icard- 3.jpg',
      tags: ['Adventure', 'History', 'Nightlife'],
    },
  ];
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Free One-Day <span className="text-purple-600">Itinerary</span>{' '}
            Guides
          </h1>
          <p className="text-gray-800 font-medium text-lg max-w-2xl mx-auto">
            Start planning your trip with our carefully curated itineraries
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card
              key={destination.id}
              className="overflow-hidden hover:shadow-md duration-300 border-[#E66CE5]"
            >
              <img
                src={destination.image || '/placeholder.svg'}
                alt={destination.name}
                className="w-full h-88 object-cover"
              />
              <CardContent className="bg-[#FFF8F3]">
                <div className="flex items-center justify-start space-x-1 mb-3.5">
                  <MapPin></MapPin>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {destination.name}
                  </h3>
                </div>
                <p className="text-gray-900 font-medium mb-6">
                  {destination.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-7">
                  {destination.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-2.5 bg-[#E66CE529] text-[#C361C2] text-xs font-medium rounded-full "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="bg-[#E66CE5] w-full h-11 border-1 border-[#E66CE5]  rounded-bl-md rounded-br-md rounded-tr-lg relative transition-colors duration-300 ease-in-out hover:bg-[#E66CE529]">
                  <button className=" h-11 bg-white border-1 border-[#E66CE5] rounded-lg absolute top-[-5px] font-medium w-full -ml-[4px] transition-colors duration-300 ease-in-out hover:bg-[#E66CE5] hover:text-white">
                    View Guide
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItineraryGuides;
