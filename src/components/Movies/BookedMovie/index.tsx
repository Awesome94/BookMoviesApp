import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import './style.css'

function createData(poster: string, name: string, summary: string, assignee: string, tickets: number) {
    return { poster, name, summary, assignee, tickets };
  }
  
const rows = [
    createData(
        'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg',
        'The Terminator',
        'The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord\'s encounter with his father the ambitious celestial being Ego.',
        'David Kwamboka',
        3
    )
];


const BookedMovies: React.FC=() => {
    return <TableContainer>
      <Table className="BookedPoster" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="left" className="Thumbtitle">Poster</TableCell>
            <TableCell align="left">Summary</TableCell>
            <TableCell align="left">Assignee</TableCell>
            <TableCell align="left">Tickets</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell> {row.name}</TableCell>
              <TableCell align="left" className="Thumbnail"><img src={row.poster}/></TableCell>
              <TableCell align="left" className="Summary">{row.summary}</TableCell>
              <TableCell align="left">{row.assignee}</TableCell>
              <TableCell align="left">{row.tickets}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
}

export default BookedMovies;