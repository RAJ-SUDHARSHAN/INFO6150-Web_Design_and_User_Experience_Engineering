import '../css/Main.css' 
import Home from './Home'
import About from './About'
import Cats from './Cats'


function Main({page, onNav}) {

    return (
        <main>
            {page === 'Home' && <Home />}
            {page === 'About' && <About />}
            {page === 'Cats' && <Cats onNav={onNav}/>}
        </main>
    );
}

export default Main;