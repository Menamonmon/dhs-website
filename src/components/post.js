import React from "react";
import './post.css';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    let { title, content, dateCreated, author } = props;
    this.state = {
      title: title,
      content: content,
      dateCreated: dateCreated,
      author: author,
      fullContent: false,
    }
  }

  truncateChars(content, charLimit) {
    if (content.length < charLimit) {
      return content;
    }
    return content.substr(0, charLimit - 3) + '...';
  }

  truncateStr(content, wordLimit) {
    let wordList = content.split(" ");
    if (wordList.length < wordLimit) {
      return content;
    }
    return wordList.slice(0, wordLimit - 1).join(" ") + "...";
  } 

  render() {
    let imgSrc = this.state.author.imgSrc;
    let authorImage = < img src = {
      imgSrc.length == 0 ? 'https://www.pikpng.com/pngl/m/16-168770_user-iconset-no-profile-picture-icon-circle-clipart.png' : imgSrc}
    className = "post-author-img"
    />;

    let readMore = this.state.content.split(" ").length < 100 ? null : <a
      className="post-read-more"
      onClick={
        () => this.setState((state) => ({
          fullContent: !state.fullContent
        }))}>Read {this.state.fullContent ? "Less" : "More"}</a>;

    return (
      <div className="post-container">
        <div className="post-header">
          <div className="post-author-container">
            {authorImage}
            <h4 className="post-author-name">{ this.state.author.name }</h4>
          </div>
          <h2 className="post-title">{ this.truncateChars(this.state.title, 35) }</h2>
        </div>
        <div className="post-content-container">
          <p className="post-content">
            {this.state.fullContent ? this.state.content : this.truncateStr(this.state.content, 100)}
            {readMore}
          </p>
          <p className="post-date" > { this.state.dateCreated.toLocaleString() }</p>
        </div>
      </div>
    );
  }
}