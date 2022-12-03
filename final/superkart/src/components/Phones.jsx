import { useState } from 'react';
import '../css/Phones.css'
import Modal from './Modal';
import Carousel from './Carousel';
import Phone from './Phone';

import {iphone14ProImages, iphone13Images, googlePixel6ProImages, googlePixel7Images, oneplus10TImages, samsungS22UltraImages} from '../data/imageData'

function Phones({ onNav }) {
    const [showModal, setShowModal] = useState(false)

    const preorderOnClick = () => { setShowModal(!showModal) }

    return (
        <div className="phones__cards">
            <Modal showModal={showModal} setShowModal={setShowModal}/>
            <Phone title="Iphone 14 Pro" images={iphone14ProImages} screen_size='6.1"' camera="48MP" processor="A16 Bionic" ram="6GB" battery="3200mAh" preorderOnClick={preorderOnClick}></Phone>
            {/* <div className="phones__card-content">
                <h3 className="phones__card-content-heading">Iphone 14 Pro</h3>
                <Carousel iphone14ProImages={iphone14ProImages} />
                <p className="phones__card-content-text">
                    Screen Size: 6.1" <br />
                    Camera: 48MP <br />
                    Processor: A16 Bionic <br />
                    Ram: 6GB <br />
                    Battery: 3200mAh <br />
                </p>
                <button type="button" className="phones__card-content-preorder" onClick={() => { setShowModal(!showModal) }}> <span className='preorder__text'> Pre Order </span></button>

            </div> */}
            <div className="phones__card-content">
                <h3 className="phones__card-content-heading">Iphone 13</h3>
                {/* <img className="phones__card-content-pic" src={require("../images/Iphone_13_1.jpg")} alt="Card2 Cat" /> */}
                <Carousel iphone13Images={iphone13Images} />
                <p className="phones__card-content-text">
                    Screen Size: 6.1" <br />
                    Camera: 48MP <br />
                    Processor: A16 Bionic <br />
                    Ram: 6GB <br />
                    Battery: 3200mAh <br />
                </p>
                <button type="button" className="phones__card-content-preorder" onClick={() => { setShowModal(!showModal) }}> <span className='preorder__text'> Pre Order </span></button>

            </div>
            <div className="phones__card-content">
                <h3 className="phones__card-content-heading">OnePlus 10T</h3>
                {/* <img className="phones__card-content-pic" src={require("../images/Oneplus_10T_1.jpg")} alt="Card3 Cat" /> */}
                <Carousel iphone14ProImages={iphone14ProImages} />
                <p className="phones__card-content-text">
                    Screen Size: 6.1" <br />
                    Camera: 48MP <br />
                    Processor: A16 Bionic <br />
                    Ram: 6GB <br />
                    Battery: 3200mAh <br />
                </p>
                <button type="button" className="phones__card-content-preorder" onClick={() => { setShowModal(!showModal) }}> <span className='preorder__text'> Pre Order </span></button>

            </div>
            <div className="phones__card-content">
                <h3 className="phones__card-content-heading">Samsung S22 Ultra</h3>
                {/* <img className="phones__card-content-pic" src={require("../images/Samsung_S22_Ultra_1.jpg")} alt="Card4 Cat" /> */}
                <Carousel iphone14ProImages={iphone14ProImages} />
                <p className="phones__card-content-text">
                    Screen Size: 6.1" <br />
                    Camera: 48MP <br />
                    Processor: A16 Bionic <br />
                    Ram: 6GB <br />
                    Battery: 3200mAh <br />
                </p>
                <button type="button" className="phones__card-content-preorder" onClick={() => { setShowModal(!showModal) }}> <span className='preorder__text'> Pre Order </span></button>

            </div>
            <div className="phones__card-content">
                <h3 className="phones__card-content-heading">Google Pixel 6 Pro</h3>
                {/* <img className="phones__card-content-pic" src={require("../images/Google_Pixle_6_Pro_1.jpg")} alt="Card5 Cat" /> */}
                <Carousel iphone14ProImages={iphone14ProImages} />
                <p className="phones__card-content-text">
                    Screen Size: 6.1" <br />
                    Camera: 48MP <br />
                    Processor: A16 Bionic <br />
                    Ram: 6GB <br />
                    Battery: 3200mAh <br />
                </p>
                <button type="button" className="phones__card-content-preorder" onClick={() => { setShowModal(!showModal) }}> <span className='preorder__text'> Pre Order </span></button>

            </div>
            <div className="phones__card-content">
                <h3 className="phones__card-content-heading">Google Pixel 7</h3>
                {/* <img className="phones__card-content-pic" src={require("../images/Google_Pixel_7_1.jpg")} alt="Card6 Cat" /> */}
                <Carousel iphone14ProImages={iphone14ProImages} />
                <p className="phones__card-content-text">
                    Screen Size: 6.1" <br />
                    Camera: 48MP <br />
                    Processor: A16 Bionic <br />
                    Ram: 6GB <br />
                    Battery: 3200mAh <br />
                </p>
                <button type="button" className="phones__card-content-preorder" onClick={() => { setShowModal(!showModal) }}> <span className='preorder__text'> Pre Order </span></button>

            </div>
        </div>

    );
}

export default Phones;