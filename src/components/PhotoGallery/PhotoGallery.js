import { useEffect, useState } from "react";
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";


function PhotoGallery() {
  const [current, setCurrent] = useState(0);
  const photos = [pic1, pic2, pic3];

  const next = () => {
    setCurrent((current) => (current + 1) % photos.length);
  };

  const previous = () => {
    setCurrent((current) => (current - 1 + photos.length) % photos.length);
  };

  return (
    <div>
      <div>
        <button onClick={previous}>previous</button>
        <img src={photos[current] } style={{height:"500px",width: "370px",paddingLeft:"35%", paddingBottom:"10%"}} />
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
}

export default PhotoGallery;
