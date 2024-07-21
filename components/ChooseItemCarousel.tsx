import backgroundColorSample from "@/data/backgroundColorSample.json";

const ChooseItemCarousel = () => {
  return (
    <div className="flex gap-2 w-full overflow-x-auto">
      {backgroundColorSample.map((item, index) => (
        <div key={index} className={`min-h-16 min-w-16 rounded-lg ${item}`} />
      ))}
    </div>
  );
};

export default ChooseItemCarousel;