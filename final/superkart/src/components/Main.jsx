import "../css/Main.css";
import Phones from "./Phones";
import Laptops from "./Laptops";
import Cameras from "./Cameras";
import FAQ from "./FAQ";

function Main({ page, onNav, mainId }) {
    return (
        <main id={mainId}>
            {page === "P H O N E" && <Phones onNav={onNav} />}
            {page === "L A P T O P" && <Laptops onNav={onNav} />}
            {page === "C A M E R A" && <Cameras onNav={onNav} />}
            {page === "FAQ" && <FAQ />}
        </main>
    );
}

export default Main;
