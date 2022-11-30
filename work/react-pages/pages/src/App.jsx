import './App.css';

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { useState } from 'react';

function App() {
  const [page, setPage] = useState('Home');
  function onNav(event) {
    const target = event.target.dataset.target;
    console.log({target})
    if (target) {
      console.log('click', target)
      event.preventDefault();
      setPage(target)
    }
  }
  return (
    <div className="app">
      <Header onNav={onNav} />
      <Main onNav={onNav} page={page} />
      <Footer />
    </div>
  );
}

export default App;
