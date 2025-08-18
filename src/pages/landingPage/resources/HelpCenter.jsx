import { Search } from 'lucide-react';

import { Input } from '../../../components/ui/input';
import Card, { CardContent } from '../../../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../components/ui/accordion';

const HelpCenter = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-8">
          Help Center
        </h1>

        {/* Search Bar */}
        <div className="relative mb-12">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="How can we help you today"
            className="pl-10 py-3 h-12 text-base bg-white rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Announcement Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* New Feature Card */}
          <Card className="border-none shadow-sm bg-white [box-shadow:6px_6px_15px_#DAD2F0]">
            <CardContent className="p-6">
              <div className="border-3 border-[#E66CE5] w-16 mb-4"></div>
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#f0daf0] text-[#E66CE5] border border-purple-200">
                NEW
              </span>

              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-2">
                Introducing our new editing studio!
              </h3>
              <p className="text-sm font-medium text-gray-800 leading-relaxed">
                Experience a whole new way to create and manage your travel
                itineraries with our enhanced editing tools.
              </p>
            </CardContent>
          </Card>

          {/* Beta Feature Card */}
          <Card className="border-none shadow-sm bg-white [box-shadow:6px_6px_15px_#F8D3F4]">
            <CardContent className="p-6">
              <div className="border-3 border-[#6E67D5] w-16 mb-4"></div>
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#e0dff1] text-[#6E67D5] border border-blue-200">
                Beta
              </span>

              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-2">
                Beta Features Released
              </h3>
              <p className="text-sm font-medium text-gray-800 leading-relaxed">
                Try out our latest features in beta testing. Share your feedback
                and help shape the future of travel planning.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="space-y-4">
          <Card className="border-none shadow-sm bg-white ">
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-0">
                  <AccordionTrigger className="px-6 py-4 text-left text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 hover:no-underline hover:bg-gray-50 transition-colors">
                    How to create your first itinerary
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 font-medium text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
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
                  <AccordionTrigger className="px-6 py-4 text-left text-lg sm:text-xl lg:text-2xl  font-medium text-gray-900 hover:no-underline hover:bg-gray-50 transition-colors">
                    Account/ Billing related questions
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 font-medium text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
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
                  <AccordionTrigger className="px-6 py-4 text-left text-lg sm:text-xl lg:text-2xl font-medium text-gray-900 hover:no-underline hover:bg-gray-50 transition-colors">
                    Create a new user profile with a different travel style
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 font-medium text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
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
    </div>
  );
};

export default HelpCenter;
