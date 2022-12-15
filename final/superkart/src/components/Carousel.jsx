import React from "react";
import { useState } from "react";
import "../css/Carousel.css";

function Carousel({ className, images }) {
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
            <button className="gg-arrow-left-r carousel__button" onClick={goToPrev}></button>
            {images && (
                <img
                    className={className}
                    src={images[`image${imageIndex}`]}
                    alt={images.alt}
                />
            )}
            <button className="gg-arrow-right-r carousel__button" onClick={goToNext}></button>
        </div>
    );
}
export default Carousel;
