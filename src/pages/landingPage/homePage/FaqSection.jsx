import React from 'react';
import Card, { CardContent } from '../../../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../components/ui/accordion';
const FaqSection = () => {
  return (
    <div className="max-w-5xl md:py-16 sm:py-20 lg:py-24 mx-auto px-4 sm:px-6 lg:px-0">
      {/* Header */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-gray-900 mb-4 sm:mb-6 md:mb-8 leading-8">
        Frequently asked questions
      </h1>
      <h2 className="text-md sm:text-xl md:text-2xl font-normal text-center text-gray-900 mb-8 sm:mb-10 leading-relaxed">
        Everything you need to know about Tapihop
      </h2>

      {/* FAQ Section */}
      <div className="space-y-4 sm:space-y-6 md:space-y-8">
        <Card className="border-none shadow-sm bg-white">
          <CardContent className="p-0">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-0">
                <AccordionTrigger className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-left text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 hover:no-underline hover:bg-gray-50 transition-colors">
                  How to create your first itinerary
                </AccordionTrigger>
                <AccordionContent className="px-4 sm:px-6 md:px-8 pb-3 sm:pb-4 font-medium text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm bg-white">
          <CardContent className="p-0">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-2" className="border-0">
                <AccordionTrigger className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-left text-lg sm:text-xl md:text-2xl font-medium text-gray-900 hover:no-underline hover:bg-gray-50 transition-colors">
                  Account/ Billing related questions
                </AccordionTrigger>
                <AccordionContent className="px-4 sm:px-6 md:px-8 pb-3 sm:pb-4 font-medium text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm bg-white">
          <CardContent className="p-0">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-3" className="border-0">
                <AccordionTrigger className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-left text-lg sm:text-xl md:text-2xl font-medium text-gray-900 hover:no-underline hover:bg-gray-50 transition-colors">
                  Create a new user profile with a different travel style
                </AccordionTrigger>
                <AccordionContent className="px-4 sm:px-6 md:px-8 pb-3 sm:pb-4 font-medium text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FaqSection;
