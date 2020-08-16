import React,{useEffect, useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';

import './style.css'


type Props = {
  bookedMovie:any;
  setBookedMovie:any;
  setselectedMovie:any;
}

const BookedMovies: React.FC<Props>=(props) => {

    const token = localStorage.getItem('token')
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    useEffect(() => {
      axios.get(`${process.env.REACT_APP_API_URL}/book/all`,config).then(({data})=>{
        console.log("mama", data)
        props.setBookedMovie(data)
        props.setselectedMovie(data)
      })
  },[])

    return <TableContainer>
      <Table className="BookedPoster" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="left" className="Thumbtitle">Poster</TableCell>
            <TableCell align="left">Summary</TableCell>
            <TableCell align="left">Assignee</TableCell>
            <TableCell align="left">Tickets</TableCell>
            <TableCell align="left">Identifier</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {props.bookedMovie.map((movie:any, index:number) => (
            <TableRow key={index}>
              <TableCell> {movie.name} ({movie.year})</TableCell>
              <TableCell align="left" className="Thumbnail"><img src={movie.image}/></TableCell>
              <TableCell align="left" className="Summary">{movie.plot_summary}</TableCell>
              <TableCell align="left">{movie.assignee}</TableCell>
              <TableCell align="left">{movie.tickets}</TableCell>
              <TableCell align="left">{movie.identifier}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
}

export default BookedMovies;