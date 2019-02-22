import React from 'react';
import { tableShape } from '../../types';

import Seats from '../Seats';
import Cards from '../Cards';
import Pots from '../Pots';

import './Table.css';

const Table = ({ table }) => (
  <div className="Table">
    <div>
      {table.currentHand ? <Seats seats={table.seats} players={table.currentHand.players} /> : null}
      {table.currentHand ? <Cards values={table.currentHand.communityCards} /> : null }
      {table.currentHand ? <Pots pots={table.currentHand.pots} /> : null }
    </div>
  </div>
);

Table.propTypes = {
  table: tableShape.isRequired,
};

export default Table;
