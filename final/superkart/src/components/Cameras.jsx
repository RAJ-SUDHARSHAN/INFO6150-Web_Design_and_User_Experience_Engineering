import { useState } from "react";
import "../css/Cards.css";
import Modal from "./Modal";
import Camera from "./Camera";
import {
  nikonZ6Images,
  cannon600dImages,
  cannon6DImages,
  goProHero8Images,
  pentaxMZ250Images,
  sonyAlpha72Images,
} from "../data/imageData";

function Cameras() {
  const [showModal, setShowModal] = useState(false);

  const preorderOnClick = () => {
    setShowModal(!showModal);
  };


  return (
    <div className="cards">
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Camera
        title="Nikon Z6"
        images={nikonZ6Images}
        retail_price="$2699.95"
        megapixels="24.3"
        aperture_range="f/3.5 - f/22 (wide)"
        camera_format="SLR"
        preorderOnClick={preorderOnClick}
      ></Camera>
      <Camera
        title="Cannon 600D"
        images={cannon600dImages}
        retail_price="$269.99"
        megapixels="18"
        aperture_range="f/3.5 - f/22 (wide)"
        camera_format="SLR"
        preorderOnClick={preorderOnClick}
      ></Camera>
      <Camera
        title="Cannon 6D"
        images={cannon6DImages}
        retail_price="$2300"
        megapixels="20.2"
        aperture_range="f/4 - f/26 (wide)"
        camera_format="DSLR"
        preorderOnClick={preorderOnClick}
      ></Camera>
      <Camera
        title="Go Pro Hero 8"
        images={goProHero8Images}
        retail_price="$499.95"
        megapixels="18"
        aperture_range="f/2"
        camera_format="UHD"
        preorderOnClick={preorderOnClick}
      ></Camera>
      <Camera
        title="Pentax MZ250"
        images={pentaxMZ250Images}
        retail_price="$360"
        megapixels="32"
        aperture_range="f/2.5 - f/18 (wide)"
        camera_format="SD"
        preorderOnClick={preorderOnClick}
      ></Camera>
      <Camera
        title="Sony Alpha 7II"
        images={sonyAlpha72Images}
        retail_price="$899"
        megapixels="24.2"
        aperture_range="f/2.5"
        camera_format="FHD"
        preorderOnClick={preorderOnClick}
      ></Camera>
    </div>
  );
}

export default Cameras;








