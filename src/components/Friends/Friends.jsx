import PropTypes from 'prop-types';
import './Friends.css';

const FriendList = ({ friends }) => {
  return (
    <div className="friends">
      <ul className="friend-list">
        {friends.map(({ id, isOnline, avatar, name }) => (
          <li className="item" key={id}>
            <span className="status" status={isOnline ? 'true' : 'false'}>
              <div
                className="status-color"
                style={
                  isOnline
                    ? { backgroundColor: 'green' }
                    : { backgroundColor: 'red' }
                }
              ></div>
            </span>
            <img className="avatar" src={avatar} alt="" width="88" />
            <p className="name">{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default FriendList;
