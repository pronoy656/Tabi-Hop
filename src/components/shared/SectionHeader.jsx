const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="mb-4">
      <h2 className="text-2xl font-semibold text-gray-900 mb-1">{title}</h2>
      <p className="text-gray-600 text-base">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
