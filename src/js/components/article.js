import React, { PropTypes } from 'react'

class Article extends React.Component {
  render () {
    return(
      <section className="article">
        <h3>{this.props.article.headline.main}</h3>
        <p>{this.props.article.snippet}</p>
        <a href={this.props.article.web_url}> Link to Full Article</a>
      </section>
    )
  }
}

export default Article;
