import React, { Component } from 'react'
import Form from './form/Form'
import Comment from './comment/Comment'
import LineChart from './linechart/LineChart'

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
      <div className="container">
        <Form listComments={this.state.comments} updateComments={this.updateComments}/>
        <Comment listComments={this.state.comments} updateComments={this.updateComments}/>
        <div className="row">
          <LineChart listComments={this.state.comments} updateComments={this.updateComments}/>
        </div>
      </div>
    )
  }
}

export default Main