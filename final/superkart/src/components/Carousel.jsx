import React from "react";
import { useState } from "react";
import "../css/Carousel.css";

function Carousel({ images }) {
    const [imageIndex, setImageIndex] = useState(1);

    const maxIndex = 3;
    const nextIndex = imageIndex === maxIndex ? 1 : imageIndex + 1;
    const prevIndex = imageIndex === 1 ? maxIndex : imageIndex - 1;

    const goToNext = () => {
        setImageIndex(nextIndex);
    };

    const goToPrev = () => {
        setImageIndex(prevIndex);
    };

    return (
        <div className="carousel">
            <button className="carousel__button" onClick={goToPrev}>
                &lt;
            </button>
            {images && (
                <img
                    className="phone__card-content-pic"
                    src={images[`image${imageIndex}`]}
                    alt="iphone 14 pro"
                />
            )}
            <button className="carousel__button" onClick={goToNext}>
                &gt;
            </button>
        </div>
    );
}
export default Carousel;
