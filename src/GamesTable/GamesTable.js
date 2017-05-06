import React from 'react';
import { Table, TableBody } from 'material-ui/Table';

import GameTableRow from '../GameTableRow';

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
