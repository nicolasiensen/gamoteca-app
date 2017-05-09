import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody } from 'material-ui/Table';

import GameTableRow from '../GameTableRow';
import * as shapes from '../shapes';

export default function GamesTable(props) {
  return (
    <Table selectable={false}>
      <TableBody displayRowCheckbox={false} showRowHover>
        {
          props.games.map(game => <GameTableRow key={game.uuid} game={game} />)
        }
      </TableBody>
    </Table>
  )
}

GamesTable.propTypes = {
  games: PropTypes.arrayOf(shapes.game).isRequired
}
