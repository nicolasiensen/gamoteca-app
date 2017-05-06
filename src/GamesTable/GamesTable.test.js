import React from 'react';
import { shallow } from 'enzyme';

import GamesTable from './GamesTable';
import { createGame } from '../factories'

const games = [createGame(), createGame(), createGame()];

it('should display all the games', () => {
  const component = shallow(<GamesTable games={games} />);
  games.forEach(
    game => expect(component.find('GameTableRow').findWhere(c => c.prop('game') === game).length).toBe(1)
  )
});
