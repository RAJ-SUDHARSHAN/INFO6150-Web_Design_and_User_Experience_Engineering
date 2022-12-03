import '../css/Main.css' 
import Phones from './Phones'
import Laptop from './Laptop'
import Camera from './Camera'
import FAQ from './FAQ'


function Main({page, onNav, mainId}) {

    return (
        <main id={mainId}>
            {page === 'Phones' && <Phones onNav={onNav}/>}
            {page === 'Laptop' && <Laptop onNav={onNav}/>}
            {page === 'Camera' && <Camera onNav={onNav}/>}
            {page === 'FAQ' && <FAQ />}
        </main>
    );
}

export default Main;