import React from 'react';
import axios from 'axios';
import moment from 'moment';

class SavedArticle extends React.Component {

  handleRemove = (article) => {
    axios.delete(`/api/articles/${article._id}`)
    .then(response => this.props.handleRemove(article))
    .catch(response => console.log('nope'));
  }

  render() {
    return(
      <div>
        <h1>{this.props.article.title}</h1>
        <h2>{`Saved ${moment(this.props.article.date).format('MM/DD/YYYY')}`}</h2>
        <button className="button is-success" onClick={() => this.handleRemove(this.props.article)}>
          Remove
        </button>
      </div>
    );
  }
}

export default SavedArticle;