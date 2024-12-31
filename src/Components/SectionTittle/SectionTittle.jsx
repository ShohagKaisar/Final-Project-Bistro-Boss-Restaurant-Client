

// eslint-disable-next-line react/prop-types
const SectionTittle = ({heading, subHeading}) => {
  return (
    <div className="text-center md:w-4/12 mx-auto my-2">
      <p className="text-yellow-600 text-xl italic">---{subHeading}---</p>
      <p className="text-4xl uppercase border-y-4 py-4 border-emerald-500">{heading}</p>
    </div>
  );
};

export default SectionTittle;