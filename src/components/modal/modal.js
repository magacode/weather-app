import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import ModalBody from '../modal-body';

const useStyles = makeStyles((theme) => ({
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
}));

export default function TransitionsModal(props) {

    const classes = useStyles();
    const { isOpen, isClose, data } = props;

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={isOpen}
                onClose={isClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={isOpen}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Прогноз погоды в г. {data.name}</h2>
                        <span id="transition-modal-description">прогноз на неделю</span>
                        <ModalBody data={data.coord} />
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}