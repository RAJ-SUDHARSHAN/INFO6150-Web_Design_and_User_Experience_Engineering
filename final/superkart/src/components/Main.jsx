import "../css/Main.css";
import Phones from "./Phones";
import Laptops from "./Laptops";
import Cameras from "./Cameras";
import FAQ from "./FAQ";

function Main({ page, onNav, mainId }) {
    return (
        <main id={mainId}>
            {page === "Phones" && <Phones onNav={onNav} />}
            {page === "Laptops" && <Laptops onNav={onNav} />}
            {page === "Cameras" && <Cameras onNav={onNav} />}
            {page === "FAQ" && <FAQ />}
        </main>
    );
}

export default Main;
