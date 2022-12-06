import "../css/Camera.css";
import Carousel from "./Carousel";

function Camera({
    title,
    images,
    retail_price,
    megapixels,
    aperture_range,
    camera_format,
    preorderOnClick,
}) {
    return (
        <div className="camera__card-content">
            <h3 className="camera__card-content-heading">{title}</h3>
            <Carousel className={"camera__card-content-pic"} altField={"Camera Gallery"} images={images} />
            <p className="camera__card-content-text">
                Retail Price: {retail_price} <br />
                MegaPixel: {megapixels} <br />
                Aperture Range: {aperture_range} <br />
                Camera Fromat: {camera_format} <br />
            </p>
            <button
                type="button"
                className="camera__card-content-preorder"
                onClick={preorderOnClick}
            >
                {" "}
                <span className="preorder__text"> Pre Order </span>
            </button>
        </div>
    );
}

export default Camera;
