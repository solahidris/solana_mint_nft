import { useState } from "react";

interface ChooseItemCarouselProps {
  data?: string[]; // Make data optional
  setVariable: (value: string) => void; // Add setVariable prop
}

const ChooseItemCarousel: React.FC<ChooseItemCarouselProps> = ({ data = [], setVariable }) => { // Default to an empty array

  return (
    <div className="flex gap-2 w-full overflow-x-auto hide-scrollbar">
      {data.map((item, index) => (
        <div key={index} onClick={() => setVariable(item)} className={`min-h-16 min-w-16 rounded-lg ${item} cursor-pointer`}>
          {/* <p>{item}</p> */}
        </div>
      ))}
    </div>
  );
};

export default ChooseItemCarousel;