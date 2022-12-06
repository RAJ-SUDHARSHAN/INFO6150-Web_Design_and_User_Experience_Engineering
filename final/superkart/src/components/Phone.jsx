import "../css/Phone.css";

import Carousel from "./Carousel";

function Phone({
    title,
    images,
    screen_size,
    camera,
    processor,
    ram,
    battery,
    preorderOnClick,
}) {
    return (
        <div className="phone__card-content">
            <h3 className="phone__card-content-heading">{title}</h3>
            <Carousel className={"phone__card-content-pic"} altField={"Phone Gallery"} images={images} />
            <p className="phone__card-content-text">
                Screen Size: {screen_size} <br />
                Camera: {camera} <br />
                Processor: {processor} <br />
                Ram: {ram} <br />
                Battery: {battery} <br />
            </p>
            <button
                type="button"
                className="phone__card-content-preorder"
                onClick={preorderOnClick}
            >
                {" "}
                <span className="preorder__text"> Pre Order </span>
            </button>
        </div>
    );
}

export default Phone;
