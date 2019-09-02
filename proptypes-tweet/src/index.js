import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

import "./index.css"


const Tweet = ({ tweet }) =>
  (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <NameWithHandle author={tweet.author} /><Time timestamp={tweet.timestamp} />
        <Message message={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );

const Avatar = ({ hash }) => {
  var url = `https://www.gravatar.com/avatar/${hash}`;
  return (
    <img
      src={url}
      className="avatar"
      alt="avatar" />
  );
}

Avatar.propTypes = {
  hash : PropTypes.string.isRequired
}

const Message = ({ message }) =>
  (
    <div className="message">
      {message}
    </div>
  );

Message.propTypes = {
  message : PropTypes.string.isRequired
}

const NameWithHandle = ({ author }) => {
  const { handle, name } = author
  return (
    <span className="name-with-handle">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

NameWithHandle.propTypes = {
  author : PropTypes.shape({
    name : PropTypes.string.isRequired,
    handle : PropTypes.string.isRequired
  }).isRequired
};

const Time = ({ timestamp }) => {
  let timeString = moment(timestamp).fromNow();
  return (
    <span className="time">{timeString}</span>
  )
};

Time.propTypes = {
  timestamp : PropTypes.string.isRequired
}

const ReplyButton = () => (
  <i className="fa fa-reply reply-button" />
);


const Count = ({ count }) => {
  if (count > 0) {
    return (
      <span className="retweet-count">
        {count}
      </span>
    );
  } else {
    return null;
  }
}
const RetweetButton = ({ count }) => (
  <span className="retweet-button">
    <i className="fa fa-retweet" />
    <Count count={count} />
  </span>
);

RetweetButton.propTypes = {
  count: PropTypes.number
};

const LikeButton = ({ count }) => (
  <span className="like-button">
    <i className="fa fa-heart" />
    <span className="like-count">
      {count ? count : null}
    </span>
  </span>
);

LikeButton.propTypes = {
  count : PropTypes.number
}

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

var testTweet = {
  message: "Something about cats.",
  gravatar: "fcca30e4e07e590a000ab2ef7a8e1aca",
  author: {
    handle: "vinsim24",
    name: "Vinod Philominraj"
  },
  likes: 2,
  retweets: 2,
  timestamp: "2019-07-30 21:24:37"
};

ReactDOM.render(<Tweet tweet={testTweet} />, document.getElementById("root"));