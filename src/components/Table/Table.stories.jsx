import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { withKnobs, select } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/react';
import themes from '../../utils/themes/utils/keys';
import config from '../../config';
import Table, { TableRow, TableHeader, TableColumn } from './index';
import Button from '../Button';
import TextInput from '../TextInput/TextInput';
import Select, { Option } from '../Select';
import Radio, { RadioItem } from '../Radio';

export default {
  title: 'Table',
  component: Table,
  decorators: [
    jsxDecorator,
    withKnobs,
    withA11y,
    centered,
  ],
};

const data = [
  {
    address1: '201 Waterfront St',
    attire: 'business casual',
    city: 'Oxon Hill',
    genre: 'Steak,American,Contemporary,Seafood,Cafe',
    hours: 'Open Daily 5:30 PM-10:00 PM',
    id: 'f223fdd0-4adc-423e-9747-980a66c256ca',
    lat: '38.782098',
    long: '-77.017492',
    name: 'Old Hickory Steakhouse',
    state: 'MD',
    tags: 'Social,Food and Dining,Restaurants,Steakhouses',
    telephone: '(301) 965-4000',
    website: 'http://www.gaylordnational.com',
    zip: '20745',
  },
  {
    address1: '303 E Main St',
    attire: 'business casual',
    city: 'Aspen',
    genre: 'Japanese,Sushi,Asian,Contemporary,Seafood',
    hours: 'Open Daily 5:30 PM-9:00 PM',
    id: '00b35e1a-82b1-4988-b8b9-6df826db2818',
    lat: '39.190723',
    long: '-106.82031',
    name: 'Matsuhisa',
    state: 'CO',
    tags: 'Social,Food and Dining,Restaurants,Japanese,Social,Food and Dining,Restaurants,Sushi',
    telephone: '(970) 544-6628',
    website: 'http://www.matsuhisaaspen.com',
    zip: '81611',
  },
  {
    address1: '108 3rd St NE',
    attire: 'business casual',
    city: 'Charlottesville',
    genre: 'French,European,Cafe,Continental,American',
    hours: 'Mon-Thu 5:30 PM-9:00 PM; Fri-Sat 5:30 PM-10:00 PM',
    id: '0f41a3d0-0641-4eef-b7fd-706f083cf0d5',
    lat: '38.030526',
    long: '-78.479785',
    name: 'Fleurie Restaurant',
    state: 'VA',
    tags: 'Social,Food and Dining,Restaurants,French',
    telephone: '(434) 971-7800',
    website: 'http://www.fleurierestaurant.com',
    zip: '22902',
  },
  {
    address1: '500 Crescent Ct',
    attire: 'business casual',
    city: 'Dallas',
    genre: 'Steak,American',
    hours: 'Mon-Thu 11:00 AM-10:00 PM; Fri 11:00 AM-11:00 PM; Sat 5:00 PM-11:00 PM; Sun 5:00 PM-9:00 PM',
    id: '0b4bfe46-3e60-4de4-82ba-2dd8e5d46b56',
    lat: '32.794749',
    long: '-96.804099',
    name: 'The Capital Grille',
    state: 'TX',
    tags: 'Social,Food and Dining,Restaurants,Steakhouses,Social,Food and Dining,Restaurants,American',
    telephone: '(214) 303-0500',
    website: 'http://www.thecapitalgrille.com',
    zip: '75201',
  },
];

export const Default = () => {
  // const [restaurants, setRestaurants] = useState(null);

  // async function fetchMovies() {
  //   const response = await fetch('https://code-challenge.spectrumtoolbox.com/api/restaurants', {
  //     headers: {
  //       Authorization: 'Api-Key q3MNxtfep8Gt',
  //     },
  //   })
  //     .then((data) => data.json());
  //     // .then((data) => setRestaurants(data));

  //   setRestaurants(response);
  // }

  // console.log('____restaurants', restaurants);
  
  const [restaurants, setRestaurants] = useState(data);

  restaurants.sort((a, b) => (a.name > b.name) ? 1 : -1 );

  // const genres = [...new Set(restaurants.map((a) => a.genre.split(",")))];

  // create a long string of all possible genres
  const genresString = restaurants.reduce((accumulator, currentValue) => accumulator + currentValue.genre + ',', '');
  // create an array of only unique genres excluding the last because we have a trailing comma
  const genres = [...new Set(genresString.split(',').slice(0, -1))];
  const states = [...new Set(restaurants.map((a) => a.state))];

  const [searchValue, setSearchValue] = useState('');
  const [filter, setFilter] = useState(searchValue);
  const [filteredGenre, setFilteredGenre] = useState('');
  const [filteredState, setFilteredState] = useState('');
  const [themeValue, setThemeValue] = useState('main');

  const renderExtra = (restaurant) => <div>{restaurant.name}</div>;

  // setRestaurants(restaurants
  //   .filter((test) => test.city.toLowerCase().includes(filter.toLowerCase()) || test.name.toLowerCase().includes(filter.toLowerCase()))
  //   .filter((test) => test.genre.includes(filteredGenre))
  //   .filter((test) => test.state.includes(filteredState)));

  const handleClear = () => {
    setFilter('');
    setFilteredGenre('');
    setFilteredState('');
  };

  return (
    // <ThemeProvider theme={{ mode: select('Theme', themes, config.theme.mode) }}></ThemeProvider>
    <ThemeProvider theme={{ mode: themeValue }}>
      <Radio
        value={themeValue}
        name="theme"
        legend="Choose your theme"
        onChange={(e) => setThemeValue(e.target.value)}
      >
        <RadioItem id="light">Light</RadioItem>
        <RadioItem id="main">Default</RadioItem>
        <RadioItem id="dark">Dark</RadioItem>
      </Radio>
      <TextInput
        size="small"
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search..."
        value={searchValue}
      />
      <Button size="small" onClick={() => setFilter(searchValue)}>
        Search
      </Button>
      <Button size="small" invert variant="destructive" onClick={() => handleClear()}>
        Clear
      </Button>
      <Select placeholder="Genre" size="small" name="genres" value={filteredGenre} id="genres" onChange={(e) => setFilteredGenre(e.target.value)}>
        {genres.sort().map((genre) => (
          <Option value={genre}>{genre}</Option>
        ))}
      </Select>
      <Select placeholder="State" size="small" name="states" id="states" value={filteredState} onChange={(e) => setFilteredState(e.target.value)}>
        {states.sort().map((state) => (
          <Option value={state}>{state}</Option>
        ))}
      </Select>
      <Table rowsPerPage={3}>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>City</TableHeader>
          <TableHeader>State</TableHeader>
          <TableHeader>Phone Number</TableHeader>
          <TableHeader>Genre</TableHeader>
        </TableRow>
        {restaurants ? restaurants
          .filter((restaurant) => (
            restaurant.name.toLowerCase().includes(filter.toLowerCase())
            || restaurant.city.toLowerCase().includes(filter.toLowerCase())
            || restaurant.genre.toLowerCase().includes(filter.toLowerCase())))
          .filter((restaurant) => restaurant.genre.includes(filteredGenre))
          .filter((restaurant) => restaurant.state.includes(filteredState))
          .map((restaurant) => (
            <TableRow expandableContent={renderExtra(restaurant)}>
              <TableColumn>
                {restaurant.name}
              </TableColumn>
              <TableColumn>
                {restaurant.city}
              </TableColumn>
              <TableColumn>
                {restaurant.state}
              </TableColumn>
              <TableColumn>
                {restaurant.telephone}
              </TableColumn>
              <TableColumn>
                {restaurant.genre.split(',').join(', ')}
              </TableColumn>
            </TableRow>
          )) : <div>Sorry, no matches</div>}
      </Table>
    </ThemeProvider>
  );
};
