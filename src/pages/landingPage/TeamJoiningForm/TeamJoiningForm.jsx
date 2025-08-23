import React, { useState, useRef } from 'react';
import {
  Upload,
  Brain,
  Palette,
  Code,
  TrendingUp,
  Link as LinkIcon,
} from 'lucide-react';

const jobCategories = [
  {
    title: 'AI Research & Development',
    icon: Brain,
    color: 'text-[#6B5DE0]',
    bgColor: 'bg-purple-50',
    positions: ['Research Engineer', 'Computer Vision'],
  },
  {
    title: 'Design',
    icon: Palette,
    color: 'text-[#6B5DE0]',
    bgColor: 'bg-purple-50',
    positions: ['Senior Product Designer (Growth)'],
  },
  {
    title: 'Engineering',
    icon: Code,
    color: 'text-[#6B5DE0]',
    bgColor: 'bg-purple-50',
    positions: [
      'AI Infrastructure Engineer',
      'Backend Engineer',
      'Frontend Software Engineer',
      'Fullstack Software Engineer',
      'Software Engineer, Cloud Infrastructure',
      'Software Engineer, Dev Productivity',
      'Software Engineer, University Graduate',
    ],
  },
  {
    title: 'Marketing',
    icon: TrendingUp,
    color: 'text-[#6B5DE0]',
    bgColor: 'bg-purple-50',
    positions: [
      'Customer Marketer',
      'Video Editor',
      'Customer Service Support',
    ],
  },
];

const TeamJoiningForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    position: '',
    portfolioLink: '',
    aboutYourself: '',
  });
  const fileInputRef = useRef(null); // Reference for file input

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  //file upload handling
  const handleButtonClick = () => {
    fileInputRef.current.click(); // open file picker
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        // 10MB limit
        alert('File size exceeds 10MB limit');
        return;
      }
      setFormData((prev) => ({ ...prev, resumeFile: file }));
      console.log('Selected file:', file.name);
    }
  };

  // Form submission handling
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold text-gray-900 mb-5">
            Want to join <span className="text-[#6B5DE0]">the team?</span>
          </h1>
          <p className="text-xl lg:text-2xl font-medium">
            Join us in creating extraordinary travel experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Job Categories */}
          <div className="lg:col-span-1 space-y-4">
            {jobCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${category.bgColor}`}>
                      <IconComponent className={`w-5 h-5 ${category.color}`} />
                    </div>
                    <h3 className="font-semibold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {category.positions.map((position, posIndex) => (
                      <li
                        key={posIndex}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                        {position}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Right Form Section */}
          <div className="lg:col-span-2">
            <div className="p-8 bg-white border border-gray-200 shadow-sm rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange('fullName', e.target.value)
                      }
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-[#6B5DE0] focus:border-2 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange('email', e.target.value)
                      }
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-[#6B5DE0] focus:border-2 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Position Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Positions You're Interested In
                  </label>
                  <select
                    value={formData.position}
                    onChange={(e) =>
                      handleInputChange('position', e.target.value)
                    }
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-[#6B5DE0] focus:border-2 focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Select a position</option>
                    {jobCategories.map((category) =>
                      category.positions.map((position, index) => (
                        <option
                          key={`${category.title}-${index}`}
                          value={position}
                        >
                          {position}
                        </option>
                      ))
                    )}
                  </select>
                </div>

                {/* Upload Resume */}
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={handleButtonClick}
                    className="flex items-center gap-2 text-[#6B5DE0] border border-purple-200 hover:bg-purple-50 bg-transparent px-4 py-2 rounded-md"
                  >
                    <Upload className="w-4 h-4" />
                    Upload Resume
                  </button>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    PDF, DOC up to 10MB
                  </p>
                </div>

                {/* Portfolio Link */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Portfolio Link (Optional)
                  </label>
                  <div className="relative">
                    <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="url"
                      placeholder="https://your-portfolio.com"
                      value={formData.portfolioLink}
                      onChange={(e) =>
                        handleInputChange('portfolioLink', e.target.value)
                      }
                      className="pl-10 w-full border border-gray-300 rounded-md px-3 py-2 focus:border-[#6B5DE0] focus:border-2 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Tell Us About Yourself */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell Us About Yourself
                  </label>
                  <textarea
                    placeholder="Share your story, experience, and why you'd like to join our team..."
                    value={formData.aboutYourself}
                    onChange={(e) =>
                      handleInputChange('aboutYourself', e.target.value)
                    }
                    className="w-full min-h-[120px] resize-none border border-gray-300 rounded-md px-3 py-2 focus:border-[#6B5DE0] focus:border-2 focus:outline-none transition-colors duration-300"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className=" max-w-xs mx-auto outline outline-[#6B5DE0] text-black py-3 px-4 text-base font-medium rounded-md
             transition-colors duration-300 ease-in-out 
             hover:bg-[#6B5DE0] hover:text-white"
                  >
                    ▶ Start Your Journey With Us
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamJoiningForm;
