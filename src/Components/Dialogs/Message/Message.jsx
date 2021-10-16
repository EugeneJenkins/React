import React from 'react';
import classes from '../Dialogs.module.css';

const Message = (props) => (
  <div className={classes.message}>
    {' '}
    {props.massage}
  </div>
);

export default Message;
