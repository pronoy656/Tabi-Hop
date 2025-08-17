import Card, { CardContent } from '../../../components/ui/card';
import { MapPin } from 'lucide-react';

const TravelBlog = () => {
  const destinations = [
    {
      id: 1,
      name: '10 Hidden Gems in Tokyos Back Streets',
      description:
        'Discover the lesser-known corners of Tokyo that locals love, away from the tourist crowds.',
      image: '/icard-1.jpg',
      tags: ['Adventure', 'History', 'Culture'],
    },
    {
      id: 2,
      name: 'Ultimate Guide to Street Food in Japan',
      description:
        'A comprehensive guide to Bangkoks most authentic street food spots and local favorites.',
      image: '/icard-2.jpg',
      tags: ['Traditional', 'Culture', 'History'],
    },
    {
      id: 3,
      name: 'Best Photography Spots in japan',
      description:
        'Capture the perfect Instagram-worthy moments in japan most scenic locations.',
      image: '/icard- 3.jpg',
      tags: ['Adventure', 'History', 'Nightlife'],
    },
  ];

  return (
    <div className="min-h-screen py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest Travel <span className="text-purple-600">Stories</span>{' '}
          </h1>
          <p className="text-gray-800 font-medium text-lg max-w-2xl mx-auto">
            Read inspiring travel stories and get inspired for your next
            adventure{' '}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card
              key={destination.id}
              className="overflow-hidden hover:shadow-md duration-300 border-[#6A4388]"
            >
              <img
                src={destination.image || '/placeholder.svg'}
                alt={destination.name}
                className="w-full h-88 object-cover"
              />
              <CardContent className="bg-[#FFF8F3] p-6">
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
                      className="px-3 py-2.5 bg-[#e1defa] text-[#6B5DE0] text-xs font-medium rounded-full "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="bg-[#6A4388] w-full h-11 border-1 border-[#6A4388]  rounded-bl-md rounded-br-md rounded-tr-lg relative transition-colors duration-300 ease-in-out hover:bg-[#d6b8ec]">
                  <button className=" h-11 bg-white border-1 border-[#6A4388] rounded-lg absolute top-[-5px] font-medium w-full -ml-[4px] transition-colors duration-300 ease-in-out hover:bg-[#6A4388] hover:text-white">
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

export default TravelBlog;
