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

export default function GameTableRow(props) {
  return (
    <TableRow>
      <TableRowColumn>{props.game.name}</TableRowColumn>
      <TableRowColumn>{dateFormater.format(new Date(props.game.released_at))}</TableRowColumn>
      <TableRowColumn>{numberFormater.format(props.game.price/100)}</TableRowColumn>
    </TableRow>
  );
}
