import { useState } from "react";
import "../css/Cards.css";
import Modal from "./Modal";
import Phone from "./Phone";

import {
  iphone14ProImages,
  iphone13Images,
  googlePixel6ProImages,
  googlePixel7Images,
  oneplus10TImages,
  samsungS22UltraImages,
} from "../data/imageData";

function Phones() {
  const [showModal, setShowModal] = useState(false);

  const preorderOnClick = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="cards">
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Phone
        price="$999"
        title="Iphone 14 Pro"
        images={iphone14ProImages}
        screen_size='6.1"'
        camera="48MP"
        processor="A16 Bionic"
        ram="6GB"
        battery="3200mAh"
        preorderOnClick={preorderOnClick}
      ></Phone>
      <Phone
        price="$829"
        title="Iphone 13"
        images={iphone13Images}
        screen_size='6.1"'
        camera="48MP"
        processor="A16 Bionic"
        ram="6GB"
        battery="3200mAh"
        preorderOnClick={preorderOnClick}
      ></Phone>
      <Phone
        price="$599"
        title="OnePlus 10T"
        images={oneplus10TImages}
        screen_size='6.1"'
        camera="48MP"
        processor="A16 Bionic"
        ram="6GB"
        battery="3200mAh"
        preorderOnClick={preorderOnClick}
      ></Phone>
      <Phone
        price="$1199"
        title="Samsung S22 Ultra"
        images={samsungS22UltraImages}
        screen_size='6.1"'
        camera="48MP"
        processor="A16 Bionic"
        ram="6GB"
        battery="3200mAh"
        preorderOnClick={preorderOnClick}
      ></Phone>
      <Phone
        price="$899"
        title="Google Pixel 6 Pro"
        images={googlePixel6ProImages}
        screen_size='6.1"'
        camera="48MP"
        processor="A16 Bionic"
        ram="6GB"
        battery="3200mAh"
        preorderOnClick={preorderOnClick}
      ></Phone>
      <Phone
        price="$599"
        title="Google Pixel 7"
        images={googlePixel7Images}
        screen_size='6.1"'
        camera="48MP"
        processor="A16 Bionic"
        ram="6GB"
        battery="3200mAh"
        preorderOnClick={preorderOnClick}
      ></Phone>
    </div>
  );
}

export default Phones;
