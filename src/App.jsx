import Controls from './components/Controls/Controls';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { GET_ALL_BEERS } from './config';
import List from './components/List/List';
import Card from './components/Card/Card';

function App() {
  const [beers, setBeers] = useState([]);

  console.log(beers);

  useEffect(() => {
    axios.get(GET_ALL_BEERS).then(({ data }) => setBeers(data));
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Controls />
        <List>
          {beers.map((b) => {
            const beerInfo = {
              img: b.image_url,
              name: b.name,
              // description: b.description,
              tagline: b.tagline,
              // abv: b.abv,
              // ibu: b.ibu,
              // ebc: b.ebc,
              info: [
                {
                  title: 'ABV',
                  description: b.abv,
                },
                {
                  title: 'IBU',
                  description: b.ibu,
                },
                {
                  title: 'EBC',
                  description: b.ebc,
                },
              ],
            };

            return <Card key={b.name} {...beerInfo} />;
          })}
        </List>
      </Main>
    </>
  );
}

export default App;
