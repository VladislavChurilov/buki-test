import { createUseStyles } from 'react-jss';

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <h1 aria-label="My Chat" className={classes.logo}>
        My Chat
      </h1>
      <div className={classes.informationBlock}>
        <span className={classes.infoMes}>users messages</span>
        <span className={classes.infoLastMes}>Last message</span>
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
    // fontFamily: '30px',
    fontWeight: '600',
  },
  infoLastMes: {
    color: 'whitesmoke',
  },
});
