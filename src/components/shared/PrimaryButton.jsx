const PrimaryButton = ({ text, bgColor }) => {
  return (
    <button
      className={`text-black font-semibold rounded-full px-4 py-2 shadow-md text-sm hover:opacity-90 transition duration-300`}
      style={{ backgroundColor: bgColor }}
    >
      + {text}
    </button>
  );
};

export default PrimaryButton;
