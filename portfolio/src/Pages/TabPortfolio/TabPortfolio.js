import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Formation Java', 'Devlopement', '10H', '12H'),
  createData("L'affaire Patersson", 'Communication', '10H', '30H'),
  createData("Formation excel", 'Init PC', '10H', '16H'),
  createData("Les scouts", 'Soft skils', '10H', '?H'),
  createData("Plex ", 'Admin système et réseau', '3H', '3H'),
];

function TabPortfolio() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow  sx={{color: 'white'}}>
            <TableCell>Activité</TableCell>
            <TableCell align="right">	Thème</TableCell>
            <TableCell align="right">Valorisation</TableCell>
            <TableCell align="right">Heures passées</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TabPortfolio