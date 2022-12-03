import Carousel from './Carousel';

function Phone({title, images, screen_size, camera, processor, ram, battery, preorderOnClick}) {
    return (
        <div className="phones__card-content">
                <h3 className="phones__card-content-heading">{title}</h3>
                <Carousel images={images} />
                <p className="phones__card-content-text">
                    Screen Size: {screen_size} <br />
                    Camera: {camera} <br />
                    Processor: {processor} <br />
                    Ram: {ram} <br />
                    Battery: {battery} <br />
                </p>
                <button type="button" className="phones__card-content-preorder" onClick={preorderOnClick}> <span className='preorder__text'> Pre Order </span></button>
            </div>
    )
}

export default Phone;