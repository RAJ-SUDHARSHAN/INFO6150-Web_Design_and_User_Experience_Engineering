import React from "react";
import { useState } from "react";
import "../css/Carousel.css";

function Carousel({ className, altField, images }) {
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
                    className={className}
                    src={images[`image${imageIndex}`]}
                    alt={altField}
                />
            )}
            <button className="carousel__button" onClick={goToNext}>
                &gt;
            </button>
        </div>
    );
}
export default Carousel;
