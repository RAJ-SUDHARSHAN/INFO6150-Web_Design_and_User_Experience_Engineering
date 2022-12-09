import { useState } from "react";
import "../css/Laptops.css";
import Modal from "./Modal";
import Laptop from "./Laptop";
import {
    macbookProImages,
    macbookAirImages,
    acerChromebookImages,
    hpSpectreImages,
    dellVostroImages,
    asusZenbookImages,
  } from "../data/imageData";

function Laptops() {
    const [showModal, setShowModal] = useState(false);

    const preorderOnClick = () => {
      setShowModal(!showModal);
    };

    
    return (
        <div className="laptop__cards">
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <Laptop
      price="$1299"
          title="Macbook Pro"
          images={macbookProImages}
          screen_size='13.6"'
          camera="1080p"
          processor="M1 chip"
          ram="16GB"
          battery="upto 18hrs"
          preorderOnClick={preorderOnClick}
        ></Laptop>
        <Laptop
        price="$1199"
          title="Macbook Air"
          images={macbookAirImages}
          screen_size='13.6"'
          camera="1080p"
          processor="M2 chip"
          ram="8GB"
          battery="upto 16hrs"
          preorderOnClick={preorderOnClick}
        ></Laptop>
        <Laptop
        price="$1299"
          title="Acer Chromebook"
          images={acerChromebookImages}
          screen_size='16"'
          camera="1080p"
          processor="Intel i7"
          ram="8GB"
          battery="upto 9hrs"
          preorderOnClick={preorderOnClick}
        ></Laptop>
        <Laptop
        price="$1249.9"
          title="Hp Spectre"
          images={hpSpectreImages}
          screen_size='13.5"'
          camera="720p"
          processor="Intel i5"
          ram="6GB"
          battery="upto 10hrs"
          preorderOnClick={preorderOnClick}
        ></Laptop>
        <Laptop
        price="$999"
          title="Dell Vostro"
          images={dellVostroImages}
          screen_size='13.2"'
          camera="1080p"
          processor="Intel i5"
          ram="6GB"
          battery="upto 12hrs"
          preorderOnClick={preorderOnClick}
        ></Laptop>
        <Laptop
        price="$1299"
          title="Asus Zenbook"
          images={asusZenbookImages}
          screen_size='13.3"'
          camera="1080p"
          processor="Intel i7"
          ram="16GB"
          battery="upto 14hrs"
          preorderOnClick={preorderOnClick}
        ></Laptop>
      </div>
    );
}

export default Laptops;






 

