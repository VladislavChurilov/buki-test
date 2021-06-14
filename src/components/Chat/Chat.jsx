import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector, useDispatch } from 'react-redux';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CircularProgress from '@material-ui/core/CircularProgress';

import MessageInput from '../MessageInput';

import { getMessages, getLoading } from '../../redux/selectors';
import { deleteMessage, editMessage } from '../../redux/actions';

export default function Chat() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const messages = useSelector(getMessages);
  const isLoading = useSelector(getLoading);

  ////////////Удаление///////////////////
  const onDelete = id => {
    dispatch(deleteMessage(id));
  };
  ////////// Редактирование//////////////////
  const [value, setValue] = useState();
  const [targetId, setTargetId] = useState();

  const onChange = e => {
    setValue(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(editMessage({ targetId, value }));
    setTargetId(null);
  };

  const onEdit = (id, message) => {
    setTargetId(id);
    setValue(message);
  };

  return (
    <>
      <div className={classes.chat}>
        {isLoading && <CircularProgress />}
        <ul className={classes.messageList}>
          {messages.map(({ id, avatar, created_at, message, user }) =>
            user !== 'Taylor' ? (
              <li key={id} className={classes.messageItem}>
                <img
                  className={classes.img}
                  src={avatar}
                  alt="avatar"
                  width="60"
                  height="60"
                />
                <div className={classes.messageCont}>
                  <div className={classes.topBlock}>
                    <h2 className={classes.name}>{user}</h2>
                    <span className={classes.date}>{created_at}</span>
                  </div>
                  <div className={classes.downBlock}>
                    <p className={classes.otherMessage}>{message}</p>
                    {targetId !== id ? (
                      <FavoriteBorderIcon
                        className={classes.icon}
                        onClick={() => setTargetId(id)}
                      />
                    ) : (
                      <FavoriteIcon
                        className={classes.icon}
                        onClick={() => setTargetId(id)}
                      />
                    )}
                  </div>
                </div>
              </li>
            ) : (
              <li key={id} className={classes.ownMessageItem}>
                <img
                  className={classes.img}
                  src={avatar}
                  alt="avatar"
                  width="60"
                  height="60"
                />
                <div className={classes.messageCont}>
                  <div className={classes.topBlock}>
                    <h2 className={classes.name}>{user}</h2>
                    <span className={classes.date}>{created_at}</span>
                  </div>
                  <div className={classes.downBlock}>
                    {targetId !== id ? (
                      <p className={classes.ownMessage}>{message}</p>
                    ) : (
                      <form onSubmit={onSubmit}>
                        <input value={value} onChange={onChange} />
                        <button type="submit">Сохранить</button>
                      </form>
                    )}
                    <div className={classes.icon}>
                      <DeleteIcon onClick={() => onDelete(id)} />
                      <EditIcon onClick={() => onEdit(id, message)} />
                    </div>
                  </div>
                </div>
              </li>
            ),
          )}
        </ul>
      </div>

      <MessageInput />
    </>
  );
}

const useStyles = createUseStyles({
  chat: {
    backgroundColor: 'whitesmoke',
    padding: [20, 40, 20, 40],
  },
  messageList: {
    color: '#8cc054',
    margin: '0',
    padding: '0',
  },

  messageItem: {
    display: 'flex',
    backgroundColor: '#e2e2e2',
    fontWeight: '500',

    width: '54%',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  messageCont: {
    display: 'block',
    width: '100%',
    height: '30px',
  },
  img: {
    margin: '10px',
  },
  topBlock: {
    display: 'flex',
  },
  downBlock: {
    display: 'flex',
    marginLeft: 'auto',
  },
  otherMessage: {
    margin: '0',
    color: 'black',
    width: '100%',
    marginBottom: '5px',
  },
  name: {
    width: '50%',
    height: '30px',
    fontWeight: '500',
    margin: '0',
    marginTop: '8px',
  },

  date: {
    height: '20px',
    color: '#848583',
    fontWeight: '400',
    marginLeft: 'auto',
    margin: [5, 10, 0, 'auto'],
  },
  icon: {
    cursor: 'pointer',
    margin: [15, 5, 5, 'auto'],
  },
  ownMessageList: {
    color: '#8cc054',
    margin: '0',
    padding: '0',
  },
  ownMessageItem: {
    display: 'flex',
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
    wordWrap: 'break-word',
    width: '400px',
  },
});
