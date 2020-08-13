import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 300,
      flexGrow: 1,
      minWidth: 300,
      transform: "translateZ(0)",
      // The position fixed scoping doesn't work in IE 11.
      // Disable this demo to preserve the others.
      "@media all and (-ms-high-contrast: none)": {
        display: "none"
      }
    },
    modal: {
      display: "flex",
      padding: theme.spacing(1),
      alignItems: "center",
      justifyContent: "center"
    },
    paper: {
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  })
);

export default function ServerModal() {
  const classes = useStyles();
  const rootRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className={classes.root} ref={rootRef}>
      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        className={classes.modal}
        container={() => rootRef.current}
      >
        <div className={classes.paper}>
          <h2 id="server-modal-title">Book Movie</h2>
          <form>
            <input placeholder="name" />
          </form>
          <form>
            <input placeholder="number of tickets" />
          </form>
          <button>Ok</button>
          <button>Cancel</button>
          <p id="server-modal-description">
            If you disable JavaScript, you will still see me.
          </p>
        </div>
      </Modal>
    </div>
  );
}
