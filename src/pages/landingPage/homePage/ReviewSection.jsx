import { Quote, Star } from 'lucide-react';
import React from 'react';
import Card, { CardContent } from '../../../components/ui/card';

const ReviewSection = () => {
  const testimonials = [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.bero et velit interdum, ac aliquet odio mattis.',
      author: 'Steve Jobs',
      role: 'Fashion Designer',
      borderColor: 'border-pink-200',
      rating: 4.9,
      avatar: '/profile.png',
      quoteColor: 'bg-pink-400',
    },
    {
      id: 2,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.bero et velit interdum, ac aliquet odio mattis.',
      author: 'Steve Jobs',
      role: 'Fashion Designer',
      borderColor: 'border-purple-200',
      rating: 4.9,
      avatar: '/profile.png',
      quoteColor: 'bg-purple-400',
    },
    {
      id: 3,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.bero et velit interdum, ac aliquet odio mattis.',
      author: 'Steve Jobs',
      role: 'Fashion Designer',
      borderColor: 'border-blue-200',
      rating: 4.9,
      avatar: '/profile.png',
      quoteColor: 'bg-blue-400',
    },
  ];
  return (
    <div className="py-28 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-28">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-black mb-5">
            Happy{' '}
            <span className="text-[#6E67D6]">
              Tabi <span className="text-[#E66CE5]">hop</span>
            </span>{' '}
            travelers
          </h1>
          <p className="text-black sm:text-4xl md:text-5xl lg:text-2xl font-medium">
            See what our fluffy friends have to say about their adventures!
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-16 md:gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className={`bg-white ${testimonial.borderColor} shadow-md border-0 relative`}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div
                  className={`${testimonial.quoteColor} w-16 h-16 rounded-full flex items-center justify-center mb-6 absolute -top-12`}
                >
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  {testimonial.text}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar || '/placeholder.svg'}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-lg">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <div className="flex items-center gap-1">
                      <span className="font-medium text-gray-900">
                        {testimonial.rating}
                      </span>
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
