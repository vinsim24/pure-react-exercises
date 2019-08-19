import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"


const Tweet = () => 
   (
    <div className="tweet">
      <Avatar/>
      <div className="content">
        <NameWithHandle /><Time/>
        <Message />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );

const Avatar = () => 
  (
    <img
      src="https://www.gravatar.com/avatar/fcca30e4e07e590a000ab2ef7a8e1aca"
      className="avatar"
      alt="avatar" />
  );


const Message = () => 
  (
    <div className="message">
      This is less than 140 characters.
    </div>
  );


const NameWithHandle = () => 
  (
    <span className="name-with-handle">
      <span className="name">Vinod Philominraj</span>
      <span className="handle">@vinsim24</span>
    </span>
  );

const Time = () => (
  <span className="time">3h ago</span>
);
const ReplyButton = () => (
  <i className="fa fa-reply reply-button" />
);
const RetweetButton = () => (
  <i className="fa fa-retweet retweet-button" />
);
const LikeButton = () => (
  <i className="fa fa-heart like-button" />
);
const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

ReactDOM.render(<Tweet />, document.getElementById("root"));