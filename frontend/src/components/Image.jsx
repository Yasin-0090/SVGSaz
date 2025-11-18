import React from "react";

const Image = ({add_image}) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 151, 16, 16, 6, 61, 3, 43, 3,
        4, 3, 3, 3, 6, 6,
      ].map((img, i) => (
        <div
          key={i}
          onClick={()=>add_image('https://github.com/Yasin-0090/SVGSaz/blob/main/frontend/public/project.jpg?raw=true')}
          className="w-full h-[90px] overflow-hidden rounded-sm cursor-pointer"
        >
          <img
            className="w-full h-full object-fill"
            src={`https://github.com/Yasin-0090/SVGSaz/blob/main/frontend/public/project.jpg?raw=true`}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default Image;
