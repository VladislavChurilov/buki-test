import { createUseStyles } from 'react-jss';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';

export default function Chat() {
  const classes = useStyles();

  return (
    <form className={classes.messageForm} autoComplete="off">
      <input
        // onChange={handleChange}
        className={classes.messageInput}
        type="text"
        name="name"
        // variant="contained"
        placeholder="Type something..."
        // value={name}
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
    // width: '100%',
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
    // margin: [5, 15, 10, 0],
  },
});
