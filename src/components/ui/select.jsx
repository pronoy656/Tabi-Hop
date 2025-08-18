import React, { useState } from 'react';

const Select = ({
  options = [],
  placeholder = 'Select an option',
  className = '',
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelect = (option) => {
    setSelectedValue(option.label);
    setIsOpen(false);
    if (onChange) {
      onChange(option.value);
    }
  };

  const ChevronDownIcon = () => (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );

  return (
    <div className="relative">
      <button
        type="button"
        className={`flex items-center justify-between w-full text-left ${className}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={selectedValue ? 'text-gray-900' : 'text-gray-500'}>
          {selectedValue || placeholder}
        </span>
        <ChevronDownIcon />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
