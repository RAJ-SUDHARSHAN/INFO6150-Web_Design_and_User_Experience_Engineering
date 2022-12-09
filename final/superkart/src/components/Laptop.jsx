import "../css/Laptop.css";
import Carousel from "./Carousel";

function Laptop({
    title,
    images,
    price,
    screen_size,
    camera,
    processor,
    ram,
    battery,
    preorderOnClick,
}) {
    return (
        <div className="laptop__card-content">
            <h3 className="laptop__card-content-heading">{title}</h3>
            <Carousel className={"laptop__card-content-pic"} altField={"Laptop Gallery"} images={images} />
            <p className="laptop__card-content-text">
                Retail Price: {price} <br />
                Screen Size: {screen_size} <br />
                Webcam: {camera} <br />
                Processor: {processor} <br />
                Ram: {ram} <br />
                Battery: {battery} <br />
            </p>
            <button
                type="button"
                className="laptop__card-content-preorder"
                onClick={preorderOnClick}
            >
                {" "}
                <span className="preorder__text"> Pre Order </span>
            </button>
        </div>
    );
}

export default Laptop;
