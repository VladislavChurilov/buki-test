import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';

import {
  getMessages,
  getNumberUsers,
  lastMessageDate,
} from '../../redux/selectors';

export default function Header() {
  const classes = useStyles();
  const messages = useSelector(getMessages);
  const users = useSelector(getNumberUsers);
  const lastDate = useSelector(lastMessageDate);

  return (
    <div className={classes.header}>
      <h1 aria-label="My Chat" className={classes.logo}>
        My Chat
      </h1>
      <div className={classes.informationBlock}>
        <span className={classes.infoMes}>
          users {users.length} messages {messages.length}{' '}
        </span>
        <span className={classes.infoLastMes}>Last message {lastDate} </span>
      </div>
    </div>
  );
}

const useStyles = createUseStyles({
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: [10, 40, 15, 40],
  },
  logo: {
    margin: '0',
    color: '#8cc054',
    width: '200px',
    fontSize: '30px',
    fontWeight: '600',
  },
  informationBlock: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  infoMes: {
    color: 'whitesmoke',
    fontWeight: '600',
  },
  infoLastMes: {
    color: 'whitesmoke',
  },
});
