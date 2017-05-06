import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';

import GameTableRow from './GameTableRow';
import { createGame } from '../factories';

const game = createGame();

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

const component = shallow(<GameTableRow game={game} className="row" />);

it('should propagate the props to the TableRow', () => {
  expect(component.find('TableRow').prop('className')).toBe('row')
});

it('should display the game title', () => {
  expect(component.findWhere(c => c.prop('children') === game.name).length).toBe(1);
});

it('should display the game release date', () => {
  expect(component.findWhere(c => c.prop('children') === releasedAt).length).toBe(1);
});

it('should display the game price', () => {
  expect(component.findWhere(c => c.prop('children') === price).length).toBe(1);
});
