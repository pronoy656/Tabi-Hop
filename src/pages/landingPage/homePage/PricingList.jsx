import React from 'react';
import Card, { CardContent } from '../../../components/ui/card';
import { Check, X } from 'lucide-react';
import { Button } from '../../../components/ui/button';

const PricingList = () => {
  const plans = [
    {
      name: 'Free',
      subtitle: 'Perfect for solo adventurers',
      price: null,
      bgColor: 'bg-pink-100',
      borderColor: 'border-pink-300',
      buttonColor:
        'border-pink-300 text-pink-600 hover:bg-[#E66CE5] hover:text-white font-semibold',
      features: [
        { name: 'Generate itinerary Modify, Save, Share', included: true },
        { name: 'Up to 3 versions of a one-day itinerary', included: false },
        { name: 'Premium AI Models', included: false },
        { name: 'Unlimited AI Search', included: false },
        { name: 'Google Maps Integration', included: false },
        {
          name: 'Personalized experience whleN creating an account Moodboard feature',
          included: false,
        },
        { name: 'API & Models Fine Tuning', included: false },
        { name: 'Ad-Banner-Free Experience', included: false },
      ],
    },
    {
      name: 'Plus',
      subtitle: '1 coin = one itinerary, 3 versions',
      price: null,
      bgColor: 'bg-purple-100',
      borderColor: 'border-purple-300',
      buttonColor:
        'border-purple-300 text-purple-600 hover:bg-[#6E67D6] hover:text-white font-semibold',
      features: [
        { name: 'Generate itinerary Modify, Save, Share', included: true },
        { name: 'Up to 3 versions of a one-day itinerary', included: true },
        { name: 'Premium AI Models', included: true },
        { name: 'Unlimited AI Search', included: true },
        { name: 'Google Maps Integration', included: true },
        {
          name: 'Personalized experience whleN creating an account Moodboard feature',
          included: true,
        },
        { name: 'API & Models Fine Tuning', included: false },
        { name: 'Ad-Banner-Free Experience', included: false },
      ],
    },
    {
      name: 'Premium',
      subtitle: '$25/month',
      price: '$25/month',
      bgColor: 'bg-blue-100',
      borderColor: 'border-blue-300 ',

      buttonColor:
        'border-blue-300 text-blue-600 hover:bg-[#5DADE2] hover:text-white font-semibold',
      features: [
        { name: 'Generate itinerary Modify, Save, Share', included: true },
        { name: 'Up to 3 versions of a one-day itinerary', included: true },
        { name: 'Premium AI Models', included: true },
        { name: 'Unlimited AI Search', included: true },
        { name: 'Google Maps Integration', included: true },
        {
          name: 'Personalized experience whleN creating an account Moodboard feature',
          included: true,
        },
        { name: 'API & Models Fine Tuning', included: true },
        { name: 'Ad-Banner-Free Experience', included: true },
      ],
    },
  ];
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 px-4 sm:px-6 lg:px-0">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-4 leading-snug">
            Pricing for every <span className="text-[#6E67D6]">traveler</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-medium text-gray-700 max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed">
            Free to try! Or pay-as-you-go with coins! We suggest the Premium
            Plan so you can create multiple itineraries with the best results
            without stressing about coin usage. Perfect for those in the travel
            industry, create many plans for your clients.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`bg-white ${plan.borderColor} border-2 relative`}
            >
              <CardContent>
                {/* Plan Header */}
                <div
                  className={`${plan.bgColor} py-5 rounded-tl-3xl rounded-tr-3xl mb-6`}
                >
                  <div className="text-center mb-8">
                    <h3 className="text-4xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 text-lg font-medium">
                      {plan.subtitle}
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <div className="p-6">
                  <div className="space-y-7 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-4"
                      >
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        )}
                        <span
                          className={`text-sm font-medium ${
                            feature.included ? 'text-gray-900' : 'text-gray-500'
                          }`}
                        >
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="flex justify-center">
                    <Button
                      variant="outline"
                      className={`max-w-[244px] mx-auto ${plan.buttonColor} ${plan.buttonColor} !rounded-3xl px-16 py-6 text-blue-300`}
                    >
                      Choose Package
                    </Button>
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

export default PricingList;
