import React from 'react';
import './tournament.styles.scss';

var Tournament = React.createClass({
  getInitialState: function () {
    return {
      articles: {
        'article': {
          "color": "FEC006",
          "title": "Tournament--name",
          "thumbnail": "",
          "category": "prev-live",
          "excerpt": "discription",
          "date": new Date()
        },
        'article-1': {
          "color": "2196F3",
          "title": "Tournament--name",
          "thumbnail": "",
          "category": "prev-live",
          "excerpt": "discription",
          "date": new Date()
        },
        'article-2': {
          "color": "FE5621",
          "title": "Tournament--name",
          "thumbnail": "",
          "category": "prev-live",
          "excerpt": "discription",
          "date": new Date()
        },
        'article-3': {
          "color": "673AB7",
          "title": "Tournament--name",
          "thumbnail": "",
          "category": "prev-live",
          "excerpt": "discription",
          "date": new Date()
        }
      }
    }
  },
  renderArticle: function (key) {
    return (
      <div className="column">
        <Article key={key} index={key} details={this.state.articles[key]} />
      </div>
    )
  },
  render: function () {
    return (
      <div className="app">
        <div className="container">
          {Object.keys(this.state.articles).map(this.renderArticle)}
        </div>
      </div>
    )
  }
});
             
var Article = React.createClass({
  render: function () {
    var details = this.props.details,
        styles = {
          backgroundColor: '#' + details.color
        };
    
    return (
      <article className="article">
        <h3 className="article__category" style={styles}>{details.category}</h3>
        <h2 className="article__title">{details.title}</h2>
        <p className="article__excerpt">{details.excerpt}</p>
      </article>
    )
  }
});

export default Tournament;