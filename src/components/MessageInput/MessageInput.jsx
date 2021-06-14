import { createUseStyles } from 'react-jss';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../redux/operations';

export default function Chat() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const handleChange = useCallback(e => {
    setMessage(e.currentTarget.value);
    console.log(e.currentTarget.value);
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      dispatch(addMessage(message));
      setMessage('');
    },
    [dispatch, message],
  );
  return (
    <form
      className={classes.messageForm}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <input
        className={classes.messageInput}
        type="text"
        value={message}
        name="message"
        onChange={handleChange}
        placeholder="Type something..."
        required
      />
      <button className={classes.messageButton}>Send</button>
    </form>
  );
}

const useStyles = createUseStyles({
  messageForm: {
    display: 'flex',
    alignItems: 'center',
    height: '80px',
    backgroundColor: '#e2e2e2',
    padding: [20, 40, 25, 40],
  },
  messageInput: {
    marginRight: '10px',
    paddingLeft: '15px',
    width: '80%',
    height: '40px',
    borderRadius: '5px',

    border: 'none',
  },
  messageButton: {
    width: '20%',
    height: '50px',
    fontSize: '24px',
    fontWeight: '600',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#8cc054',
    cursor: 'pointer',
  },
});
