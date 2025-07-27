

const SeconderyButton = ({ text, shadow }) => {
  return (
    <div className="inline-block relative">
      <button
        className="
          bg-white text-black rounded-full
          px-6 py-2 border-[3px] border-black font-semibold relative z-20
          w-[250px]"
        style={{
          boxShadow: `0px 6px 0 0 ${shadow}`,
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default SeconderyButton;
