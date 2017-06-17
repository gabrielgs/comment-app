import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Form from './form/Form'
import Comment from './comment/Comment'
import LineChart from './linechart/LineChart'
import Nav from './nav/Nav'
import './Main.css'

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comments: JSON.parse(localStorage.getItem('comments')) || []
    }

    this.updateComments = this.updateComments.bind(this);
  }

  updateComments(value) {
    this.setState({comments: value})
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <main className="main">
            <Route exact path='/' component={Form}/>
            <Route exact path='/' component={Comment}/>
            <Route path='/estadisticas' component={LineChart}/>
          </main>
        </div>
      </Router>
    )
  }
}

export default Main