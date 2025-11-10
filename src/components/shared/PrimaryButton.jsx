import PlusSVG from '../../../public/ruhulo-images/PlusSVG';

const PrimaryButton = ({ text, round = false }) => {
  return (
    <button
      className={`inline-block h-10 whitespace-nowrap sm:font-medium text-center  px-6 py-2 shadow-md text-base hover:opacity-90 transition duration-300 ${
        (round && 'rounded-lg') || 'rounded-full'
      }`}
      style={{
        backgroundColor: '#4ABBC6',
        color: '#FFFFFF',
      }}
    >
      <span className="flex items-center">
        <PlusSVG strokeColor={'#FFFFFF'}></PlusSVG> {text}{' '}
      </span>
    </button>
  );
};

export default PrimaryButton;
