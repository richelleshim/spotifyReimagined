import React from "react";
import { hightlightsSlides } from "../constants";

const PhotoGrid = () => {
  return (


      <div
        className="items-center justify-center flex-center lg:ml-40 md:ml-30 sm:ml-20 ml-10"
        style={{ width: "80%", height: "auto" }}
      >
        <div className="grid grid-cols-4 gap-10">
          {hightlightsSlides.map((currentPage) => (
            <div key={currentPage.id} className="relative gap-2">
              <img
                src={currentPage.page}
                alt={`Slide ${currentPage.id}`}
                style={{ width: "80%", height: "auto" }} // Ensures images fit within the grid cells
              />
            </div>
          ))}
        </div>
      </div>
    
  );
};

export default PhotoGrid;
