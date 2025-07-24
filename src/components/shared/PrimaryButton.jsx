const PrimaryButton = ({ text, bgColor, textColor = "black" }) => {
  return (
    <button
      className={`font-semibold text-center rounded-full px-4 py-2 shadow-md text-md hover:opacity-90 transition duration-300`}
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

