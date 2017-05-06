import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';

import GameTableRow from './GameTableRow';

const game = {
  id: 1505,
  image_url: "https://apollo2.dl.playstation.net/cdn/EP2002/CUSA...",
  name: "Rocket League®",
  uuid: "EP2002-CUSA01433_00-ROCKETLEAGUEEU01",
  platforms: ["PS4™"],
  released_at: "2015-07-07 00:00:00",
  price: 1399,
  created_at: "2017-05-06 12:42:55",
  updated_at: "2017-05-06 12:42:55",
  vr_enabled: false,
  score: 4.7,
  score_count: 185092,
}

const releasedAt = 'Jul 2015';
const price = '€13.99';

Intl.DateTimeFormat = {
  format: jest.fn(
    date => date === game.date && releasedAt
  )
}

Intl.NumberFormat = {
  format: jest.fn(
    number => number === game.price/100 && price
  )
}

const component = shallow(<GameTableRow game={game} />);

it('should display the game title', () => {
  expect(component.findWhere(c => c.prop('children') === game.name).length).toBe(1);
});

it('should display the game release date', () => {
  expect(component.findWhere(c => c.prop('children') === releasedAt).length).toBe(1);
});

it('should display the game price', () => {
  expect(component.findWhere(c => c.prop('children') === price).length).toBe(1);
});
