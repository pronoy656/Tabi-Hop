import React, { useState, useRef } from 'react';

import { Input } from '../../../components/ui/input';
import { Textarea } from '../../../components/ui/textarea';
import Select from '../../../components/ui/select';

const StoryShareForm = () => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState([]);
  const inputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const droppedFiles = Array.from(e.dataTransfer.files).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setFiles(droppedFiles);
  };

  const handleChange = (e) => {
    const selectedFiles = Array.from(e.target.files).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setFiles(selectedFiles);
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Files submitted:', files);
  };

  const UploadIcon = () => (
    <svg
      className="w-8 h-8 text-[#2D6BFF]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
      />
    </svg>
  );
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Tell us your travel stories
          </h1>
          <p className="text-xl font-medium text-gray-800 max-w-3xl mx-auto">
            Want to share your travel stories & earn points? Send it over
            through the contact form
          </p>
        </div>

        {/* Form Section */}
        {/* <Form></Form> */}
        <div className="bg-white rounded-xl  p-8 sm:p-12">
          {/* File Upload Area */}
          <div
            className={`border-2 border-dashed rounded-xl p-12 mb-8 text-center transition-colors ${
              dragActive
                ? 'border-blue-400 bg-blue-50'
                : 'border-gray-400 bg-gray-50'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={handleClick}
          >
            <input
              ref={inputRef}
              type="file"
              multiple
              accept="image/*,video/*"
              className="hidden"
              onChange={handleChange}
            />
            <div className="flex flex-col items-center">
              {files.length === 0 && (
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <UploadIcon />
                </div>
              )}

              {files.length === 0 ? (
                <p className="text-gray-600">
                  Drag & Drop files here or click to upload
                </p>
              ) : (
                <>
                  {/* Full-width preview for the first image */}
                  {files[0] && files[0].file.type.startsWith('image') && (
                    <div className="w-full h-[400px] flex items-center justify-center mb-4 relative">
                      <img
                        src={files[0].preview}
                        alt={files[0].file.name}
                        className="w-full h-full object-cover rounded-lg absolute top-0 left-0"
                        style={{ zIndex: 1 }}
                      />
                    </div>
                  )}
                  {/* Full-width preview for the first video */}
                  {files[0] && files[0].file.type.startsWith('video') && (
                    <div className="w-full h-[400px] flex items-center justify-center mb-4 relative">
                      <video
                        src={files[0].preview}
                        controls
                        className="w-full h-full object-cover rounded-lg absolute top-0 left-0"
                        style={{ zIndex: 1 }}
                      />
                    </div>
                  )}
                  {/* Thumbnails for the rest of the files */}
                  {files.length > 1 && (
                    <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                      {files.slice(1).map((fileObj, index) => {
                        const { file, preview } = fileObj;
                        if (file.type.startsWith('image')) {
                          return (
                            <img
                              key={index}
                              src={preview}
                              alt={file.name}
                              className="mx-auto max-h-40 rounded-lg object-contain"
                            />
                          );
                        } else if (file.type.startsWith('video')) {
                          return (
                            <video
                              key={index}
                              src={preview}
                              controls
                              className="w-full h-32 object-cover rounded-lg"
                            />
                          );
                        } else {
                          return (
                            <p key={index} className="text-gray-700">
                              {file.name}
                            </p>
                          );
                        }
                      })}
                    </div>
                  )}
                </>
              )}

              {files.length === 0 && (
                <p className="text-gray-600 font-medium text-sm">
                  MP4, MOV up to 500MB
                </p>
              )}
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Story Title */}
            <div>
              <label
                htmlFor="story-title"
                className="block font-medium text-gray-700 mb-2"
              >
                Story Title
              </label>
              <Input
                id="story-title"
                type="text"
                placeholder="Enter your story title"
                className="w-full h-12 px-4 border border-[#888] rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              />
            </div>

            {/* Location */}
            <div>
              <label
                htmlFor="location"
                className="block text-gray-700 mb-2 font-medium"
              >
                Location
              </label>
              <Select
                placeholder="Where was this story set?"
                options={[
                  { value: 'japan', label: 'Japan' },
                  { value: 'thailand', label: 'Thailand' },
                  { value: 'vietnam', label: 'Vietnam' },
                  { value: 'korea', label: 'South Korea' },
                  { value: 'singapore', label: 'Singapore' },
                  { value: 'malaysia', label: 'Malaysia' },
                  { value: 'philippines', label: 'Philippines' },
                  { value: 'indonesia', label: 'Indonesia' },
                  { value: 'other', label: 'Other' },
                ]}
                className="w-full h-12 px-4 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              ></Select>
            </div>
          </div>

          {/* Brief Description */}
          <div className="mb-8">
            <label
              htmlFor="description"
              className="block font-medium text-gray-700 mb-2"
            >
              Brief Description
            </label>
            <Textarea
              id="description"
              placeholder="Share a brief description of your story......"
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="max-w-xl mx-auto">
            <button
              onClick={handleSubmit}
              type="submit"
              className="w-full bg-[#6E67D6] outline outline-[#6B5DE0] text-white py-4 font-medium rounded-md 
             transition-colors duration-300 ease-in-out 
             hover:bg-[#5546e2] hover:text-white"
            >
              Share Your Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryShareForm;
