import { useEffect, useState } from "react";
import Image from "../../UI/Image";
import * as request from "../../utils/request";

function Intro() {
  const [images, setImages] = useState({});

  useEffect(() => {
    const fetchImages = async () => {
      const response = await request.get("homeIntroImages");
      setImages(response);
    };

    fetchImages();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 mt-6 xl:px-[3%] gap-0">
      {Object.keys(images).map((key, index) => (
        <Image key={index} to={images[key].to} src={images[key].url} />
      ))}
    </div>
  );
}

export default Intro;
