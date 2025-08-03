const PrimaryButton = ({ text, bgColor, textColor = "black",round=false }) => {
  return (
    <button
      className={`inline-block h-10 whitespace-nowrap sm:font-medium text-center  px-6 py-2 shadow-md text-base hover:opacity-90 transition duration-300 ${round && "rounded-lg" || "rounded-full" }`}
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
