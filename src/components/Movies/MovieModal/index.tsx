import  React from "react";
import Modal from '@material-ui/core/Modal';
import {Button} from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { useForm } from "react-hook-form";

import './style.css'

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

 const BookMovieModal: React.FC=()=>{
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const body = (
  <Fade in={open}>
      <div className={classes.paper}>
          <h2 id="simple-modal-title">Book Movie</h2>
          <p id="simple-modal-description">
            Add Name to be assigned to and number of tickets.
        </p>
          <section className="modalContainer">
            <div className="ModalInput">
              <form className="nameForm">
                <label>Name</label>
                <input className="assignee" />
              </form>
              <form className="ticketsForm">
                <label>Tickets</label> <br/>
              <input className="noOfTickets" type="number" min="1" placeholder="0"/>
              </form>
            </div>
        <div className="modalButtons">
          <div className="bookBtn">
            <Button onClick={handleClose} variant="outlined" color="secondary">Book</Button>
          </div>
          <div className="closeBtn">
            <Button onClick={handleClose} variant="outlined" color="secondary">Cancel</Button>
          </div>
        </div>
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