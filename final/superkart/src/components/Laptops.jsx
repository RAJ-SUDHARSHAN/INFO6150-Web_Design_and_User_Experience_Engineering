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
          title="Macbook Pro"
          images={macbookProImages}
          screen_size='13.3"'
          camera="48MP"
          processor="M2 chip"
          ram="16GB"
          battery="6068mAh"
          preorderOnClick={preorderOnClick}
        ></Laptop>
        <Laptop
          title="Macbook Air"
          images={macbookAirImages}
          screen_size='6.1"'
          camera="48MP"
          processor="A16 Bionic"
          ram="6GB"
          battery="4379mAh"
          preorderOnClick={preorderOnClick}
        ></Laptop>
        <Laptop
          title="Acer Chromebook"
          images={acerChromebookImages}
          screen_size='6.1"'
          camera="48MP"
          processor="A16 Bionic"
          ram="6GB"
          battery="3200mAh"
          preorderOnClick={preorderOnClick}
        ></Laptop>
        <Laptop
          title="Hp Spectre"
          images={hpSpectreImages}
          screen_size='6.1"'
          camera="48MP"
          processor="A16 Bionic"
          ram="6GB"
          battery="3200mAh"
          preorderOnClick={preorderOnClick}
        ></Laptop>
        <Laptop
          title="Dell Vostro"
          images={dellVostroImages}
          screen_size='6.1"'
          camera="48MP"
          processor="A16 Bionic"
          ram="6GB"
          battery="3200mAh"
          preorderOnClick={preorderOnClick}
        ></Laptop>
        <Laptop
          title="Asus Zenbook"
          images={asusZenbookImages}
          screen_size='6.1"'
          camera="48MP"
          processor="A16 Bionic"
          ram="6GB"
          battery="3200mAh"
          preorderOnClick={preorderOnClick}
        ></Laptop>
      </div>
    );
}

export default Laptops;






 

