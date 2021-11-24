
import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css'


const Modal = (props) => {

    const Backdrop = (props) =>{ return <div className={classes.backdrop} onClick={props.onClose} ></div> }
    const Overlay = (props) => { return <div className={classes.modal}><div className={classes.content}>{props.children}</div></div> }


    return(
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById('modal'))}
            {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, document.getElementById('modal'))}
        </React.Fragment>
    )
}
export default Modal;