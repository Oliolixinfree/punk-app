import Header from './components/Header/Header';
import Main from './components/Main/Main';

import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Details from './pages/Details';
import NotFound from './pages/NotFound';
import { useState } from 'react';

function App() {
  const [beers, setBeers] = useState([]);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage beers={beers} setBeers={setBeers} />} />
          <Route path="/beer/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
