import "../css/Cards.css";
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
        <div className="card-content">
            <h3 className="card-content-heading">{title}</h3>
            <Carousel className={"card-content-pic"} altField={"Laptop Gallery"} images={images} />
            <p className="card-content-text">
                Retail Price: {price} <br />
                Screen Size: {screen_size} <br />
                Webcam: {camera} <br />
                Processor: {processor} <br />
                Ram: {ram} <br />
                Battery: {battery} <br />
            </p>
            <button
                type="button"
                className="card-content-preorder"
                onClick={preorderOnClick}
            >
                {" "}
                <span className="preorder__text"> Pre Order </span>
            </button>
        </div>
    );
}

export default Laptop;
