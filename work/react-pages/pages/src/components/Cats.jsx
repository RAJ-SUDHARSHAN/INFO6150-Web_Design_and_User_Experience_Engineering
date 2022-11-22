import '../css/Cats.css'

function Cats({ onNav }) {
    return (
        <div className="cats__cards">
            <div className="cats__card-content">
                <h3 className="cats__card-content-heading">Jorts</h3>
                <img className="cats__card-content-pic" src="http://placekitten.com/300/300" alt="Card1 Cat image" />
                <p className="cats__card-content-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
                    laudantium!</p>
                <p> <button type="button" className="cats__card-content-subscribe" onClick={onNav} data-target="Home">Click here</button>
                    to go to Homepage
                </p>
            </div>
            <div className="cats__card-content">
                <h3 className="cats__card-content-heading">Jean</h3>
                <img className="cats__card-content-pic" src="http://placekitten.com/300/300" alt="Card2 Cat image" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, quaerat.</p>
                <p>Lorem ipsum dolor
                    <button type="button" className="cats__card-content-subscribe" href="home.html">Subscribe</button>
                    amet consectetur.</p>
            </div>
            <div className="cats__card-content">
                <h3 className="cats__card-content-heading">Maru</h3>
                <img className="cats__card-content-pic" src="http://placekitten.com/300/300" alt="Card3 Cat image" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, corrupti!</p>
                <p>Lorem ipsum dolor
                    <button type="button" className="cats__card-content-subscribe" href="home.html">Subscribe</button>
                    amet consectetur.</p>
            </div>
            <div className="cats__card-content">
                <h3 className="cats__card-content-heading">Nyancat</h3>
                <img className="cats__card-content-pic" src="http://placekitten.com/300/300" alt="Card4 Cat image" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, sed?</p>
                <p>Lorem ipsum dolor
                    <button type="button" className="cats__card-content-subscribe" href="home.html">Subscribe</button>
                    amet consectetur.</p>
            </div>
            <div className="cats__card-content">
                <h3 className="cats__card-content-heading">Grumpy Cat</h3>
                <img className="cats__card-content-pic" src="http://placekitten.com/300/300" alt="Card5 Cat image" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, numquam?</p>
                <p>Lorem ipsum dolor
                    <button type="button" className="cats__card-content-subscribe" href="home.html">Subscribe</button>
                    amet consectetur.</p>
            </div>
            <div className="cats__card-content">
                <h3 className="cats__card-content-heading">Lil Bub</h3>
                <img className="cats__card-content-pic" src="http://placekitten.com/300/300" alt="Card6 Cat image" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, obcaecati.</p>
                <p>Lorem ipsum dolor
                    <button type="button" className="cats__card-content-subscribe" href="home.html">Subscribe</button>
                    amet consectetur.</p>
            </div>
        </div>
    );
}

export default Cats;