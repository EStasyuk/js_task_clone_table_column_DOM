'use strict';

// write your code here
const table = document.querySelector('table');

const thead = table.querySelector('thead');
const tbody = table.querySelector('tbody');
const tfoot = table.querySelector('tfoot');

function processRow(row) {
  const cells = row.querySelectorAll('th, td');

  if (cells.length < 5) {
    return;
  }

  const secondColumnCell = cells[1];
  const lastColumnCell = cells[cells.length - 1];
  const clonedCell = secondColumnCell.cloneNode(true);

  row.insertBefore(clonedCell, lastColumnCell);
}

const theadRow = thead.querySelector('tr');

if (theadRow) {
  processRow(theadRow);
}

const tbodyRows = tbody.querySelectorAll('tr');

tbodyRows.forEach((row) => {
  processRow(row);
});

const tfootRow = tfoot.querySelector('tr');

if (tfootRow) {
  processRow(tfootRow);
}
