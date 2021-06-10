import { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector, useDispatch } from 'react-redux';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

// import Message from './Message';
import MessageInput from './MessageInput';

import { getMessages } from '../../redux/selectors';
import { fetchMessages } from '../../redux/operations';

export default function Chat() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const messages = useSelector(getMessages);
  console.log('chat', messages);

  // const currentPage = useSelector(getCurrentPage);
  useEffect(() => {
    dispatch(fetchMessages());
    console.log('usechat', messages);
  }, [dispatch]);

  // const avatar =
  //   'https://cdn.pixabay.com/photo/2013/07/13/12/16/horse-159512_960_720.png';
  return (
    <div>hhhh</div>
    // <>
    //   <div className={classes.chat}>
    //     <ul className={classes.messageList}>
    //       {messages &&
    //         messages.map(({ id, avatar, created_at, message, user }) => (
    //           <li key={id} className={classes.messageItem}>
    //             <img
    //               className={classes.img}
    //               src={avatar}
    //               alt="avatar"
    //               width="60"
    //               height="60"
    //             />
    //             <div className={classes.leftBlock}>
    //               <h2 className={classes.name}>{user}</h2>
    //               <p className={classes.otherMessage}>{message}</p>
    //             </div>
    //             <div className={classes.raightBlock}>
    //               <span className={classes.date}>{created_at}</span>
    //               <FavoriteBorderIcon />
    //               {/* <FavoriteIcon color="#8cc054" /> */}
    //             </div>
    //           </li>
    //         ))}
    //     </ul>
    //     <ul className={classes.ownMessageList}>
    //       <li className={classes.ownMessageItem}>
    //         <img
    //           className={classes.img}
    //           src={avatar}
    //           alt="avatar"
    //           width="60"
    //           height="60"
    //         />
    //         <div className={classes.leftBlock}>
    //           <h2 className={classes.name}>Name</h2>
    //           <p className={classes.ownMessage}>message</p>
    //         </div>
    //         <div className={classes.raightBlock}>
    //           <span className={classes.date}>date </span>
    //         </div>
    //       </li>
    //     </ul>
    //   </div>
    //   <MessageInput />
    // </>
  );
}

const useStyles = createUseStyles({
  chat: {
    // display: 'flex',
    // alignItems: 'center',
    // width: '100%',
    // height: '30px',
    backgroundColor: 'whitesmoke',
    padding: [20, 40, 20, 40],
  },
  messageList: {
    color: '#8cc054',
    // width: '200px',
    // fontWeight: '600',
    // listStyle: 'none',
    margin: '0',
    padding: '0',
    //написать не последний ребенок!!!!!!!!!!!!!!!!!!!!!!!!1
  },

  messageItem: {
    display: 'flex',
    // justifyContent: 'space-between',
    backgroundColor: '#e2e2e2',
    fontWeight: '500',

    width: '54%',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  img: {
    margin: '10px',
  },
  leftBlock: {
    // marginLeft: '0',
  },
  otherMessage: {
    margin: '0',
    color: 'black',
    width: '100%',
    marginBottom: '5px',
  },
  name: {
    fontWeight: '500',
    margin: '0',
    marginTop: '8px',
  },
  raightBlock: {
    display: 'flex',
    flexDirection: 'column',
    height: '80px',
    marginLeft: 'auto',
  },
  date: {
    color: '#848583',
    fontWeight: '400',
    margin: [5, 10, 30, 0],
  },
  ownMessageList: {
    color: '#8cc054',
    // width: '200px',
    // fontWeight: '600',

    // listStyle: 'none',
    margin: '0',
    padding: '0',
    //написать не последний ребенок!!!!!!!!!!!!!!!!!!!!!!!!1
  },
  ownMessageItem: {
    display: 'flex',
    // justifyContent: 'space-between',
    backgroundColor: '#4b4d4a',
    width: '54%',
    marginLeft: 'auto',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  ownMessage: {
    margin: '0',
    marginBottom: '5px',
    color: 'whitesmoke',
    fontWeight: '400',
    width: '100%',
  },
});
