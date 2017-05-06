import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';

const dateFormater = Intl.DateTimeFormat(navigator.language, {
  month: 'short',
  year: 'numeric',
});

const numberFormater = Intl.NumberFormat(navigator.language, {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
});

export default function GameTableRow({ game, ...props }) {
  return (
    <TableRow {...props}>
      <TableRowColumn>{game.name}</TableRowColumn>
      <TableRowColumn>{dateFormater.format(new Date(game.released_at))}</TableRowColumn>
      <TableRowColumn>{numberFormater.format(game.price/100)}</TableRowColumn>
    </TableRow>
  );
}
