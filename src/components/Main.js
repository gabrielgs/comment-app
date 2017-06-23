import React, { Component } from 'react'
import Form from './form/Form'
import Comment from './comment/Comment'
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
      <div className="container">
        <Nav />
        <main className="main">
          <Form listComments={this.state.comments} updateComments={this.updateComments}/>
          <Comment listComments={this.state.comments} updateComments={this.updateComments}/>
        </main>
      </div>
    )
  }
}

export default Main