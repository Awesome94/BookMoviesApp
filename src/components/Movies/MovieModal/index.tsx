import  React,{useState, useContext} from "react";
import Modal from '@material-ui/core/Modal';
import {Button} from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { useForm, SubmitHandler } from "react-hook-form";
import MovieStore from '../../../stores/MovieStore';

import './style.css'
import axios from "axios";


type Props = {
  movieId: string;

}

type FormValues = {
  assignee: string;
  numberOftickets: number;
};

type currentMovie = {
  title: string;
  year: number;
  imdbID: string;
  Poster: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
    }),
  );


 const BookMovieModal: React.FC<Props>=(props)=>{
  const movieStore = useContext(MovieStore)
  const {currentUserName, addMovieId} =  movieStore;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [currentMovie, setCurrentMovie] = useState({})
  const [serverResponse, setServerResponse] = useState('')
  const { register, handleSubmit, setValue, errors } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = data => {
    const payload = {...currentMovie, ...data}
    axios.post(`${process.env.REACT_APP_API_URL}/book`, payload).then((response) => {
      setServerResponse("Movie booked successfully with Identifier:  " + response.data.success)
      addMovieId(response.data.success);
    }, (error) => {
      setServerResponse("Request failed !")
      console.log(error);
    });
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    const { movieId } = props;
    return fetch(`${process.env.REACT_APP_OMDBAPI}`+"&i="+movieId)
    .then(res => res.json()).then((movie:any) => {
      const currentMovie = {
       name: movie.Title,
       year: movie.Year,
       image: movie.Poster,
       imdbID: movie.imdbID,
       plot_summary: movie.Plot,
       username: currentUserName,
   }
   setCurrentMovie(currentMovie)
   }).then(()=>setOpen(true));
  };

  const body = (
  <Fade in={open}>
      <div className={classes.paper}>
          <h2 id="simple-modal-title">Book Movie</h2>
          <p id="simple-modal-description">
            Add Name to be assigned to and number of tickets.
        </p>
          <section className="modalContainer">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="ModalInput">
              <div className="nameForm">
                <label>Name</label>
                <input className="assignee"
                  name="assignee"
                  placeholder="Name of ticket owner"
                  ref={register({
                    required: true,
                    pattern: {
                    value: /^[a-zA-Z\s]+$/,
                    message: "Input should only be letters"
                  }})}/>
                  <a className="error">{errors.assignee && errors.assignee.message}</a>
              </div>
              <div className="ticketsForm">
                <label>Tickets</label> <br/>
                <input className="noOfTickets"
                  name="numberOftickets"
                  type="number"
                  min="1"
                  ref={register({required: true
                })}/>
                  <a className="error">{errors.numberOftickets && errors.numberOftickets.message}</a>
              </div>
            </div>
            <div className="identifier">
              <p>{serverResponse}</p>
            </div>
        <div className="modalButtons">
          <div className="bookBtn">
            <Button type="submit" variant="outlined" color="primary">Book</Button>
          </div>
          <div className="closeBtn">
            <Button onClick={handleClose} variant="outlined" color="primary">Close</Button>
          </div>
        </div>
            </form>
          </section>
    </div>
  </Fade>
  );
  return (
      <div>
        <Button onClick={handleOpen} variant="outlined" color="secondary">Book Movie</Button>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {body}
      </Modal>
    </div>
  );
}

export default BookMovieModal;