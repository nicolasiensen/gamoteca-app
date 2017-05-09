import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

jest.mock('../api');
import * as api from '../api';

import { createGame } from '../factories';
import App from './App';

const mountComponent = (props) => mount(
  <App {...props} />, {
    context: { muiTheme: getMuiTheme() },
    childContextTypes: { muiTheme: PropTypes.object.isRequired }
  }
);

let component;
const games = [createGame(), createGame(), createGame()];

describe('when the API is loading the games list', () => {
  beforeEach(() => {
    api.loadGames = jest.fn(() => new Promise(resolve => {}));
    component = mountComponent();
  });

  it('should render a circular progress', () => {
    expect(component.find('CircularProgress').length).toBe(1);
  });

  it('should not render the games table', () => {
    expect(component.find('GamesTable').length).toBe(0);
  });

  it('should not open the error dialog', () => {
    expect(component.findWhere(c => c.key() === 'errorDialog').prop('open')).toBeFalsy();
  });
});

describe('when the API respond with the games list', () => {
  beforeEach(async () => {
    api.loadGames = jest.fn(() => new Promise(resolve => resolve({games})))
    component = await mountComponent();
  });

  it('should render the games table', () => {
    expect(component.find('GamesTable').length).toBe(1);
  });

  it('should pass the games list to the games table', () => {
    expect(component.find('GamesTable').prop('games')).toBe(games);
  });

  it('should not render the circular progress', () => {
    expect(component.find('CircularProgress').length).toBe(0);
  });
});

describe('when the API respond with an error', () => {
  beforeEach(async () => {
    api.loadGames = jest.fn(() => new Promise((resolve, reject) => reject()))
    component = await mountComponent();
  });

  it('should render the error dialog', () => {
    expect(component.findWhere(c => c.key() === 'errorDialog').prop('open')).toBeTruthy();
  });
});
