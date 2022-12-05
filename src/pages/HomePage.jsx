import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { GET_ALL_BEERS } from '../config';
import Controls from '../components/Controls/Controls';
import List from '../components/List/List';
import Card from '../components/Card/Card';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ beers, setBeers }) => {
  const [filtredBeers, setFiltredBeers] = useState(beers);

  const handleSearch = (search, region) => {
    let data = [...beers];

    // if (region) {
    //   data = data.filter((b) => b.region.includes(region));
    // }

    if (search) {
      data = data.filter((b) => b.name.toLowerCase().includes(search.toLowerCase()));
    }

    setFiltredBeers(data);
  };

  const navigate = useNavigate();

  useEffect(() => {
    try {
      if (!beers.length) {
        axios.get(GET_ALL_BEERS).then(({ data }) => setBeers(data));
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [beers]);

  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filtredBeers.map((b) => {
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

          return <Card key={b.name} onClick={() => navigate(`/beer/${b.name}`)} {...beerInfo} />;
        })}
      </List>
    </>
  );
};

export default HomePage;
