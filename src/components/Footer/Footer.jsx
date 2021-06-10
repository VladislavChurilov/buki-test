import { createUseStyles } from 'react-jss';

export default function Chat() {
  const classes = useStyles();

  return (
    <div className={classes.footer} autoComplete="off">
      <ul className={classes.footerNavList}>
        <li className={classes.footerItem}>Home</li>
        <li className={classes.footerItem}>About</li>
        <li className={classes.footerItem}>Contact us</li>
      </ul>
      <span className={classes.copyright}>@ Copyright 2019</span>
    </div>
  );
}

const useStyles = createUseStyles({
  footer: {
    display: 'flex',
    // justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    // margin: 'auto',

    // alignItems: 'center',
    // width: '100%',
    // height: '60px',
    color: 'whitesmoke',
    // margin: '0',
  },
  footerNavList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: [15, 0, 15, 0],
    '&>:not(:last-child)': {
      marginRight: '100px',
    },
  },
  footerItem: {
    // display: 'flex',

    fontWeight: '600',
    fontSize: '24px',
    flexDirection: 'row',
    // flexWrap: 'wrap',
  },
  copyright: {
    fontWeight: '400',
    margin: 'auto',
    // width: '100%',
  },
});
