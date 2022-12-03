import '../css/Laptop.css'

function Laptop({ onNav }) {
    return (
        <div className="cats__cards">
            <div className="cats__card-content">
                <h3 className="cats__card-content-heading">Jorts</h3>
                <img className="cats__card-content-pic" src="http://placekitten.com/300/300?image=7" alt="Card1 Cat" />
                <p className="cats__card-content-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
                    laudantium!</p>
                <p> <button type="button" className="cats__card-content-subscribe" onClick={onNav} data-target="Home">Click here</button>
                    to go to Homepage
                </p>
            </div>
            <div className="cats__card-content">
                <h3 className="cats__card-content-heading">Jean</h3>
                <img className="cats__card-content-pic" src="http://placekitten.com/300/300?image=8" alt="Card2 Cat" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, quaerat.</p>
                <p> <button type="button" className="cats__card-content-subscribe" onClick={onNav} data-target="Home">Click here</button>
                    to go to Homepage
                </p>
            </div>
            <div className="cats__card-content">
                <h3 className="cats__card-content-heading">Maru</h3>
                <img className="cats__card-content-pic" src="http://placekitten.com/300/300?image=9" alt="Card3 Cat" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, corrupti!</p>
                <p> <button type="button" className="cats__card-content-subscribe" onClick={onNav} data-target="Home">Click here</button>
                    to go to Homepage
                </p>
            </div>
            <div className="cats__card-content">
                <h3 className="cats__card-content-heading">Nyancat</h3>
                <img className="cats__card-content-pic" src="http://placekitten.com/300/300?image=10" alt="Card4 Cat" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, sed?</p>
                <p> <button type="button" className="cats__card-content-subscribe" onClick={onNav} data-target="Home">Click here</button>
                    to go to Homepage
                </p>
            </div>
            <div className="cats__card-content">
                <h3 className="cats__card-content-heading">Grumpy Cat</h3>
                <img className="cats__card-content-pic" src="http://placekitten.com/300/300?image=6" alt="Card5 Cat" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, numquam?</p>
                <p> <button type="button" className="cats__card-content-subscribe" onClick={onNav} data-target="Home">Click here</button>
                    to go to Homepage
                </p>
            </div>
            <div className="cats__card-content">
                <h3 className="cats__card-content-heading">Lil Bub</h3>
                <img className="cats__card-content-pic" src="http://placekitten.com/300/300?image=7" alt="Card6 Cat" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, obcaecati.</p>
                <p> <button type="button" className="cats__card-content-subscribe" onClick={onNav} data-target="Home">Click here</button>
                    to go to Homepage
                </p>
            </div>
        </div>
    );
}

export default Laptop;