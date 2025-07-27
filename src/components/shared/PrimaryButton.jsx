const PrimaryButton = ({ text, bgColor, textColor = "black" }) => {
  return (
    <button
      className={`inline-block h-10 whitespace-nowrap sm:font-semibold text-center rounded-full px-6 py-2 shadow-md text-xs md:text-sm hover:opacity-90 transition duration-300`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      + {text}
    </button>
  );
};

export default PrimaryButton;
