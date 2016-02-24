import React from 'react';
import $ from 'jquery'
import Article from './article'
import Average2014 from './avg2014'
class Main extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    let self = this
    $.ajax({
      type: "GET",
      url: 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=Clinton&sort=newest&api-key=0142530c927605b03d31c152d99e76f3:12:74506890',
      success: function(data){
        let articles = data.response.docs
        self.setState({
          articles: articles
        })
      }
    })
  }




  render () {
    let articles = this.state.articles.map(article => {
      return <Article key={article._id} article={article}/>
    })
    return(
      <section className="main-wrapper">
        <h1> Most Recent NY Times Articles</h1>
        {articles}
        <Average2014/>
      </section>
    )
  }
}

export default Main;
