import React, { PropTypes } from 'react'
import $ from 'jquery'

class Average2014 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      monday:{},
      tuesday: {},
      wednesday: {},
      thursday: {},
      friday: {}
    }
    this.filterDaysOfWeek = this.filterDaysOfWeek.bind(this)
  }

  componentDidMount() {
    let self = this
    $.ajax({
      type: 'GET',
      url: 'http://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20140101&end_date=20141231&facet_field=day_of_week&facet_filter=true&api-key=0142530c927605b03d31c152d99e76f3:12:74506890',
      success: function(avg){
        let daysOfWeek = avg.response.facets.day_of_week.terms
        self.filterDaysOfWeek(daysOfWeek)
      }
    })
  }

  filterDaysOfWeek(daysOfWeek){
    console.log(daysOfWeek)
    let day = daysOfWeek
    function monday(day){

      if (day.term === "Monday"){
        return day.count
      };
    }
    function tuesday(day){
      if (day.term === "Tuesday"){
        return day.count
      };
    }
    function wednesday(day){
      if (day.term === "Wednesday"){
        return day.count
      };
    }
    function thursday(day){
      if (day.term === "Thursday"){
        return day.count
      };
    }
    function friday(day){
      if( day.term === "Friday"){
        return day.count
      };
    }

    let mon = daysOfWeek.filter(monday)
    let tues = daysOfWeek.filter(tuesday)
    let wed = daysOfWeek.filter(wednesday)
    let thurs = daysOfWeek.filter(thursday)
    let fri = daysOfWeek.filter(friday)

    this.setState({
      monday: mon[0],
      tuesday: tues[0],
      wednesday: wed[0],
      thursday: thurs[0],
      friday: fri[0]
    })
  }

  render () {
    let day = this.state
    let mondayCount = day.monday.count/365
    let tuesdayCount = day.tuesday.count/365
    let wednesdayCount = day.wednesday.count/365
    let thursdayCount = day.thursday.count/365
    let fridayCount = day.friday.count/365
    return(
      <section className="averages">
        <h2>Average Articles Posted Per Day in 2014</h2>
        <p>{day.monday.term} had {Math.round(mondayCount)} articles on average</p>
        <p>{day.tuesday.term} had {Math.round(tuesdayCount)} articles on average</p>
        <p>{day.wednesday.term} had {Math.round(wednesdayCount)} articles on average</p>
        <p>{day.thursday.term} had {Math.round(thursdayCount)} articles on average</p>
        <p>{day.friday.term} had {Math.round(fridayCount)} articles on average</p>
      </section>
    )
  }
}

export default Average2014;
