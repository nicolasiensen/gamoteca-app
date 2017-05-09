import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import GamesTable from '../GamesTable';
import * as api from '../api';

class App extends Component {
  constructor(props) {
    super(props);
    this.loadGames = this.loadGames.bind(this);
    this.state = { games: [], isLoadingGames: false, hasLoadingGamesError: false };
  }

  componentDidMount() {
    this.loadGames();
  }

  async loadGames() {
    try {
      this.setState({ isLoadingGames: true, hasLoadingGamesError: false });
      const response = await api.loadGames();
      const games = response.games;
      this.setState({ games, isLoadingGames: false });
    } catch(error) {
      this.setState({ isLoadingGames: false, hasLoadingGamesError: true });
    }
  }

  render() {
    return (
      <div>
        {
          this.state.isLoadingGames
          ? <CircularProgress />
          : <GamesTable games={this.state.games} />
        }
        <Dialog
          title="Oops... Something went wrong"
          key="errorDialog"
          open={this.state.hasLoadingGamesError}
          actions={
            <FlatButton label="Retry" key="retryButton" onTouchTap={this.loadGames} />
          }
        >
          There was an error while loading the games list, you should try it again.
        </Dialog>
      </div>
    );
  }
}

export default App;
